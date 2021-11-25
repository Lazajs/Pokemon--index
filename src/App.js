import Header from "./components/Header"
import Main from "./components/Main"
import { PokemonContext } from "./context/pokemonList"

export default function App() {
  return (
    <PokemonContext>
      <Header />
      <Main />
    </PokemonContext>
    
  )
}
