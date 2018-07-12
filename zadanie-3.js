let sum = 0;
let average = (...args) => {
    args.forEach(arg => sum += arg);
    console.log(`Suma argumentów wynosi ${sum}`);
    console.log(`Średnia podanych argumentów wynosi ${sum / args.length}`);
}