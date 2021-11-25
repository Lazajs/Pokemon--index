export default async function getPokemons(name) {
    // Need a hint? Try pokemon/ditto, pokemon/1, type/3, ability/4, or pokemon?limit=100&offset=200.

    const URL = name    ? `https://pokeapi.co/api/v2/pokemon/${name}`
                        : `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`


    const data = await fetch(URL)
    const response = await data.json()
    return response
}