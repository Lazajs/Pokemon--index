import './CommonStats.scss'

export default function CommonStats({weight, height, order, basexp}) {
    return <div className="information">
    <h1>Information</h1>
        <p>Weight: <strong>{weight}</strong></p>
        <p>Height: <strong>{height}</strong></p>
        <p>Base experience: <strong>{basexp}</strong></p>
        <p>Order: <strong>{order}</strong></p>
    </div>
}