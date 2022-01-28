import './Header.scss'
import Search from './Search'
import { useContext } from "react"
import pokemonList from "../context/pokemonList"
import { Route, Routes} from 'react-router-dom'
import pokefy from '../images/POKEFY.png'

export default function Header() {
    const [names, setNames] = useContext(pokemonList)

    return (
    <header className="header">
        {/* <h1 className='title'>POK<br/>EFY</h1> */}
        <img className='pokefy' src={pokefy} />
        <Routes><Route path='/' element={<Search names={names} setNames={setNames}/>}/></Routes>
    </header>
    )
}
