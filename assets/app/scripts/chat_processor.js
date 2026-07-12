const fs = require('fs');

// Función principal para procesar el archivo
function processChatExport(inputFile, outputFile) {
  try {
    // Leer el archivo JSON
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const chatData = JSON.parse(rawData);
    
    // Extraer el mapping
    const mapping = chatData.mapping;
    
    // Encontrar el nodo raíz (el que no tiene parent o es null)
    let rootId = null;
    for (const [id, node] of Object.entries(mapping)) {
      if (node.parent === null) {
        rootId = id;
        break;
      }
    }
    
    if (!rootId) {
      console.error('No se encontró el nodo raíz');
      return;
    }
    
    // Función para obtener el nombre del usuario según el rol
    function getDisplayName(role, node) {
      // Primero verificar si es un mensaje de sistema oculto
      if (node.message?.metadata?.is_visually_hidden_from_conversation) {
        return null; // Saltar mensajes ocultos
      }
      
      switch(role) {
        case 'user':
          return '👤 Usuario';
        case 'assistant':
          return '🤖 Liria';
        case 'system':
          return '⚙️ Sistema';
        case 'tool':
          return '🔧 Herramienta';
        default:
          return role;
      }
    }
    
    // Función para obtener el contenido del mensaje
    function getMessageContent(node) {
      if (!node.message || !node.message.content) return null;
      
      const content = node.message.content;
      
      // Si es texto plano
      if (content.content_type === 'text' && content.parts && content.parts.length > 0) {
        return content.parts[0];
      }
      
      // Si es un contexto editable del modelo (como el mensaje de Liria/Kairon)
      if (content.content_type === 'model_editable_context' && content.model_set_context) {
        return content.model_set_context;
      }
      
      // Si es un mensaje de usuario con contexto
      if (content.content_type === 'user_editable_context' && content.user_profile) {
        // No mostrar el perfil del usuario, solo mensajes importantes
        return null;
      }
      
      return null;
    }
    
    // Función para recorrer el árbol y extraer los mensajes
    function traverseTree(nodeId, messages, level = 0) {
      const node = mapping[nodeId];
      if (!node) return;
      
      // Verificar si el mensaje debe ser mostrado
      const shouldShow = node.message && 
                        node.message.content && 
                        node.message.author?.role !== 'system' && // Excluir system messages
                        !node.message.metadata?.is_visually_hidden_from_conversation;
      
      if (shouldShow) {
        const role = node.message.author.role;
        const displayName = getDisplayName(role, node);
        const content = getMessageContent(node);
        
        // Solo agregar si hay contenido y no está vacío
        if (displayName && content && content.trim() !== '') {
          // Verificar si es un mensaje de herramienta (como file_search) o un mensaje de contexto especial
          if (role === 'tool' && content.includes('All the files uploaded')) {
            // Saltar mensajes de herramienta que son solo confirmaciones
            return;
          }
          
          messages.push({
            id: nodeId,
            role: role,
            displayName: displayName,
            content: content,
            timestamp: node.message.create_time,
            level: level
          });
        }
      }
      
      // Recorrer los hijos
      if (node.children && node.children.length > 0) {
        for (const childId of node.children) {
          traverseTree(childId, messages, level + 1);
        }
      }
    }
    
    // Extraer todos los mensajes
    const messages = [];
    traverseTree(rootId, messages);
    
    // Ordenar los mensajes por timestamp (si existe) o por orden de aparición
    messages.sort((a, b) => {
      if (a.timestamp && b.timestamp) {
        return a.timestamp - b.timestamp;
      }
      return 0;
    });
    
    // Función para limpiar el contenido y formatearlo
    function cleanContent(content) {
      // Reemplazar múltiples saltos de línea con uno solo
      return content.replace(/\n{3,}/g, '\n\n').trim();
    }
    
    // Construir el diálogo completo en formato legible
    let dialog = [];
    let currentConversation = [];
    let previousRole = null;
    
    for (const msg of messages) {
      // Si cambia el rol, agregar el bloque anterior
      if (previousRole !== null && previousRole !== msg.role) {
        if (currentConversation.length > 0) {
          dialog.push({
            type: 'conversation_block',
            messages: [...currentConversation]
          });
          currentConversation = [];
        }
      }
      
      currentConversation.push({
        role: msg.role,
        displayName: msg.displayName,
        content: cleanContent(msg.content)
      });
      
      previousRole = msg.role;
    }
    
    // Agregar el último bloque
    if (currentConversation.length > 0) {
      dialog.push({
        type: 'conversation_block',
        messages: [...currentConversation]
      });
    }
    
    // Preparar el resultado final
    const result = {
      metadata: {
        totalMessages: messages.length,
        totalBlocks: dialog.length,
        exportDate: new Date().toISOString()
      },
      conversation: dialog,
      // También incluir una versión plana del diálogo
      flatConversation: messages.map(msg => ({
        role: msg.role,
        speaker: msg.displayName,
        content: cleanContent(msg.content)
      }))
    };
    
    // Escribir el archivo de salida
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf8');
    
    console.log(`✅ Procesamiento completado exitosamente!`);
    console.log(`📊 Mensajes totales: ${messages.length}`);
    console.log(`📝 Bloques de conversación: ${dialog.length}`);
    console.log(`💾 Archivo guardado en: ${outputFile}`);
    
    // Generar también una versión en Markdown para mejor legibilidad
    generateMarkdown(result, outputFile.replace('.json', '.md'));
    
  } catch (error) {
    console.error('❌ Error al procesar el archivo:', error.message);
  }
}

// Función para generar una versión en Markdown
function generateMarkdown(data, outputFile) {
  let markdown = '# 📜 Diálogo Reconstruido\n\n';
  
  for (const block of data.conversation) {
    for (const msg of block.messages) {
      markdown += `## ${msg.displayName}\n\n`;
      markdown += `${msg.content}\n\n`;
      markdown += '---\n\n';
    }
  }
  
  // Agregar estadísticas al final
  markdown += '\n## 📊 Estadísticas\n\n';
  markdown += `- **Total de mensajes:** ${data.metadata.totalMessages}\n`;
  markdown += `- **Bloques de conversación:** ${data.metadata.totalBlocks}\n`;
  markdown += `- **Fecha de exportación:** ${data.metadata.exportDate}\n`;
  
  // Contar mensajes por rol
  const roleCount = {};
  for (const msg of data.flatConversation) {
    roleCount[msg.role] = (roleCount[msg.role] || 0) + 1;
  }
  
  markdown += '\n### Distribución por rol:\n';
  for (const [role, count] of Object.entries(roleCount)) {
    const emoji = role === 'user' ? '👤' : role === 'assistant' ? '🤖' : '🔧';
    markdown += `- ${emoji} **${role}:** ${count} mensajes\n`;
  }
  
  fs.writeFileSync(outputFile, markdown, 'utf8');
  console.log(`📝 Versión Markdown guardada en: ${outputFile}`);
}

// Ejecutar el script
// Uso: node script.js ep_msj.json resultado.json
if (require.main === module) {
  const inputFile = process.argv[2] || 'ep_msj.json';
  const outputFile = process.argv[3] || 'dialogo_reconstruido.json';
  
  console.log(`🚀 Procesando archivo: ${inputFile}`);
  processChatExport(inputFile, outputFile);
}

// Exportar la función para uso en otros módulos
module.exports = { processChatExport };