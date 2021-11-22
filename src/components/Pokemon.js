import getPokemons from '../services/getPokemons'
import { useEffect, useState, useRef } from 'react'
import debounce from "just-debounce-it"


export default function Pokemon() {
    const [pokes, setPokes] = useState(null)
    const input = useRef()

    useEffect(()=>{
        getPokemons('pikachu','single').then(res=> setPokes(res))
    },[])
  
    const handleChange =  debounce(()=>{getPokemons(input.current.value,'single').then(res => setPokes(res))},500)
        
    return (
        <nav>
            <input ref={input} onChange={handleChange} type="text"></input>
        </nav>
    )
   
}

