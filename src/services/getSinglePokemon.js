export default async function getSinglePokemon(url) {
    let res = await fetch(url)
    let json = await res.json()
    return json
}