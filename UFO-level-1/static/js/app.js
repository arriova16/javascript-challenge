
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes","comment"]
tbody.html("");
function addData(dataInput) {
    

    dataInput.forEach(sighting => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(sighting[column])
        );
    });
};

addData(tableData);

button.on("click", () => {
    d3.event.preventDefault();

    var inputValue = inputDate.property("value");
    var filterDate = tableData.filter(d => d.datetime === inputValue);
    
    
    var userInput = {
        filterDate
    }
    
    if (userInput.filterDate.length !== 0) {
        buildTable(filterDate);
    }

        else {
            tbody.append("tr").append("td").text("Sorry there aren't any results for this date.");
        }

});
    
