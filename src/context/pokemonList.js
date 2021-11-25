import {createContext} from 'react'
import { useState } from "react"

const pokemonList = createContext({})

export function PokemonContext({children}) {
    const [pokes, setPokes] = useState({})


    return <pokemonList.Provider value={[pokes,setPokes]}>
        {children}
    </pokemonList.Provider>
}

export default pokemonList