class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

class price extends Model {
    constructor(name, mod, price) {
        super(name, mod);
        this.price = price;
    }

    show() {
        return this.present() + ', it is a ' + this.model + ' and it costs ' + this.price;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
const carPrice = new price("Ford", "Mustang", "10000");
console.log(carPrice.show());