import './Pokemon.scss'
import { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import getPokemonFlavor from '../services/getPokemonFlavor'

export default function Pokemon({poke,name,url}) {
    const [info, setInfo] = useState(false)
    const [flavour, setFlavour] = useState()

    useEffect(()=>{   
        // pokeinfo fetching 
        if (!poke) getSinglePokemon(url).then(e => setInfo(e))
        else setInfo(poke)
    },[])

    // useEffect(()=>{
    //     console.log(flavour)
    // },[flavour])

    const openCard = ()=>{ 
        //click handler, text flavour fetching
        getPokemonFlavor(info.species.url)
            .then(res => {
                setFlavour(res)
            })
    }

    return <Link to={`/pokemon/${name || info.name}`}>
    {info ? 
        <div className="each-poke" onClick={openCard}>
            {info.sprites ? <img className="sprite" src={info.sprites.front_default} /> : ''}
            <p className="poke__name">{name || info.name}</p>   
            <strong> {'>>'} </strong>
        </div>
        : <Spinner />}
    </Link>

}

