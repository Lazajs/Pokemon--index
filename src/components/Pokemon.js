import './Pokemon.scss'

export default function Pokemon({name, sprites}) {

    return <div className="each-poke">
        {sprites && <img className="sprite" src={sprites.front_default} />}
        <p>{name}</p>
    </div>

}

