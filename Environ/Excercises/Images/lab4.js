// declaring an array with name myCommutes
let myCommutes = ["Muni Bus", "Caltrain", "Bay Area Rapid Transit", "County Connection",];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: ["Muni Bus", "Caltrain", "Bay Area Rapid Transit", "County Connection"],
    route: 10,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["Joe the BART guy", "Alex from Caltrain", "the guy with a red beard"],
};

let megaSentence;

megaSentence = "<p> My four top commutes from the array are: " + myCommutes[0] +" " + myCommutes[1] + " " +  myCommutes[2] + " " + myCommutes[3] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);
