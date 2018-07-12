let sum = 0;
let logAllArguments = (...args) => args.forEach((arg => sum += arg));

console.log(`Suma argumentów wynosi ${sum}`);