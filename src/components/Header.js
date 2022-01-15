import './Header.scss'
import pokemon from '../images/pokemon.svg'
import Search from './Search'
import { useContext } from "react"
import pokemonList from "../context/pokemonList"
import { Route, Routes } from 'react-router-dom'

export default function Header() {
    const [names, setNames] = useContext(pokemonList)
    
    return (
    <header className="header">
        <img className="logo" src={pokemon}/>
        <Routes><Route path='/' element={<Search names={names} setNames={setNames}/>}/></Routes>
    </header>
    )
}
