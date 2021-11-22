export default function getPokemons(name, mode) {
    // Need a hint? Try pokemon/ditto, pokemon/1, type/3, ability/4, or pokemon?limit=100&offset=200.

    const URL = mode === 'single'   ? `https://pokeapi.co/api/v2/pokemon/${name}`
                                    : ""

    const response = fetch(URL).then(res => res.json())
    return response
}