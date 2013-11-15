// Function to parse user input phone number into three parts (area code, first token, second token)
// and then prints them back out
function parsePhone(input){
    // Declare variables and initialize output strings
    var errors = document.getElementById("errors");
    var areaCode = document.getElementById("areaCode");
    var telephone = document.getElementById("telephone");
    errors.innerHTML = "";
    areaCode.innerHTML = "";
    telephone.innerHTML = "";

    // Define phone number format regex
    var phoneRegex = /^\({1}[0-9]{3}\){1}\s{1}[0-9]{3}-{1}[0-9]{4}$/;

    try {
        // Validate user input
        if (!(input.match(phoneRegex))) throw "Please enter phone number in this format: (555) 555-1234";

        // Split off opening and closing brackets in area code
        var code = input.split(')')[0].split('(')[1];

        // Split off first three digits
        var firstToken = input.split(' ')[1].split('-')[0];

        // Split off last four digits
        var secondToken = input.split('-')[1];

        // Print out the three parts
        areaCode.innerHTML = "Area code: " + code;
        telephone.innerHTML = "Telephone: " + firstToken + "-" + secondToken;
    }
    // Print error messages if applicable
    catch (e){
        errors.innerHTML = e;
        document.getElementById('phoneNum').select();
    }
}