import './Header.scss'
import pokemon from '../images/pokemon.svg'
import Search from './Search'
import { useContext } from "react"
import pokemonList from "../context/pokemonList"

export default function Header() {
    const [names, setNames] = useContext(pokemonList)
    
    return (
    <header className="header">
        <img className="logo" src={pokemon}/>
        <Search names={names} setNames={setNames}/>
    </header>
    )
}
