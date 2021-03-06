import './Stats.scss'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import getPokemonNames from '../../services/getPokemonNames'
import Spinner from '../Spinner'
import noshiny from '../../images/noshiny.svg'
import shiny from '../../images/shiny.svg'
import CommonStats from './CommonStats'
import GameStats from './GameStats'

export default function Stats() {
    const {pokeName} = useParams()
    const [pokemon, setPokemon] = useState({})
    const [sprite, setSprite] = useState({shiny: false, url: null})

    useEffect(()=>{
        getPokemonNames(pokeName).then(e => {
            setPokemon(e)   
        })
    },[])

    useEffect(() => {
        if(pokemon.sprites) setSprite(prev => {return {shiny: prev.shiny ,url:pokemon.sprites.front_default}})
    }, [pokemon.sprites])

    const changeSprite = ()=>{setSprite(prev => prev.url === pokemon.sprites.front_default ? {shiny: false, url:pokemon.sprites.back_default} : {shiny: false, url:pokemon.sprites.front_default})}
    const changeSpriteShiny = ()=>{
        if (!sprite.shiny) setSprite({shiny: true, url: pokemon.sprites.front_shiny})
        else setSprite({shiny: false, url: pokemon.sprites.front_default})
    }

    const multiType = (arr)=>{
        let types = arr.concat(arr)
        while (types.length < 15) {
            types = types.concat(arr)
        }
        return types
    }

    return <>
        {
            pokemon && pokemon.sprites && pokemon.types ? 
            <div className='card'>
                <h1 className='name'>{pokemon.name}</h1>
                <span className='images'>
                    <img className='special' onClick={changeSpriteShiny} src={sprite.shiny ? shiny : noshiny} />
                    <img className='sprite' onClick={changeSprite} src={sprite.url}  /> 
                </span>
                <span className='types'>{multiType(pokemon.types).map((e,i) => <p key={i}>{e.type.name}</p>)}</span>
                <div className='bottom'>
                    <CommonStats weight={pokemon.weight} height={pokemon.height} order={pokemon.order} basexp={pokemon.base_experience} />
                    <GameStats stats={pokemon.stats} ability={pokemon.abilities} />
                </div>
            </div>
            : <Spinner />
        }
    </>
}