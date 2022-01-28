import Infinity from "./Infinity";
import Main from "./Main";
import { useContext, useEffect, useState } from "react"
import pokemonList from "../context/pokemonList"
import getPokemonNames from "../services/getPokemonNames";


export default function HomePage() {
    const [names, setNames] = useContext(pokemonList)
    const [count, setCount] = useState(-10)

     useEffect(()=>{
        getPokemonNames(false, 0).then(res=> setNames(res.results)).catch(console.log)
    },[])

    // useEffect(()=>{
    //     if(!names) getPokemonNames(false, count).then(res=> setNames(res.results)).catch(console.log)
    // }, [names])

    useEffect(()=>{
        getPokemonNames(false, count).then(res=> {
            if (Array.isArray(names)) {
                setNames(names.concat(res.results))
            } else {
                setNames(res.results || res)
                // setCount(-10)
            }
                
        }).catch(console.log)
    },[count])

    return <>
        <Main names={names} />
        <Infinity counter={setCount} names={names} />
    </>
}