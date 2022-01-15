import './Back.scss'
import back from '../../images/back.svg'
import { Link } from 'react-router-dom'

export default function Back() {
    return <Link to="/">
        <img src={back} className="back" />
    </Link>
}