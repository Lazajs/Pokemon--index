import {createContext} from 'react'
import { useState } from "react"

const pokemonList = createContext({})

export function PokemonContext({children}) {
    const [names, setNames] = useState([])

    return <pokemonList.Provider value={[names,setNames]}>
        {children}
    </pokemonList.Provider>
}

export default pokemonList