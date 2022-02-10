import {createContext} from 'react'
import { useState } from "react"

const pokemonList = createContext({})

export function PokemonContext({children}) {
    const [names, setNames] = useState([])
    const [count, setCount] = useState(-10)

    return <pokemonList.Provider value={[names,setNames, count, setCount]}>
        {children}
    </pokemonList.Provider>
}

export default pokemonList