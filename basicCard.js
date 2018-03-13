var clozeCard = require("./clozeCard.js");

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

var name = new ClozeCard("Mia is my dog", "Mia");
var age = new ClozeCard("Mia is this many years old: ", "4");
var favoriteFoods = new ClozeCard("Her favorite foods are chicken and salmon", "chicken and salmon");
var naps = new ClozeCard ("Yurts are where Mia likes to nap", "Yurts");
var chase = new ClozeCard ("Mia likes to chase lizards and seagulls", "lizards and seagulls");
var cats= new ClozeCard ("Mia doesn't like cats, except for Georgia and Felipe", "Georgia and Felipe");
var nose = new ClozeCard ("Mia's nose is the color pink", "pink");
cats.partial();

module.exports = BasicCard;