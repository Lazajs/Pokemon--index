import './Pokemon.scss'
import { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
import getPokemonFlavor from '../services/getPokemonFlavor'

export default function Pokemon({poke,name,url}) {
    const [info, setInfo] = useState(false)
    const [flavour, setFlavour] = useState()

    useEffect(()=>{   
        // pokeinfo fetching 
        if (!poke) getSinglePokemon(url).then(e => setInfo(e))
        else setInfo(poke)
    },[])

    const openCard = ()=>{ 
        //click handler, text flavour fetching
        if (flavour) setFlavour(null)
        else {
            getPokemonFlavor(info.species.url)
            .then(res => {
                setFlavour(res[0])
                // setFlavour(res)
            })
        }
    }
    // `/pokemon/${name || info.name}`
    // https://www.npmjs.com/package/react-easy-swipe

    if (!flavour) {
        // return the closed card
        return <>
        {info ? 
            <div className="each-poke" onClick={openCard}>
                {info.sprites ? <img className="sprite" src={info.sprites.front_default} /> : ''}
                <p className="poke__name">{name || info.name}</p>   
                <strong> {'>>'} </strong>
            </div>
            : ''}</>
    } else {
        // return the open card
        return <> 
            <div className="each-poke active" onClick={openCard}>
                <img className="sprite active" src={info.sprites.front_default}/>
                <p className='flavor'>{flavour.flavor_text}</p>
            </div>
            </>

    }

}

