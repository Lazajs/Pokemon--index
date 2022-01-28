import Pokemon from "./Pokemon"

export default function Main({names}) {
    return (
        <main className="poke__container">
        {
            names && !names.stats ? names.map((e,i) => <Pokemon key={i} name={e.name} url={e.url}/>) //information to fetch later 
                            : <Pokemon poke={names}/> //pokemon info already fetched
        }
        </main> 
    )
}