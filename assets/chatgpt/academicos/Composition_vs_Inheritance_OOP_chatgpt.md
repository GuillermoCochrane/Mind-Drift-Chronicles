## Usuario · 4/8/26, 2:53:05 a. m.

Explain the difference between composition and inheritance in object-oriented programming.

## Asistente · 4/8/26, 2:53:05 a. m.

Both **inheritance** and **composition** are ways to reuse code and model relationships between objects, but they represent different ideas.
## Inheritance: "is-a"
Inheritance models an **"is-a"** relationship. A subclass extends a parent class and inherits its behavior.
Example:
```java
class Animal {
    void speak() {
        System.out.println("Some sound");
    }
}
class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Woof!");
    }
}
```
Here:

- A `Dog` **is an** `Animal`.
- `Dog` automatically inherits methods and fields from `Animal`.
- You can override behavior when needed.

**Advantages**
- Reduces duplicated code.
- Supports polymorphism naturally.
- Works well when there's a clear hierarchy.

**Disadvantages**
- Creates tight coupling between parent and child.
- Changes to the parent can unexpectedly affect subclasses.
- Deep inheritance trees become difficult to maintain.

---
## Composition: "has-a"
Composition models a **"has-a"** relationship. Instead of inheriting behavior, an object contains other objects and delegates work to them.
Example:
```java
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}
class Car {
    private Engine engine = new Engine();
    void start() {
        engine.start();
    }
}
```
Here:

- A `Car` **has an** `Engine`.
- `Car` doesn't inherit from `Engine`; it uses one.

**Advantages**
- Lower coupling.
- Easier to replace components.
- More flexible and modular.
- Encourages reusable classes.

**Disadvantages**
- Requires a bit more boilerplate.
- You often need to write forwarding (delegation) methods.

---
## Comparison
| Inheritance | Composition |
|-------------|-------------|
| "is-a" relationship | "has-a" relationship |
| Uses `extends` | Uses object fields |
| Strong coupling | Loose coupling |
| Behavior fixed by hierarchy | Behavior assembled from components |
| Harder to change at runtime | Easy to swap implementations |
| Can become rigid | More flexible |

---
## A practical example
Imagine you're building a game.
### Inheritance approach
```text
Character
├── Warrior
├── Mage
└── Archer
```
If later you want a **Flying Mage**, **Swimming Mage**, or **Invisible Warrior**, you may end up creating many subclasses:
```text
FlyingMage
SwimmingMage
InvisibleMage
FlyingWarrior
...
```
This is often called an **inheritance explosion**.

---
### Composition approach
Instead, you can build a character from abilities:
```java
class Character {
    private Movement movement;
    private Attack attack;
}
```
Implementations might be:
```text
Movement
├── Walk
├── Fly
└── Swim
Attack
├── SwordAttack
├── Fireball
└── BowAttack
```
Now you can mix and match:
```text
Character
  + Fly
  + Fireball
Character
  + Swim
  + SwordAttack
Character
  + Walk
  + BowAttack
```
Adding a new movement type doesn't require changing the character hierarchy.

---
## Which should you use?
A common guideline in object-oriented design is:
> **Favor composition over inheritance.**
Composition tends to produce code that's easier to extend, test, and maintain because objects depend on interchangeable components rather than fixed class hierarchies.
That doesn't mean inheritance is bad. It's appropriate when there is a genuine **"is-a"** relationship and subclasses truly specialize the parent without violating its expectations.
A good rule of thumb is:

- Use **inheritance** when the relationship is naturally hierarchical (e.g., `Dog` is an `Animal`, `Square` is a `Shape`).
- Use **composition** when you want to combine behaviors, swap implementations, or avoid rigid class hierarchies (e.g., a `Car` has an `Engine`, a game character has a movement strategy and a weapon).

In modern object-oriented design, you'll often see both used together: a small, well-designed inheritance hierarchy combined with composition to assemble most of an object's behavior.

## Usuario · 4/8/26, 2:53:37 a. m.

Can you summarize it as a checklist?

## Asistente · 4/8/26, 2:53:39 a. m.

### Composition vs. Inheritance Checklist
#### ✅ Use **Inheritance** when...

- ☐ There is a true **"is-a"** relationship.
- ☐ The child is a specialized version of the parent.
- ☐ Multiple subclasses share the same core behavior.
- ☐ Polymorphism through a common base class is important.
- ☐ The hierarchy is unlikely to change often.

**Example:** `Dog` → `Animal`

---
#### ✅ Use **Composition** when...

- ☐ There is a **"has-a"** relationship.
- ☐ You want to combine behaviors from independent components.
- ☐ Behavior may change or be swapped later.
- ☐ You want low coupling and high flexibility.
- ☐ You want to avoid large inheritance hierarchies.

**Example:** `Car` has an `Engine`

---
### Quick Decision Guide
Ask yourself:

- **Is it an "is-a" relationship?** → ✅ Inheritance
- **Is it a "has-a" relationship?** → ✅ Composition
- **Will I want to replace this behavior later?** → ✅ Composition
- **Am I creating many subclasses just to mix features?** → ✅ Composition
- **Is there a stable, natural hierarchy?** → ✅ Inheritance

---
### Rule of Thumb
> **Favor composition over inheritance.**
Use inheritance when it models reality cleanly; use composition when you want flexibility, modularity, and easier maintenance. Many well-designed object-oriented systems use a small amount of inheritance and rely primarily on composition for assembling behavior.

## Usuario · 4/8/26, 2:54:16 a. m.

Give me a practical example in JavaScript.

## Asistente · 4/8/26, 2:54:16 a. m.

JavaScript uses prototypes instead of classical inheritance under the hood, but ES6 `class` syntax makes the concepts easy to illustrate.
## Inheritance Example
A `Dog` **is an** `Animal`.
```javascript
class Animal {
  speak() {
    console.log("Some sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
const dog = new Dog();
dog.speak(); // Woof!
```
Here, `Dog` inherits everything from `Animal` and overrides `speak()`.

---
## Composition Example
A `Car` **has an** `Engine`.
```javascript
class Engine {
  start() {
    console.log("Engine started");
  }
}
class Car {
  constructor(engine) {
    this.engine = engine;
  }
  start() {
    this.engine.start();
  }
}
const car = new Car(new Engine());
car.start(); // Engine started
```
Notice that `Car` doesn't know *how* an engine works—it simply delegates the job.

---
## Why composition is more flexible
Suppose later you introduce an electric engine.
```javascript
class GasEngine {
  start() {
    console.log("Gas engine started");
  }
}
class ElectricEngine {
  start() {
    console.log("Electric motor started");
  }
}
class Car {
  constructor(engine) {
    this.engine = engine;
  }
  start() {
    this.engine.start();
  }
}
```
Now you can create different cars without changing the `Car` class:
```javascript
const gasCar = new Car(new GasEngine());
const electricCar = new Car(new ElectricEngine());
gasCar.start();      // Gas engine started
electricCar.start(); // Electric motor started
```
This follows the **Open/Closed Principle**: you extend the system by adding new classes instead of modifying existing ones.

---
## Real-world analogy
Think of a **gaming character**.
### ❌ Inheritance
```text
Character
├── Warrior
├── FlyingWarrior
├── InvisibleWarrior
├── FlyingInvisibleWarrior
└── ...
```
The number of subclasses quickly grows as you combine abilities.
### ✅ Composition
```javascript
class SwordAttack {
  attack() {
    console.log("Slash!");
  }
}
class FireballAttack {
  attack() {
    console.log("Fireball!");
  }
}
class Character {
  constructor(attackStyle) {
    this.attackStyle = attackStyle;
  }
  attack() {
    this.attackStyle.attack();
  }
}
const knight = new Character(new SwordAttack());
const mage = new Character(new FireballAttack());
knight.attack(); // Slash!
mage.attack();   // Fireball!
```
The `Character` class never changes. To add a new attack, you simply create another attack class:
```javascript
class BowAttack {
  attack() {
    console.log("Arrow!");
  }
}
const archer = new Character(new BowAttack());
archer.attack(); // Arrow!
```
This is one of the main reasons composition is so popular in modern JavaScript frameworks and applications: behavior is assembled from interchangeable pieces instead of being locked into a rigid inheritance hierarchy.