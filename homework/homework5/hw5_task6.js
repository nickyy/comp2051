//Consider a two-by-three array t that will store integers [Thinking about multi-dimensional arrays] (Feel free to use any data that you would like)

// Declare array t of 2 elements
var t = new Array(2);



// Task 6a - Write a JavaScript statement that declares and creates array t
function doTask6a(row1, row2){

    try {
        output = document.getElementById("task6a_output");
        output.innerHTML = "";
        output.className = "output";

        // Parse user input into arrays
        t[0] = row1.split(",");
        t[1] = row2.split(",");

        // Validate input
        if (t[0].indexOf("") != -1) throw "Please do not enter blanks";
        if (t[1].indexOf("") != -1) throw "Please do not enter blanks";
        if (t[0].length != 3) throw "Please enter 3 comma-separated values for row 1";
        if (t[1].length != 3) throw "Please enter 3 comma-separated values for row 2";
        for (var i in t){
            for (var j in t[i]){
                if (isNaN(t[i][j])) throw "Please enter integers only";
            }
        }

        // Print table
        output.innerHTML = "<table><tbody><tr><td>" + t[0][0] + "</td><td>" + t[0][1] + "</td><td>" + t[0][2] + "</td></tr>" + "<tr><td>" + t[1][0] + "</td><td>" + t[1][1] + "</td><td>" + t[1][2] + "</td></tr></tbody></table>";
        //printArray(t);
    }
    catch (e){
        output.className = "error";
        output.innerHTML = e;
        if (e.contains("row 1")) document.getElementById("task6a_row1").select();
        if (e.contains("row 2")) document.getElementById("task6a_row2").select();
    }
}



// Task 6b - Write the names of all the elements in row 1 of t
function doTask6b(){
    output = document.getElementById("task6b_output");
    output.innerHTML = "";
    output.innerHTML += "Elements of row 1 of t: t[0][0]=" + t[0][0] + ", t[0][1]=" + t[0][1] + ", t[0][2]=" + t[0][2];
}



// Task 6c - Write the names of all elements in the third column of t
function doTask6c(){
    output = document.getElementById("task6c_output");
    output.innerHTML = "";
    output.innerHTML += "Elements of col 3 of t: t[0][2]=" + t[0][2] + ", t[1][2]=" + t[1][2];
}



// Task 6d - Write a nested for statement initializes each element of t to zero
function doTask6d(){
    output = document.getElementById("task6d_output");
    output.innerHTML = "";

    // Loop through all elements and set to zero
    var rows = t.length;
    var cols = t[0].length;
    for (var r in t){
        for (var c in t[r]){
            t[r][c] = 0;
        }
    }

    // Print table
    output.innerHTML = "<table><tbody><tr><td>" + t[0][0] + "</td><td>" + t[0][1] + "</td><td>" + t[0][2] + "</td></tr>" + "<tr><td>" + t[1][0] + "</td><td>" + t[1][1] + "</td><td>" + t[1][2] + "</td></tr></tbody></table>";
}



// Task 6e - Write a series of JavaScript statements that determines and prints the smallest value in array t
function doTask6e(){
    output = document.getElementById("task6e_output");
    output.innerHTML = "";

    // Flatten the multidimensional array into a 1-D array
    var flattened = [].concat.apply([], t);

    // Find the smallest value
    var smallest = Math.min.apply(Math, flattened);

    // Print the smallest value
    output.innerHTML = "Smallest value = " + smallest;
}



// Task 6f - Write a series of statements that prints the array t in neat, tabular format. List the column indices as headings across the top, and list the row indices at the left of each row
function doTask6f(){
    output = document.getElementById("task6f_output");
    output.innerHTML = "";

    document.write("<body style='font-family:arial'>");
    document.write("<table style='border:1px solid black;border-collapse:collapse;margin-bottom:50px;'><thead><tr style='border:1px solid black;'><th></th><th>0</th><th>1</th><th>2</th></tr></thead><tbody>");

    // WHY DOESN'T THIS WORK WITH innerHTML??? (ie. change 'document.write' to 'output.innerHTML')
    for (var r in t){
        document.write("<tr><td style='font-weight:bold;padding:0 7px;'>" + r + "</td>");
            for (var c in t[r]){
            document.write("<td style='border:1px solid black;padding:0 7px;'>" + t[r][c] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</tbody></table>");

    document.write("<a href='hw5_task6.html'>Go back</a>");

//    output.innerHTML =
//        "<table><thead><tr><th></th><th>0</th><th>1</th><th>2</th></tr></thead>" +
//        "<tr><td class='colHead'>" +
//        0 + "</td><td>" + t[0][0] + "</td><td>" + t[0][1] + "</td><td>" + t[0][2] + "</td></tr>" + "<tr><td class='colHead'>" +
//        1 + "</td><td>" + t[1][0] + "</td><td>" + t[1][1] + "</td><td>" + t[1][2] +
//        "</td></tr></table>";

}
//function printArray(array){
//    var rows = array.length;
//    var cols = array[0].length;
//
//    output = document.getElementById("task6a_output");
//    output.innerHTML = "";
//    output.innerHTML += "<table><tbody>";
//
//    for (var r=0; r<rows; r++){
//        output.innerHTML += "<tr>";
//        for (var c=0; c<cols; c++){
//            output.innerHTML += "<td>" + array[r][c] + "</td>"
//        }
//        output.innerHTML += "</tr>";
//    }
//    output.innerHTML += "</tbody></table>";
//}


