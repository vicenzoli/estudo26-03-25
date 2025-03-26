
class Pizza {
    cost() {
        return 10; 
    }

    description() {
        return "Pizza básica";
    }
}


class PizzaDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }

    cost() {
        return this.pizza.cost();
    }

    description() {
        return this.pizza.description();
    }
}


class ExtraCheese extends PizzaDecorator {
    cost() {
        return super.cost() + 2; 
    }

    description() {
        return super.description() + ", com queijo extra";
    }
}


class Pepperoni extends PizzaDecorator {
    cost() {
        return super.cost() + 3; 
    }

    description() {
        return super.description() + ", com pepperoni";
    }
}


let pizza = new Pizza(); 
console.log(`${pizza.description()}: R$${pizza.cost()}`);

pizza = new ExtraCheese(pizza); 
console.log(`${pizza.description()}: R$${pizza.cost()}`);

pizza = new Pepperoni(pizza); 
console.log(`${pizza.description()}: R$${pizza.cost()}`);
