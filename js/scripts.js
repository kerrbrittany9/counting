var countToNumber = parseInt($("input#prompt").val());
var countByNumber = parseInt($("input#countBy").val());
var countedArray = [];

    for (var index = countByNumber; index < countToNumber; index += countByNumber) {
        countedArray.push(index + ",");
    }
$(document).ready(function() {
  $("submitButton").click(function(event) {
    event.preventDefault();
    $("#result").append(countedArray);
    $("#result").show();
  });
});
