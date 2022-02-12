import './Pokemon.scss'
import { useEffect, useState} from 'react'
import getSinglePokemon from '../services/getSinglePokemon'
// import getPokemonFlavor from '../services/getPokemonFlavor'
import Hammer from 'react-hammerjs'
import {useNavigate} from 'react-router-dom'

export default function Pokemon({poke, url}) {
    const [info, setInfo] = useState(false)
    const [flavour, setFlavour] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{   
        // pokeinfo fetching 
        if (poke) setInfo(poke) 
        else getSinglePokemon(url).then(e => setInfo(e))
    },[])

    const handleTap = ()=>{ 
        //click handler, text flavor fetching
        if (!localStorage.getItem(info.name)) {
            import('../services/getPokemonFlavor').then(getPokemonFlavor => {
                getPokemonFlavor.default(info.species.url)
                .then(res => {
                    localStorage.setItem(info.name, res[0].flavor_text)
                    setFlavour(true)
                })
            })
            return
        }
        setFlavour(flavour ? false : true)
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
            navigate(`/pokemon/${info.name}`)
        } else {
            el.style.transform = 'none'
        }
    }

    if (!flavour) {
        // return the closed card
        return <>
        {info ? 
            <Hammer onPressUp={handleEnd} onTap={handleTap} onPanCancel={handleEnd} onPanEnd={handleEnd} onPan={handlePan}>
                <div className="each-poke">
                    {info.sprites ? <img draggable='false' className="sprite" src={info.sprites.front_default} /> : ''}
                    <p className="poke__name">{info.name}</p>   
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
                    <p className='flavor'>{localStorage.getItem(info.name)}</p>
                    <strong> {'>>'} </strong>
                </div>
            </Hammer>
            </>
    }

}

