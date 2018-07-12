let sum = 0;
let average = (...args) => {args.forEach(arg => sum += arg);

console.log(`Suma argumentów wynosi ${sum}`);
console.log(`Średnia podanych argumentów wynosi ${sum/args.length}`);
}

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];