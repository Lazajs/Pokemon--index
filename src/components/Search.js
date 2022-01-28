import pokeball from '../images/pokeball.svg'
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
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     handleChangeDebounced()
    // }

    return (
        <div className="container">
            <img draggable="false" src={pokeball}/>
           <input onFocus={handleChangeDebounced} placeholder="Find pokemon" className="search" ref={input} onSubmit={handleChangeDebounced} onChange={handleChangeDebounced}  type="text"></input>
           <button onClick={handleChangeDebounced}>Search</button>
        </div>
    )
}