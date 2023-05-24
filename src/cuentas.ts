class Account {
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
        console.log("Account created!")
    }

    showAccount() {
        console.log(`
            Account belongs to: ${this.name},
            Account balance is: ${this.balance}
        `)
    }

    addFunds(amount: number) {
        if (amount < 0) {
          console.log("Cannot add a negative amount.");
        } else {
          this.balance += amount;
          console.log(`Added ${amount} to Account ${this.name}`);
        }
      }
      
      

    withdrawFunds(amount: number){
        if (this.balance <= amount) {
            console.log("insufficient funds in Account.")
        }else{
           this.balance -= amount;
        console.log(`Removed ${amount} from Account ${this.name}`); 
        }; 
    } 
}

const  Account1 = new Account("Pedro", 2000);
const  Account2 = new Account("Juan", 0);

// Las cuentas se inician con los valores del constructor
console.log("-------------------")
console.log("Account Details")
Account1.showAccount();
console.log("-------------------")
console.log("Account Details")
Account2.showAccount();
console.log("-------------------")

// Ingresamos 300€ a la cuenta 1
console.log("-------------------")
Account1.addFunds(300);
console.log("Account Details")
Account1.showAccount();
console.log("-------------------")
// Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
console.log("-------------------")
Account2.addFunds(-200)
console.log("Account Details")
Account2.showAccount();
console.log("-------------------")

// Retiramos 500€ de la cuenta 1 y la vemos tras la operación
console.log("-------------------")
Account1.withdrawFunds(500)
console.log("Account Details")
Account1.showAccount();
console.log("-------------------")

// Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
console.log("-------------------")
Account1.withdrawFunds(4000);
Account1.showAccount();
console.log("-------------------")