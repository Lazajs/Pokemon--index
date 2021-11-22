import './Header.scss'
import pokemon from '../images/pokemon.svg'
import Search from './Search'

export default function Header() {
    return (
    <header className="header">
        <img className="logo" src={pokemon}/>
        <Search/>
    </header>
    )
}
