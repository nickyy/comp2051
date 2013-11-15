//A prime integer is an integer greater than 1 that’s evenly divisible only by itself and 1. The Sieve of Eratosthenes is an algorithm for finding prime numbers. It operates as follows:
// a. Create an array with all elements initialized to 1 (true). Array elements with prime indices will remain at 1. All other array elements will eventually be set to zero.
// b. Set the first two elements to zero, since 0 and 1 are not prime. Starting with array index 2, every time an array element is found whose value is 1, loop through the remainder of the array and set to zero every element whose index is a multiple of the index for element with value 1. For array index 2, all elements beyond 2 in the array that are multiples of 2 will be set to zero (indices 4, 6, 8, 10, etc.); for array index 3, all elements beyond 3 in array that are multiples of 3 will be set to zero (indices 6, 9, 12, 15, etc.), and so on …
// When this process is complete, the array elements that are still set to 1 indicate that the index is a prime number. These indices can then be printed. Write a script that uses an array of 1000 elements to determine and print the prime numbers between 1 and 999. Ignore element 0 of the array.

window.onload = function(){
    // Declare constants and variables
    var size = prompt("Enter an upper limit for prime number search", 1000);

    // Define integer regex
    var intRegex = /^\d+$/;

    // Validate user input
    while ((isNaN(size) || (size<=1) || !size.match(intRegex))){
        size = prompt("Please enter a positive integer greater than 1");
    }

    // Create new array
    var myArray = new Array();
    myArray.length = size-1;
    var primes = [];

    // 0 and 1 are not prime, so set those to FALSE
    myArray[0] = false;
    myArray[1] = false;

    // Initialize all elements to 1 (true)
    for (var i=2; i<myArray.length; i++){
        myArray[i] = true;
    }

    // For every index whose element/value is TRUE, loop through rest of array (ie. excluding current index) and set all multiples of that index to FALSE:
    // index=2, loop through indices 4, 6, 8, 10, ... and set to FALSE
    // index=3, loop through indices 3, 6, 9, 12, ... and set to FALSE
    // index=4 would already be false, so skip to next index
    // index=5, loop through indices 10, 15, 20, 25, ... and set to FALSE
    // index=6 would already be false, so skip to next index
    // index=7, loop through indices 14, 21, 28, ... and set to FALSE
    // indices 8, 9, and 10 would already be false
    // etc.
    // All remaining TRUE are prime numbers
    for (var i=2; i<myArray.length; i++){
        if (myArray[i]){
            // Assign prime numbers to array
            primes.push(i);
            for (var j=2*i; j<myArray.length; j+=i){
                myArray[j] = false;
            }
        }
    }

    // Print out the prime numbers between 1 and (SIZE-1)
    output = document.getElementById("output");
    output.innerHTML = "<span style='font-weight:bold;'>Prime numbers from 1 to " + size + " (excluding 0, 1, and " + size + "):</span><br>";
    for (var p=0; p<primes.length; p++){
        if (p != (primes.length-1)){
            output.innerHTML += "<p class='prime'>" + primes[p] + ",</p> ";
        }
        else {
            output.innerHTML += primes[p];
        }
    }
};