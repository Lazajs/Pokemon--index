import './Header.scss'
import Search from './Search'
import { useContext } from "react"
import pokemonList from "../context/pokemonList"
import { Route, Routes, useLocation} from 'react-router-dom'
import pokefy from '../images/POKEFY.png'
import Back from './stats/Back'


export default function Header() {
    const [names, setNames] = useContext(pokemonList)
    const location = useLocation()


    return (
    <header className="header">
        <img className='pokefy' src={pokefy} />
        {
            location.pathname.includes('pokemon') ? <Back/> : ''
        }
        <Routes><Route path='/' element={<Search names={names} setNames={setNames}/>}/></Routes>
    </header>
    )
}
