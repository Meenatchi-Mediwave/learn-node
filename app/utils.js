import chalk from "chalk";

function getNumbers() {
  let numbers = [0, 0];
  if (process.argv.length == 4) {
    var thirdArg = process.argv[2];
    var fourthArg = process.argv[3];
    if (thirdArg) {
      let num = Number(thirdArg);
      if (!isNaN(num)) {
        numbers[0] = num;
      }
    }
    if (fourthArg) {
      let num = Number(fourthArg);
      if (!isNaN(num)) {
        numbers[1] = num;
      }
    }
    if (thirdArg == " " && fourthArg == " ") {
      console.log(numbers);
    }
    // const str = " ";
    // if (thirdArg == str(thirdArg)) {
    //   return 0;
    // }
    // const first = str[2];
    // const second = str[3];
    // if (thirdArg == first) {
    //   numbers = process.argv[2];
    // }
    // if (fourthArg == second) {
    //   numbers = process.argv[3];
    // }
  }

  return numbers;
}

function getSum(numbers) {
  const total = numbers[0] + numbers[1];
  return total;
}

function printResult(result) {
  const prompt = chalk.yellow("The sum is ");
  const res = chalk.green(result);
  console.log(prompt + res);
}

export { getSum, getNumbers, printResult };
