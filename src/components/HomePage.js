import Infinity from "./Infinity";
import Main from "./Main";
import { useContext, useEffect, useState } from "react"
import pokemonList from "../context/pokemonList"
import getPokemonNames from "../services/getPokemonNames";


export default function HomePage() {
    const [names, setNames, count, setCount] = useContext(pokemonList)
    
    useEffect(()=>{
        getPokemonNames(false, count).then(res=> {
            if (Array.isArray(names)) {
                setNames(names.concat(res.results))
            } else {
                setNames(res.results || res)
            }
                
        }).catch(console.log)
    },[count])

    useEffect(()=>{
        getPokemonNames(false, 0).then(res=> setNames(res.results)).catch(console.log)
    },[])
 
    return <>
        <Main names={names} />
        {
            Array.isArray(names) ? <Infinity counter={setCount} names={names} /> : ''
        }
    </>
}