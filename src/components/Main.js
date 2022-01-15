import { useContext, useEffect } from "react"
import pokemonList from "../context/pokemonList"
import Pokemon from "./Pokemon"
import getPokemonNames from "../services/getPokemonNames"
import Infinity from "./Infinity"

export default function Main() {
    const [names, setNames] = useContext(pokemonList)

    useEffect(()=>{
        getPokemonNames().then(res=> setNames(res))
    },[])

    return (
        <main className="poke__container">
        {
            names.results   ? names.results.map(e => <Pokemon key={e.name} name={e.name} url={e.url}/>) //information to fetch later 
                            : <Pokemon poke={names}/> //pokemon info already fetched
        }
        {/* <Infinity /> */}
        </main> 
    )
}