(async () => {
    const match = location.pathname.match(/c\/([a-f0-9-]+)/i);

    if (!match) {
        console.error("No pude encontrar el conversation_id.");
        return;
    }

    const conversationId = match[1];

    console.log("Conversation:", conversationId);

    const res = await fetch(`/backend-api/conversation/${conversationId}`, {
        credentials: "include"
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();

    console.log(json);

    const blob = new Blob(
        [JSON.stringify(json, null, 2)],
        { type: "application/json" }
    );

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${conversationId}.json`;
    a.click();

    URL.revokeObjectURL(a.href);

    console.log("JSON descargado.");
})();