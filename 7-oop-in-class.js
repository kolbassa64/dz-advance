class Character {
    constructor(race, name, language){
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak () {
        console.log(`${this.name} говорит на языке: ${this.language}`);
    }
}

class Orc extends Character {
    constructor(name, language, weapon){
        super('orc', name, language);
        this.weapon = weapon;
    }

    speak () {
        console.log(`${this.name} ревёт на своём орочьем наречии: ${this.language}`);
    }

    attack  () {
        console.log(`${this.name} наносит удар с помощью ${this.weapon}.`);
    }
}

class Elf extends Character {
    constructor(name, language, spell){
        super('elf', name, language);
        this.spell = spell;
    }

    speak () {
        console.log(`${this.name} тихо шепчет, словно ветер в лесу: "Мой язык — ${this.language}, он полон гармонии и света."`);
    }

    castSpell = function () {
        console.log(`${this.name} применяет заклинание.`);
    }
}

