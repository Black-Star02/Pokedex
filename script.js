let currentPokemonId = 1;

async function  fetchPokemon(id = currentPokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    displayPokemon(data);
}

function displayPokemon(pokemon){
    document.getElementById('pokemon-name').textContent = pokemon.name;
    document.getElementById('pokemon-image').src = pokemon.sprites.front_default;
    document.getElementById('pokemon-type').textContent = pokemon.types.map(type => type.type.name).join(', ');
    document.getElementById('pokemonid').textContent = pokemon.id;

    const type = pokemon.types[0].type.name;
    document.body.style.backgroundColor = getTypeColor(type);

}

function getTypeColor(type) {
    const colors = {
        normal: '#A8A77A',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    };
    return colors[type] || '#f0f0f0';
}

function prevPokemon() {
    if (currentPokemonId > 1){
        currentPokemonId--;
        fetchPokemon();
    }
}

function nextPokemon(){
    currentPokemonId++;
    fetchPokemon();
}

document.querySelector('button[onclick="fetchPokemon()"]').addEventListener('click', () => {
    const id = document.getElementById('pokemon-id').value;
    if (id) {
        currentPokemonId = id;
        fetchPokemon(id);
    }
});
fetchPokemon();