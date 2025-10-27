let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function () {

    // Increase the count
    count = count + 1;

    // Build the message
    let sentence = "I was clicked " + count + " times";

    // Change the text
    $("#needy-button").html(sentence);

    // Change the color (cycle through colors array)
    let colorIndex = (count - 1) % colors.length;
    $("#needy-button").css("background-color", colors[colorIndex]);

});