import './GameStats.scss'

export default function GameStats({stats, ability}) {
    return <>
    <div className='stats'>
        <h1>GAME STATS</h1>
        {
            stats.map(e => {
                return <p key={e.stat.name}>{e.stat.name}: <strong>{e.base_stat}</strong> </p>
            })
        }
        <p>Ability: <span className='abilities'>{ability.map(a => <i key={a.ability.name}>{a.ability.name} </i>)} </span></p>
    </div>


    </>
}