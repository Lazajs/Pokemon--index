import Infinity from "./Infinity";
import Main from "./Main";
import { useContext, useEffect } from "react"
import pokemonList from "../context/pokemonList"
import getPokemonNames from "../services/getPokemonNames";


export default function HomePage() {
    const [names, setNames, count, setCount] = useContext(pokemonList)
    
    useEffect(()=>{
        getPokemonNames(false, 0).then(res=> setNames(res.results)).catch(console.log)
    },[])

    useEffect(()=>{
        if (names) {
            getPokemonNames(false, count).then(res=> {
                if (Array.isArray(names)) {
                    let last = names[names.length - 1]
                    last = parseInt(last.url.substring(last.url.indexOf('n/')+2, last.url.lastIndexOf('/')))
                    let first = res.results[0]
                    first = parseInt(first.url.substring(first.url.indexOf('n/')+2, first.url.lastIndexOf('/')))
                    console.log(first, last)
                    if (first === last+1) setNames(names.concat(res.results))
                    else setCount(last)
                } else {
                    setNames(res.results)
                }
            }).catch(console.log)
        }
    },[count])
 
    return <>
        <Main names={names} />
        {
            Array.isArray(names) ? <Infinity counter={setCount} names={names} /> : ''
        }
    </>
}