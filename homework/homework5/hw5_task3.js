//Use a one-dimensional array to solve the following problem: Read in 10 numbers, each of which is between 10 and 100. As each number is read, print it only if it is not a duplicate of a number that has already been read. Provide for the “worst case”, in which all 10 numbers are different. Use the smallest possible array to solve this problem.

window.onload = function(){
	// Declare constants and variables
	const SIZE = 10;
	var myArray = new Array();
	var input;
	var output = document.getElementById("output");
	output.innerHTML = "";
	output.innerHTML += "Unique values entered: ";

	for (var i=0; i<SIZE; i++){
		// Prompt for user input
		input = prompt("Enter a number between 10 and 100");

		// Convert input to a number type
		input = Number(input);

		// Validate user input
		while ((isNaN(input) || (input < 10) || (input > 100))){
			input = prompt("Invalid input. Try again");
		}

		// Determine if user input duplicated. If not, then add input to array.
		if ((myArray.join(',')).indexOf(input) == -1){
			myArray.push(input);
			output.innerHTML += input + " ";
		}
	}
};