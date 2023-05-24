

class Person {
    name: string;
    money: number;

    constructor(name: string, money: number) {
        this.name = name;
        this.money = money;
        console.log("Person created!")
    }
    getInfo() {
        console.log(`${this.name} / funds available $${this.money}`)
    }
}

const juan: Person = new Person("Juan", 100000);
const maria: Person = new Person("María", 120000);
const paula: Person = new Person("Paula", 30000);
// Situación de cada uno antes de comprar
juan.getInfo();
maria.getInfo();
paula.getInfo();

class House {
    type: string;
    price: number;

    constructor(type: string, price: number) {
        this.price = price;
        this.type = type;
        console.log("Houses available to purchase!")
    }
    getDetails() {
        console.log(`${this.type} costs $${this.price}`)
    }
}

const chalet1: House = new House("CHALET", 80000);
const piso1: House = new House("PISO", 60000);

chalet1.getDetails()
piso1.getDetails()


// // Transactions
const buyers: Person[] = [
    new Person("Juan", 100000),
    new Person("Maria", 120000),
    new Person("Paula", 30000)
  ];

buyers[0].getInfo();  // Output: Juan / funds available $100000
buyers[1].getInfo();  // Output: Maria / funds available $120000
buyers[2].getInfo();  // Output: Paula / funds available $30000

buyProperty(house: House) {
    if (this.money >= house.price) {
      this.money -= house.price;
      console.log(`${this.name} bought the ${house.type}!`);
    } else {
      console.log(`Insufficient funds for ${this.name} to buy the ${house.type}.`);
    }
  }
}

class House {
  type: string;
  price: number;

  constructor(type: string, price: number) {
    this.type = type;
    this.price = price;
    console.log("Houses available to purchase!");
  }

  getDetails() {
    console.log(`${this.type} costs $${this.price}`);
  }
}

const chalet1: House = new House("CHALET", 80000);
const piso1: House = new House("PISO", 60000);

const juan: Person = new Person("Juan", 100000);
const maria: Person = new Person("Maria", 120000);
const paula: Person = new Person("Paula", 30000);

chalet1.getDetails();
piso1.getDetails();

juan.buyProperty(chalet1); // Output: Juan bought the CHALET!
maria.buyProperty(chalet1); // Output: Maria bought the CHALET!
paula.buyProperty(piso1); // Output: Insufficient funds for Paula to buy the PISO.

// chalet1.comprar([juan, maria]); // Debería comprar el chalet
// piso1.comprar([paula]); // Debería fallar, no tiene dinero suficiente

// // Situación de cada uno después de comprar
// juan.getInfo();
// maria.getInfo();
// paula.getInfo();