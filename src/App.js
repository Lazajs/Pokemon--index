import Header from "./components/Header"
import Main from "./components/Main"
import { PokemonContext } from "./context/pokemonList"
import {Route, Routes} from "react-router-dom"
import Stats from "./components/Stats"

export default function App() {
  return (
    <PokemonContext>
      <Header />
      
      <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/pokemon/:pokeName' element={<Stats/>}></Route>
      </Routes> 

    </PokemonContext>
    
  )
}
