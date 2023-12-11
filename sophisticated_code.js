/*
 * File: sophisticated_code.js
 * Description: This code demonstrates a complex algorithm for finding prime numbers using the Sieve of Eratosthenes.
 */

function generatePrimeNumbers(n) {
  // Step 1: Initialize an array with boolean values indicating if a number is prime or not
  var primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;
  
  // Step 2: Apply the Sieve of Eratosthenes algorithm
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (var j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  
  // Step 3: Collect the prime numbers
  var primeNumbers = [];
  for (var i = 2; i <= n; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }
  
  // Step 4: Return the generated prime numbers
  return primeNumbers;
}

// Example usage:
var upperLimit = 1000;
var primes = generatePrimeNumbers(upperLimit);
console.log("Prime numbers up to " + upperLimit + ":");
console.log(primes);