import pokeball from '../images/pokeball.svg'
import './Search.scss'
import getPokemons from '../services/getPokemons'
import { useRef } from 'react'
import debounce from "just-debounce-it"


export default function Search({setPokes}) {
    const input = useRef()

    const handleChange = ()=>{
        if (input.current.value) {
            getPokemons(input.current.value, true).then(res => setPokes(res))
        } else {
            getPokemons().then(res => setPokes(res))
        }
    }

    const handleChangeDebounced = debounce(()=> handleChange() ,500)
    
    return (
        <div className="container">
            <img draggable="false" src={pokeball}/>
            <input className="search" ref={input} onChange={handleChangeDebounced} type="text"></input>
        </div>
    )
}