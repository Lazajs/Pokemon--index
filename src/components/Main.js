import { useContext, useEffect } from "react"
import pokemonList from "../context/pokemonList"
import Pokemon from "./Pokemon"
import getPokemons from "../services/getPokemons"

export default function Main() {
    const [pokes, setPokes] = useContext(pokemonList)

    useEffect(()=>{
        getPokemons().then(res=> setPokes(res))
    },[])

    return (
        <main className="poke__container">
        {
            pokes.results   ? pokes.results.map(e => <Pokemon key={e.name} {...e}/>) 
                            : <Pokemon {...pokes} />        
        }
        </main>
    )
}