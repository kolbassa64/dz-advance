const pokemon = new XMLHttpRequest();
pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
pokemon.send();

pokemon.addEventListener('load', function() {
    const Spell = JSON.parse(this.responseText).abilities[0].ability.url;

    const pokemon = new XMLHttpRequest();
    pokemon.open('GET', Spell);
    pokemon.send();

    pokemon.addEventListener('load', function() {
        console.log(JSON.parse(this.responseText).effect_entries[1].effect)
    });

});
