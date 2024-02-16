function solve(inputNumber) {
    'use strict';

    let oddSum = 0;
    let evenSum = 0;

    // Take the absolute value to handle negative numbers
    inputNumber = Math.abs(inputNumber);

    while (inputNumber > 0) {
        const currentNumber = inputNumber % 10;
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }

        // Update inputNumber by removing the last digit
        inputNumber = Math.floor(inputNumber / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);