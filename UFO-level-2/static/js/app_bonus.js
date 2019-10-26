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
    console.log("start button click");  // displays in console the input
    // Getting a reference to the input element on the page with the id property set to 'input-field'
    inputDatetime = d3.select("#datetime");
    // **** trying new lines for the other buttons ****
    inputCity = d3.select("#city");
    inputState = d3.select("#state");
    inputCountry = d3.select("#country");
    inputShape = d3.select("#shape");
    //console.log(inputDatetime.property("value"));
    // console.log(inputCity.property("value"));
    // console.log(inputState.property("value"));
    // console.log(inputCountry.property("value"));
    // console.log(inputShape.property("value"));
    console.log("end button click");  // displays in console the input


    // **** basic lines that work ****
    let filterData = tableData;
    //filterData = filterData.filter(row => row.datetime === inputDatetime.property("value"));

    // **************************************************************
    // **** trying new lines for the other search fields ****
    // **************************************************************

    if (inputDatetime.property("value") !== "") {
        // no .toLowerCase required here
        filterData = filterData.filter(row => row.datetime === inputDatetime.property("value"));
        console.log("inputDatetime complete");
        console.log(inputDatetime.property("value"));
    };
    
    
    // can use if (inputCity !== ""), since the variable is already established above, hence, it can't be ""
    // inputCity.property("value") checks if the inputted value is ""
    if (inputCity.property("value") !== "") {
        var text = inputCity.property("value").toLowerCase()
        filterData = filterData.filter(row => row.city === text);
        console.log("inputCity complete");
        console.log(text);
    };


    if (inputState.property("value") !== "") {
        var text = inputState.property("value").toLowerCase();
        filterData = filterData.filter(row => row.state === text);
        console.log("inputState complete");
        console.log(text);
    };

    if (inputCountry.property("value") !== "") {
        var text = inputCountry.property("value").toLowerCase()
        filterData = filterData.filter(row => row.country === text);
        console.log("inputCountry complete");
        console.log(text);
    };

    if (inputShape.property("value") !== "") {
        var text = inputShape.property("value").toLowerCase()
        filterData = filterData.filter(row => row.shape === text);
        console.log("inputShape complete");
        console.log(text);
    };


    // **** basic lines that work ****
    console.log("All active If statements complete");
    //console.log(inputDatetime.property("value")); // displays in console the input
    //console.log(inputState.property("value"));
    console.log(filterData); // This works


    tableBuilder(filterData);

};

button.on("click", buttonClick);