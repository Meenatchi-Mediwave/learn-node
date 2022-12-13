import { getNumbers, getSum, printResult } from "./utils.js";

function main() {
  const numbers = getNumbers();
  const sum = getSum(numbers);
  printResult(sum);
}

main();
