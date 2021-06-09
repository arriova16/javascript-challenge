
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "comment"]






button.on("click", () => {
    d3.event.preventDefault();

    var inputValue = inputDate.property("value");
    var filterDate = tableData.filter(person => person.datetime === inputValue);
    
    tbody.html("");

    if()


});
    
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   }