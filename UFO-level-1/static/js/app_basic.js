// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

function tableBuilder(newTableData) {
    tbody.html("");
    newTableData.forEach((alienSightings) => {
        var row = tbody.append("tr");
        Object.values(alienSightings).forEach((values) => {
            var cell = row.append("td")
            cell.text(values);
        });

    })
};

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

//button.addEventListener("click",buttonClick)

// This function is triggered when the button is clicked
function buttonClick() {
    console.log("test");
    // Getting a reference to the input element on the page with the id property set to 'input-field'
    inputField = d3.select("#datetime");
    //button.on("click", buttonClick);
    let filterData = tableData;
    filterData = filterData.filter(row => row.datetime === inputField.property("value"));
    console.log(inputField.property("value")); // displays in console the input

    //console.log(filterData); // This works

    tableBuilder(filterData);

};


button.on("click", buttonClick);
    //var newText = d3.event.target.value;
    //console.log(newText); //shows in console when new date text is entered - no button press needed
//});
