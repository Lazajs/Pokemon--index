import Header from "./components/Header"
import { PokemonContext } from "./context/pokemonList"
import {Route, Routes} from "react-router-dom"
import Stats from "./components/stats/Stats"
import HomePage from "./components/HomePage"

export default function App() {
  return (
    <PokemonContext>
      <Header />
      
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/pokemon/:pokeName' element={<Stats/>}></Route>
      </Routes> 

    </PokemonContext>
    
  )
}
