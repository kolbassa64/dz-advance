function Character(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}


Character.prototype.speak = function () {
    console.log(`${this.name} говорит на языке: ${this.language}`);
};


function Orc(race, name, language, weapon) {

    Character.call(this, race, name, language);
    this.weapon = weapon;
}


Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;


Orc.prototype.attack = function () {
    console.log(`${this.name} наносит удар с помощью ${this.weapon}.`);
};


Orc.prototype.castSpell = function () {
    console.log(`${this.name} применяет заклинание.`);
};


Orc.prototype.createSpell = function () {
    console.log(`${this.name} создает новое заклинание.`);
};

