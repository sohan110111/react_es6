function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(10, 5);
console.log(add, subtract, multiply, divide); // 15 5 50 2