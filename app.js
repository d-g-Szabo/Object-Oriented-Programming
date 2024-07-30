// Create a class to build some object instances
// Class names are capitalized by convention
// The structure of the class is similar to an object

class Biscuit {
  // Build the template for our object
  // The constructor is a method that runs when we create a new instance of the class
  // The paramaters are the placeholder for the actual values of the object instances
  constructor(
    biscuitName,
    biscuitCrunchiness,
    biscuitFlavour,
    biscuitBrand,
    biscuitDunkability
  ) {
    // I need to give my object instances a context
    (this.name = biscuitName),
      (this.crunchiness = biscuitCrunchiness),
      (this.flavour = biscuitFlavour),
      (this.brand = biscuitBrand),
      (this.dunkability = biscuitDunkability);
  }

  // Methods are functions that belong to the class
  // They can be called on the object instances
  description() {
    console.log(
      `The ${this.name} has a flavour of ${this.flavour} and is made by ${this.brand}. It has a crunchiness of ${this.crunchiness} and a dunkability of ${this.dunkability}.`
    );
  }
}

// Create a new instance of the class Biscuit
const custardCream = new Biscuit(
  "Custard Cream",
  6,
  "Vanilla",
  "Manny's Biscuits",
  4
);

console.log(custardCream);

const bourbon = new Biscuit("Bourbon", 7, "Chocolate", "Manny's Biscuits", 5);

console.log(bourbon);

// Call the method on the object instance
custardCream.description();
bourbon.description();

// name: biscuitName,
// crunchiness: biscuitCrunchiness,
// flavour: biscuitFlavour,
// brand: biscuitBrand,
// dunkability: biscuitDunkability

// Buil a sub-class that inherits the properties ofrom Biscuit
//! The idea is that

class Cookie extends Biscuit {
  constructor(
    biscuitName,
    biscuitCrunchiness,
    biscuitFlavour,
    biscuitBrand,
    biscuitDunkability,
    biscuitPrice
  ) {
    // super() is a method that calls the constructor of the parent class
    // It passes all it has to the sub-class so from Biscuit to Cookie, But no need to use them all and can add more
    super(
      biscuitName,
      biscuitCrunchiness,
      biscuitFlavour,
      biscuitBrand,
      biscuitDunkability
    );
    this.price = biscuitPrice; // If I want to add more properties to the sub-class
    // Delete properties what I don't want to use, deletes a property from the super class

    delete this.crunchiness; // Delete properties what I don't want to use
  }

  slogan() {
    console.log(
      `The ${this.name} is the best cookie in the world! Always trust ${this.brand}!`
    );
  }
}

const chocolateChip = new Cookie(
  "Chocolate Chip",
  null, // I don't want to use the crunchiness property
  "Chocolate",
  "Manny's Biscuits",
  5,
  1.5
);

console.log(chocolateChip);

chocolateChip.slogan();
// The sub-class inherits the methods of the parent class, but it has to contain all the properties necessary to work
chocolateChip.description();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  poop() {
    console.log(`${this.name} poops.`);
  }
}

const animal = new Animal("Dog");
animal.speak(); // Dog makes a noise.
animal.poop(); // Dog poops.

// Classes: Inheritance
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
dog.poop(); // Rex poops.

class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies.`);
  }
}

class Bird extends FlyingAnimal {
  speak() {
    console.log(`${this.name} chirps.`);
  }
}

const bird = new Bird("Sparrow");
bird.speak(); // Sparrow chirps.
bird.poop(); // Sparrow poops. (inherited from Animal)
bird.fly(); // Sparrow flies.

class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} oinks.`);
  }
}

const pig = new Pig("Porky");
pig.speak(); // Porky oinks.
pig.poop(); // Porky poops. (inherited from Animal)
pig.fly(); // Porky flies. (inherted from FlyingAnimal)

class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }

  attack() {
    console.log(`${this.name} deals ${this.damage} damage.`);
  }
}

class Sword extends Weapon {
  constructor(name, damage, sharpness) {
    super(name, damage);
    this.sharpness = sharpness;
  }

  slash() {
    console.log(`${this.name} slashes.`);
  }
}

const sword = new Sword("Excalibur", 100, "very sharp");
sword.slash(); // Excalibur slashes.
sword.attack(); // Excalibur deals 100 damage.

class Bow extends Weapon {
  constructor(name, damage, range) {
    super(name, damage);
    this.range = range;
  }

  shoot() {
    console.log(`${this.name} shoots.`);
  }
}

const bow = new Bow("Longbow", 50, "long");
bow.shoot(); // Longbow shoots.
bow.attack(); // Longbow deals 50 damage.
