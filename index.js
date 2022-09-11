function fizzBuzz() {
  for (let i = 0; i < 100; i += 15) {
    console.log(`${i}: fizzBuzz`);
    console.log(`${i + 3}: fizz`);
    console.log(`${i + 5}: buzz`);
    console.log(`${i + 6}: fizz`);
    console.log(`${i + 9}: fizz`);
    console.log(`${i + 10}: buzz`);
    console.log(`${i + 12}: fizz`);
  }
}
console.time("xd");
fizzBuzz();
console.timeEnd("xd");
