const myArray = ['apple', 'banana', 'orange', 'grapefruit'];
const myMap = myArray.map((a) => {
    return a.toUpperCase();
    }
);
console.log(myMap);
//
for(let i = 0; i < myMap.length; i++){
    console.log(myMap[i].toLocaleLowerCase());
};