import Infinity from "./Infinity";
import Main from "./Main";
import { useContext, useEffect, useState } from "react"
import pokemonList from "../context/pokemonList"
import getPokemonNames from "../services/getPokemonNames";


export default function HomePage() {
    const [names, setNames] = useContext(pokemonList)
    const [count, setCount] = useState(-10)

     useEffect(()=>{
        getPokemonNames(false, count).then(res=> setNames(res.results))
    },[])

    useEffect(()=>{
        console.log(names.results)
        getPokemonNames(false, count).then(res=> setNames(names.concat(res.results)))
    },[count])

    return <>
        <Main names={names} />
        <Infinity counter={setCount} names={names} />
    </>
}