//Write a script to simulate the rolling of two dice. The script should use Math.random to roll the first die and again to roll the second die. The sum of the two values should then be calculated [Note: Since each die can show an integer value from 1 to 6, the sum of the values will vary from 2 to 12, with 7 being the most frequent sum, and 2 and 12 the least frequent sums. Your program should roll the dice 36,000 times. Use a one-dimensional array to tally the number of times each possible sum appears. Display the results in an HTML5 table. Also, determine whether the totals are reasonable [e.g. there are size ways to roll a 7, so approximately 1/6 all rolls should be 7].

window.onload = function(){
    // Declare constant number of rolls
    const ROLLS = 36000;

    // Define the granularity of the distributions (so one star '*' represents {granularity} counts). The smaller the more accurate the distribution graph.
    var granularity = prompt("Enter distribution graph granularity\n(The smaller the granularity, the greater the graph precision)", 100);

    // Validate user input
    while ((isNaN(granularity) || (granularity < 0))){
        granularity = prompt("Please enter a positive integer");
    }
    granularity = Number(granularity);

    // Declare and initialize counter array using key:value pairs: diceSum["2", "3", "4", ... "12"]. (diceSum is an associative array)
    var diceSum = {
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0
    };

    // Declare and initialise distribution array
    var diceSumDist = {
        2:"",
        3:"",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
        10:"",
        11:"",
        12:""
    };

    // Do for each roll
    for (var i=1; i<=ROLLS; i++){
        // Determine die1 and die2 values
        var die1Roll = Math.floor((Math.random()*6)+1);
        var die2Roll = Math.floor((Math.random()*6)+1);

        // Sum the rolls
        var sum = Number(die1Roll) + Number(die2Roll);

        // Increment the counter
        diceSum[sum]++;

        // Update the count table
        document.getElementById("sum" + sum).innerHTML = diceSum[sum];
    }

    // Determine the proportion of sums and the approximate distribution and graph it out
    for (var j=2; j<13; j++){
        document.getElementById("prop" + j).innerHTML = ((diceSum[j]/ROLLS)*100).toFixed(1);

        // Round the counts to the nearest GRANULARITY, and add a * for each multiple of 'granularity'
        for (var k=0; k<Math.round(diceSum[j]/granularity)*granularity; k=k+granularity){
            diceSumDist[j] += "*";
        }

        // Print out the distribution graph
        document.getElementById("dist_sum" + j).innerHTML = diceSumDist[j];
    }
    // Update Distribution header
    document.getElementById("granularity").innerHTML = granularity;
};