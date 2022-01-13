import pokeball from '../images/pokeball.svg'
import './Search.scss'
import getPokemonNames from '../services/getPokemonNames'
import { useRef } from 'react'
import debounce from "just-debounce-it"


export default function Search({setNames}) {
    const input = useRef()

    const handleChange = ()=>{
        console.log(input.current.value)
        getPokemonNames(input.current.value).then(res => {
            setNames(res)
        })
    }

    const handleChangeDebounced = debounce(()=> handleChange() ,500)
    
    return (
        <div className="container">
            <img draggable="false" src={pokeball}/>
            <input placeholder="Search for a pokemon" className="search" ref={input} onChange={handleChangeDebounced} type="text"></input>
        </div>
    )
}