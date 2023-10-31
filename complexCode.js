/* 
   File: complexCode.js
   Description: This complex JavaScript code performs various complex operations, including mathematical computations, string manipulations, and object manipulations.
*/

// Generate a random number within a given range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate the factorial of a given number recursively
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

// Generate a random string of a given length
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// Check if a given string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Perform complex object manipulations
const complexObjectManipulation = () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { c: 3, d: 4 };

    const mergedObject = { ...object1, ...object2 };

    const deletedPropertyObject = { ...mergedObject };
    delete deletedPropertyObject.a;

    return deletedPropertyObject;
};

// Complex code execution
const executeComplexCode = () => {
    const randomNumber = generateRandomNumber(1, 100);
    const factorialResult = calculateFactorial(randomNumber);
    const randomString = generateRandomString(10);
    const isPalindromeResult = isPalindrome(randomString);
    const complexObjectManipulationResult = complexObjectManipulation();

    console.log('Random Number:', randomNumber);
    console.log('Factorial Result:', factorialResult);
    console.log('Random String:', randomString);
    console.log('Is Palindrome:', isPalindromeResult);
    console.log('Complex Object Manipulation:', complexObjectManipulationResult);
};

executeComplexCode();