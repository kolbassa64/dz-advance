fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response =>  response.json())
    .then((data)=> {
        return fetch(data.abilities[0].ability.url)
    })
    .then(response => response.json())
    .then(data => console.log(data.effect_entries[1].effect))
    .catch(error => {
        console.error(error);
    });




