// zadacha 1

var person = {
  _salary: 1000,
  getSecretSalaryInfo: function (){
    return this._salary;
  }
};

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo()); //принтира 1000
console.log(stoleSalaryInfo); //принтира undefined

//zadacha 2
class Person {
  constructor(name) {
    this.name = name;
    this.planet = "Zemq";
  }
  greet = () => {
    console.log(`ZDR ${this.name} ot planetata ${this.planet}`);
  };
};

const ivan = new Person('ivan');
ivan.greet();
const gosho = new Person('gosho');
gosho.greet();
const pesho = new Person('pesho');
pesho.greet();

// zadacha 3

class Item {
  constructor(name, discount) {
    this.name = name;
    this.discount = discount / 100;
  }

  getDiscountedPrice = () => {
    return this.price -  this.price * this.discount;
  }
}

Item.prototype.price = 1000;

const item1 = new Item('duvki', 10)
console.log(item1.getDiscountedPrice())



// // zadacha 5
// PaymentMethod – клас, който трябва да има само един метод, който return-ва string: "Your amount in the account is: "
// 	2.	CashMethod – наследява PaymentMethod и има:
// 		a.	Наистина private property amount, което не може да бъде достъпвано директно от инстанцията.
// 		b.	Public method addToAmount, който добавя стойност към private property-то
// 		c.	Public method reduceFromAmount, който изважда стойност от private property-то
// 		d.	Public method getAmount, който извиква родителския getAmount и в края добавя стойността от private property-то към текущия стринг
// 	3.	CreditMethod – наследява PaymentMethod и има:
// 		a.	Наистина private property amount, което не може да бъде достъпвано директно от инстанцията.
// 		b.	Public method addToAmount, който добавя 90% от подадената стойност към private property-то
// 		c.	Public method reduceFromAmount, който изважда стойност от private property-то
// 		d.	Public method getAmount, който извиква родителския getAmount и в края добавя стойността от private property-то към текущия стринг
class PaymentMethod {
  yourAmount = () => {
    return `Your amount in the account is: `
  };
};

class CashMethod extends PaymentMethod {
  #amount;
  constructor() {
    super();
    this.#amount = 0; 
  };

  addToAmount(amount) {
    this.#amount += amount;
  }
  
  reduceFromAmount(amount) {
    this.#amount -= amount;
  }
  getAmount() {
    return this.yourAmount() + this.#amount;
  }
};

const c = new CashMethod();

c.addToAmount(10);
c.addToAmount(350);
c.reduceFromAmount(120);
// console.log(c.#amount)
console.log(c.getAmount());

class CreditMethod extends PaymentMethod {
  #amount;
  constructor() {
    super();
    this.#amount = 0;
  }
  addToAmount(amount) {
    this.#amount += amount;
  }
  
  reduceFromAmount(amount) {
    this.#amount -= amount;
  }
  getAmount() {
    return this.yourAmount() + this.#amount;
  }
};

const credit = new CreditMethod();

credit.addToAmount(10);
credit.addToAmount(350);
credit.reduceFromAmount(120);
// console.log(c.#amount)
console.log(credit.getAmount());