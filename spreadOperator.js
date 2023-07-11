const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo]
console.log(numbersCombined)
console.log(numbersOne)
console.log(numbersTwo)

// sum twoDarray
for (let index = 0; index < numbersOne.length; index++) {
    console.log(numbersOne[index] + numbersTwo[index]);
}