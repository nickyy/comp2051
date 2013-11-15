//Write JavaScript statements (or create a .js file) that perform the following operations for a one-dimensional array. Please feel free to create any data that you need (sample arrays), to complete the problems:

// Task 2a - Set the 10 elements of array counts to zeros
function doTask2a(input){
    try {
        var output = document.getElementById("task2a_output");
        output.innerHTML = "";
        output.className = "output";

        // Take user input and parse into array
        var counts = input.split(",");

        if (counts.indexOf("") != -1) throw "Please do not enter blanks";
        for (var i in counts){
            counts[i] = 0;
        }

        output.innerHTML += "New Array = [ ";
        for (var j in counts){
            output.innerHTML += counts[j] + " ";
        }
        output.innerHTML += "]";
    }
    catch (e){
        output.className = "error";
        output.innerHTML = e;
        document.getElementById("task2a").select();
    }
}

// Task 2b - Add 1 to each of the 15 elements of array bonus
function doTask2b(input){
    try {
        var output = document.getElementById("task2b_output");
        output.innerHTML = "";
        output.className = "output";

        // Take user input and parse into array
        var bonus = input.split(",");

        for (var i in bonus){
            if (isNaN(bonus[i])) throw "Please enter numbers only";
            bonus[i] = Number(bonus[i]);
            bonus[i] += 1;
        }

        output.innerHTML += "New Array = [ ";
        for (var j in bonus){
            output.innerHTML += bonus[j] + " ";
        }
        output.innerHTML += "]";
    }
    catch (e){
        output.className = "error";
        output.innerHTML = e;
        document.getElementById("task2b").select();
    }
}

// Task 2c - Display the five values of array bestScores, separated by spaces
function doTask2c(input){
    var output = document.getElementById("task2c_output");
    output.innerHTML = "";

    // Take user input and parse into array
    var bestScores = input.split(",");

    output.innerHTML += "BestScores = [ ";
    for (var j in bestScores){
        output.innerHTML += bestScores[j] + " ";
    }
    output.innerHTML += "]";
}

// Task 2d - Display the value of the seventh element of array f
function doTask2d(input){
    try {
        var output = document.getElementById("task2d_output");
        output.innerHTML = "";
        output.className = "output";

        // Take user input and parse into array
        var f = input.split(",");

        // Validate user input
        if (f.length < 7) throw "Please enter at least 7 values";
        output.innerHTML = "7th Value = " + f[6];
    }
    catch (err){
        output.className = "error";
        output.innerHTML = err;
        document.getElementById("task2d").select();
    }
}

// Task 2e - Total the elements of array c, which contains 100 numeric elements
function doTask2e(){
    var output = document.getElementById("task2e_output");
    output.innerHTML = "";
    var sum = 0;
    var c = new Array(100);

    // Populate array c with numbers from 0 to 99
    for (var i=0; i<c.length; i++){
        c[i] = i;

        // Calculate running sum of each element
        sum += c[i];
    }

    document.getElementById("task2e").value = c;
    output.innerHTML = "Sum of array c = " + sum;
}

// Task 2f - Copy 11-element array a into the first portion of array b, which contains 34 elements
function doTask2f(inputA, inputB){
    try {
        var output = document.getElementById("task2f_output");
        output.innerHTML = "";
        output.className = "output";

        // Take user input and parse into array
        var arrayA = inputA.split(",");
        var arrayB = inputB.split(",");

        // Validate user input
        if (arrayA.length < 11) throw "Please enter at least 11 values for Array A";
        if (arrayB.length < 12) throw "Please enter at least 12 values for Array B";

        // Copy array A elements into array B
        for (var i=0; i<arrayA.length; i++){
            arrayB[i] = arrayA[i];
        }

        // Print results
        output.innerHTML += "New Array B = [ ";
        for (var j in arrayB){
            output.innerHTML += arrayB[j] + " ";
        }
        output.innerHTML += "]";
    }
    catch (err){
        output.className = "error";
        output.innerHTML = err;
        if (err.contains("Array A")) document.getElementById("task2f_arrayA").select();
        if (err.contains("Array B")) document.getElementById("task2f_arrayB").select();
    }
}


// Task 2g - Determine and print the smallest and largest values contained in 99-element floating point array w
function doTask2g(){
    var output = document.getElementById("task2g_output");
    output.innerHTML = "";

    var myArray = new Array();

    // Populate myArray with 100 random floating numbers
    for (var i=0; i<100; i++){
        myArray[i] = (Math.random()*10).toFixed(2);
    }
    document.getElementById("task2g").value = myArray;

    // Determine the largest and smallest of the numbers
    var largest = Math.max.apply(Math, myArray);
    var smallest = Math.min.apply(Math, myArray);

    // Print results
    output.innerHTML = "Smallest = " + smallest + ", Largest = " + largest;
}