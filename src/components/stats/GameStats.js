import './GameStats.scss'

export default function GameStats({stats, ability}) {
    return <>
    <div className='stats'>
        <h1>Game stats</h1>
        {
            stats.map(e => {
                return <p key={e.stat.name} >{e.stat.name}: {e.base_stat} </p>
            })
        }
        <p>Ability: {ability.map(a => <i key={a.ability.name}>|{a.ability.name}| </i>)}</p>
    </div>


    </>
}