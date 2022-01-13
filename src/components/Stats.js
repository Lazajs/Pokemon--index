import './Stats.scss'
import {useParams} from 'react-router-dom'

export default function Stats() {
    const {pokeName} = useParams()

    return <h1>HOLA <strong>{pokeName}</strong></h1>
}