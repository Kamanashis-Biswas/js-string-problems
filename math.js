const result = Math.pow(3, 8);
console.log(result);


const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
if (gap < 5) {
    console.log("allow");
} else {
    console.log("Not Allow");
}

const number = 2.65;
const fullNumber = Math.round(number);
console.log(fullNumber);

const result2 = Math.ceil(2.001);
const result3 = Math.floor(456.259);
console.log(result2);
console.log(result3);

for (let i = 1; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}

