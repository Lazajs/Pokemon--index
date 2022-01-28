export default async function getPokemonFlavor(url) {

    let obj = await fetch(url)
    let res = await obj.json()
    return res.flavor_text_entries
}