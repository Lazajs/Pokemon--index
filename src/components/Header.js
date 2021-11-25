import './Header.scss'
import pokemon from '../images/pokemon.svg'
import Search from './Search'
import { useContext } from "react"
import pokemonList from "../context/pokemonList"

export default function Header() {
    const [pokes, setPokes] = useContext(pokemonList)
    
    return (
    <header className="header">
        <img className="logo" src={pokemon}/>
        <Search pokes={pokes} setPokes={setPokes}/>
    </header>
    )
}
