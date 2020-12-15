const secondDiv = document.querySelector('.second-hand');
const minDiv = document.querySelector('.min-hand');
const hourDiv = document.querySelector('.hour-hand');


function setDate() {

    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360 + 90);
    secondDiv.style.transform = `rotate(${secDeg}deg)`;


    const mins = now.getMinutes();
    const minDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minDiv.style.transform = `rotate(${minDeg}deg)`;


    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourDiv.style.transform = `rotate(${hourDeg}deg)`;


}

setInterval(setDate, 1000);






var dateGlobale = new Date();

var annee = dateGlobale.getFullYear();
var mois = dateGlobale.getMonth();
var jour = dateGlobale.getDate();
var jour_semaine = dateGlobale.getDay();





var MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
var JOUR_SEMAINE = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

mois = MOIS[mois];
jour_semaine = JOUR_SEMAINE[jour_semaine];

document.getElementById("heure").innerHTML = jour_semaine + " " + jour + " " + mois + " " + annee;