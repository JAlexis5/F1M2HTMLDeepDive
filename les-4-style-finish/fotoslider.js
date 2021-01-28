let fotonummer, fotobreedte, aantalfotos, fotoslider;

document.addEventListener('DOMContentLoaded', setupFotoslider);

function setupFotoslider() {
    fotonummer = 0;
    fotobreedte = 600;

    fotoslider = document.getElementById('fotoslider');
    let vorigeKnop = document.getElementById('prev');
    let volgendeKnop = document.getElementById('nxt');

    aantalfotos = fotoslider.children.length;

    volgendeKnop.addEventListener("click", volgendeFoto);
    vorigeKnop.addEventListener("click", vorigeFoto);

};

function volgendeFoto() {
    // De variabele fotonummer met 1 ophogen (bij de eerste foto is fotonummer 0)
    // Bij de tweede foto wordt deze dus 1, bij de derde foto 2 enzovoorts.
    fotonummer += 1;

    // Als fotonummer gelijk is aan het aantal foto's willen we weer terug naar de eerste foto
    if (fotonummer === aantalfotos) {
        fotonummer = 0;
    }

    // Dit is de berekening die ik hierboven heb uitgelegd
    // Bereken aan de hand van het fotonummer hoe veel de slider naar links moet in de viewport
    let afstandNaarLinks = -1 * (fotonummer * fotobreedte);

    // Zet het style attribuut van de fotoslider (vergeet de px niet)
    fotoslider.style.left = afstandNaarLinks + "px";
};

function vorigeFoto() {
    // De variabele fotonummer met 1 ophogen (bij de eerste foto is fotonummer 0)
    // Bij de tweede foto wordt deze dus 1, bij de derde foto 2 enzovoorts.
    fotonummer -= 1;

    // Als fotonummer gelijk is aan het aantal foto's willen we weer terug naar de eerste foto
    if (fotonummer < 0) {
        fotonummer = aantalfotos - 1;
    }

    // Dit is de berekening die ik hierboven heb uitgelegd
    // Bereken aan de hand van het fotonummer hoe veel de slider naar links moet in de viewport
    let afstandNaarRechts = (fotonummer * fotobreedte);

    // Zet het style attribuut van de fotoslider (vergeet de px niet)
    fotoslider.style.left = "-" + (afstandNaarRechts) + "px";
};