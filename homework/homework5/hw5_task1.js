//Use a one-dimensional array to solve the following problem: A company pays its salespeople on a commission basis. The salespeople receive $200 per week plus 9 percent of their gross sales for that week. For example, a salesperson who grosses $5000 in sales in a week receives $200 plus 9 percent of $5000, or a total of $650. Write a script (using an array of counters) that obtains the gross sales for each employee through an HTML5 form and determines how many of the salespeople earned salaries in each of the following ranges (assume that each salesperson’s salary is truncated to an integer amount):
//a. $200-299
//b. $300-399
//c. $400-499
//d. $500-599
//e. $600-699
//f. $700-799
//g. $800-899
//h. $900-999
//i. $1000 and over

// Declare and initialise variables
var salaryCounter = new Array(9);

// Declare constants
const BASE = 200;
const COMMISSION_RATE = 0.09;

// Initialize salaryCounter
for (var i=0; i<salaryCounter.length; i++){
    salaryCounter[i] = 0;
}

// Function to update salary based on the gross sales of employee
function updateSalary(grossSales){

    // Validate user input
    if (isNaN(grossSales) || (grossSales < 0)) {
        document.getElementById("error").innerHTML = "Warning: invalid input";
        document.getElementById('grossSales').select();

    }
    else {
        // Clear output message
        document.getElementById("error").innerHTML = "";

        // Calculate salary based on base salary, gross sales, and commission rate
        var salary = BASE + Number(grossSales)*COMMISSION_RATE;

        // Convert salary to integer
        salary = parseInt(salary);

        // Determine salary range and update salary counters and table
        if ((salary >= 200) && (salary <= 299)){
            salaryCounter[0]++;
            document.getElementById("range200-299").innerHTML = salaryCounter[0];
        }
        else if ((salary >= 300) && (salary < 399)){
            salaryCounter[1]++;
            document.getElementById("range300-399").innerHTML = salaryCounter[1];
        }
        else if ((salary >= 400) && (salary < 499)){
            salaryCounter[2]++;
            document.getElementById("range400-499").innerHTML = salaryCounter[2];
        }
        else if ((salary >= 500) && (salary < 599)){
            salaryCounter[3]++;
            document.getElementById("range500-599").innerHTML = salaryCounter[3];
        }
        else if ((salary >= 600) && (salary < 699)){
            salaryCounter[4]++;
            document.getElementById("range600-699").innerHTML = salaryCounter[4];
        }
        else if ((salary >= 700) && (salary < 799)){
            salaryCounter[5]++;
            document.getElementById("range700-799").innerHTML = salaryCounter[5];
        }
        else if ((salary >= 800) && (salary < 899)){
            salaryCounter[6]++;
            document.getElementById("range800-899").innerHTML = salaryCounter[6];
        }
        else if ((salary >= 900) && (salary < 999)){
            salaryCounter[7]++;
            document.getElementById("range900-999").innerHTML = salaryCounter[7];
        }
        else {
            salaryCounter[8]++;
            document.getElementById("range1000-over").innerHTML = salaryCounter[8];
        }
    }
    document.getElementById('grossSales').select();
}

