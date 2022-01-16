export default async function getPokemonNames(name,offset) {
    // Need a hint? Try pokemon/ditto, pokemon/1, type/3, ability/4, or pokemon?limit=100&offset=200.

    const URL = name ? `https://pokeapi.co/api/v2/pokemon/${name}`
                     : `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset || 0}`

                    
    const data = await fetch(URL)
    const response = await data.json()
    return response
}