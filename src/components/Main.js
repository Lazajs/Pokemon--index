import Pokemon from "./Pokemon"

export default function Main({names}) {
    console.log(names)
    return (
        <main className="poke__container">
        {
            names ? names.map(e => <Pokemon key={e.name} name={e.name} url={e.url}/>) //information to fetch later 
                            : <Pokemon poke={names}/> //pokemon info already fetched
        }
        </main> 
    )
}