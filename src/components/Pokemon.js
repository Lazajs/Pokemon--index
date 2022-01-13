import './Pokemon.scss'
import { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
import { Link } from 'react-router-dom'

export default function Pokemon({poke,name,url}) {
    const [info, setInfo] = useState(false)

    useEffect(async ()=>{   
        if (!poke) getSinglePokemon(url).then(e => setInfo(e))
        else setInfo(poke)
    },[])

    return <Link to={`/pokemon/${name || info.name}`}>
        <div className="each-poke">
            {info.sprites ? <img className="sprite" src={info.sprites.front_default} /> : ''}
            <p className="poke__name">{name || info.name}</p>   
            <div className="types__container">
                { info.types ? info.types.map(e => <p key={e.slot} className="types">{e.type.name}</p>) : ''}
            </div>
        </div>
    </Link>

}

