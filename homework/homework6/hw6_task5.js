// Function to pad the entered cheque amount to protect it from tampering
function processCheque(amount){
    try {
        // Declare and initialize variables
        var error = document.getElementById("error");
        var success = document.getElementById("success");
        error.innerHTML = "";
        success.innerHTML = "";
        var padding = "";

        // Define amount regex
        var amountRegex = /^\d{1,6}(\.\d\d){1}$/;

        // Validate amount entered
        if (!amount.match(amountRegex)) throw "Please enter a valid amount (maximum = $999999.99)";

        // Split the amount entered at the decimal point to two tokens: dollars and cents
        var dollars = amount.split(".")[0];
        var cents = amount.split(".")[1];

        // Pad any extra spaces in front of dollar amount with *'s
        if (dollars.length < 6){
            for (var i=0; i<(6-dollars.length); i++){
                padding += "*";
            }
        }
        // Add the padding to the dollar string
        dollars = padding + dollars;

        // Print out padded amount
        success.innerHTML = "Amount entered: <span style='font-weight:bold;'>$" + dollars + "." + cents + "</span>";

        // Alert user to successful processing
        alert("Cheque processed!");
    }
    catch (e){
        error.innerHTML = e;
        document.getElementById("amount").select();
    }
}