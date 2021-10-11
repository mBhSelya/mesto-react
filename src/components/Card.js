export default function Card(props) {
    return(
        <article className="card">
            <button className="card__delete-button" type="button"></button>
            <img onClick = {props.popup} className="card__image" src={`${props.dataCard.link}`} alt="Фотография" />
            <div className="card__info">
                <h2 className="card__title">{props.dataCard.name}</h2>
                <div className="card__like">
                    <button className="card__like-icon" type="button" aria-label="Лайк"></button>
                    <p className="card__like-counter">{props.dataCard.likes.length}</p>
                </div>
            </div>
        </article>
    )
}