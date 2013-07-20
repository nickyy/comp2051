/*
 *
 * Common functions for all APIs
 *
 */

// Clear the id="results" element
function clearList(){
    document.getElementById("results").innerHTML = null;
}

// Populate the id="results" element
function appendResults(html){
    document.getElementById("results").innerHTML += html;
}

// Execute the search functions based on which checkboxes are checked
function search(){
    // Make sure checkboxes are checked
    var checkbox = document.getElementsByTagName("input");
    var isChecked = false;
    for (var i=0; i<checkbox.length; i++){
        if (checkbox[i].type == "checkbox"){
            if (checkbox[i].checked){
                isChecked = true;
            }
        }
    }

    // If no checkboxes checked, then alert user
    if (!(isChecked)){
        alert("Please select at least one network to search.");
    }
    // At least one network is selected
    else {
        // Clear the results
        clearList();

        // Search LinkedIn
        if (document.getElementById("linkedInCb").checked)
            searchLinkedIn();

        // Search Google
        if (document.getElementById("googleCb").checked){
            searchGoogle();
        }

        // Search Facebook
        if (document.getElementById("facebookCb").checked){
            searchFacebook();
        }
        // TODO: add other networks here
    }
    return false;
}