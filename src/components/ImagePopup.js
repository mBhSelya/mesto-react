export default function ImagePopup(props) {
    return(
        <div className={`popup ${props.info._id && 'popup_opened'}`} id="open-image">
            <form className="popup__container-image" name="open-image">
                <img className="popup__image" src={`${props.info.link}`} alt="Фотография" />
                <h2 className="popup__signature">{props.info.name}</h2>
                <button onClick = {props.onClose} className="popup__button-close popup__button-close_image" type="button"></button>
            </form>
        </div>
    )
}
    
