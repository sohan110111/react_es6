class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

const myCar = new Car("Ford");
console.log(myCar.brand);
console.log(myCar.present());