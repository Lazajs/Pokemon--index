import './Pokemon.scss'
import { useEffect, useState} from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
import getPokemonFlavor from '../services/getPokemonFlavor'
import Hammer from 'react-hammerjs'
import {useNavigate} from 'react-router-dom'

export default function Pokemon({poke,name,url}) {
    const [info, setInfo] = useState(false)
    const [flavour, setFlavour] = useState()
    const navigate = useNavigate()

    useEffect(()=>{   
        // pokeinfo fetching 
        if (!poke) getSinglePokemon(url).then(e => setInfo(e))
        else setInfo(poke)
    },[])

    const handleTap = ()=>{ 
        //click handler, text flavour fetching
        if (flavour) setFlavour(null)
        else {
            getPokemonFlavor(info.species.url)
            .then(res => {
                setFlavour(res[0])
            })
        }
    }

    const translateEl = (el, px)=>{ 
        // translation animation 
        let rect = el.getBoundingClientRect()
        let x = px - rect.left
        el.style.transform = `translateX(${x + 'px'})`
        
    }

    const handlePan = (evt)=>{
        // on user swipe
        if (evt.additionalEvent === 'panright') translateEl(evt.target, evt.srcEvent.clientX)   
    } 

    const handleEnd = (evt)=>{
        // on end of swipe

            let el = evt.target 
            let total =  el.style.transform
            total = total.substring(total.indexOf('(')+1, total.indexOf('p') )
            
            if(parseInt(total) >= 150) {
                navigate(`/pokemon/${name || info.name}`)
            } else {
                el.style.transform = 'none'
            }
        
    }

    // `/pokemon/${name || info.name}`

    if (!flavour) {
        // return the closed card
        return <>
        {info ? 
            <Hammer onPressUp={handleEnd} onTap={handleTap} onPanCancel={handleEnd} onPanEnd={handleEnd} onPan={handlePan}>
                <div className="each-poke">
                    {info.sprites ? <img draggable='false' className="sprite" src={info.sprites.front_default} /> : ''}
                    <p className="poke__name">{name || info.name}</p>   
                    <strong> {'>>'} </strong>
                </div>
            </Hammer>
            : ''}</>
    } else {
        // return the open card
        return <>
            <Hammer onPressUp={handleEnd} onTap={handleTap} onPanCancel={handleEnd} onPanEnd={handleEnd} onPan={handlePan}> 
                <div className="each-poke active">
                    <img draggable='false' className="sprite active" src={info.sprites.front_default}/>
                    <p className='flavor'>{flavour.flavor_text}</p>
                </div>
            </Hammer>
            </>
    }

}

