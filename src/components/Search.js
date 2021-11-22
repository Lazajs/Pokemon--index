import pokeball from '../images/pokeball.svg'
import './Search.scss'

export default function Search() {
    return (
        <div className="container">
            <img draggable="false" src={pokeball}/>
            <input className="search" type='text'/>
        </div>
    )
}