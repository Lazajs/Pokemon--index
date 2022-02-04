import pokeball from '../images/re-pokeball.png'
import './Search.scss'
import getPokemonNames from '../services/getPokemonNames'
import { useRef } from 'react'
import debounce from "just-debounce-it"


export default function Search({setNames}) {
    const input = useRef()

    const handleChange = ()=>{
        getPokemonNames(input.current.value).then(res => {
            setNames(res.results ? res.results : res)
        }).catch(console.log)
    }

    const handleChangeDebounced = debounce(()=> handleChange() ,500)
    

    return (
        <div className="container">
            <img draggable="false" src={pokeball}/>
            <input placeholder="Find pokemon" className="search" ref={input} onChange={handleChangeDebounced}  type="text"></input>
        </div>
    )
}