
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes","comment"]


function buildTable(data) {
    data.forEach(sighting => {
        
    })
}




button.on("click", () => {
    d3.event.preventDefault();

    var inputValue = inputDate.property("value");
    var filterDate = tableData.filter(d => d.datetime === inputValue);
    
    tbody.html("");




button.on("click", () => {
    d3.event.preventDefault();

    var inputValue = inputDate.property("value");
    var filterDate = tableData.filter(person => person.datetime === inputValue);
    
    tbody.html("");



});
    
