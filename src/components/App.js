import Main from "./Main";
import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpened] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpened] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpened] = useState(false);
    const [selectedCard, setSelectedCard] = useState(' ');

    function handleEditAvatarClick() {
        setEditAvatarPopupOpened(true);
    }
    
    function handleEditProfileClick() {
        setEditProfilePopupOpened(true);
    }
    
    function handleAddPlaceClick() {
        setAddPlacePopupOpened(true);
    }

    function handleCardClick(item) {
        setSelectedCard(item);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpened(false);
        setEditProfilePopupOpened(false);
        setAddPlacePopupOpened(false);
        setSelectedCard(' ');
    }
    
    return (
    <div>
        <Main 
            onCardClick = {handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
        />
        <PopupWithForm 
            name="Profile"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            children={
                <>
                    <input className="popup__input popup__input_profile_name" id="nickname-input" type="text" name="name" placeholder = "Имя" minLength="2" maxLength="40" required />
                    <span className="nickname-input-error popup__input-error"> </span>
                    <input className="popup__input popup__input_profile_description" id="description-input" type="text" name="about" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
                    <span className="description-input-error popup__input-error"> </span>
                </>
            }
            onClose={closeAllPopups}
        />
        <PopupWithForm 
            name="Avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            children={
                <>
                    <input className="popup__input popup__input_add_link" id="avatar-link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                    <span className="avatar-link-input-error popup__input-error"></span>
                </>
            }
            onClose={closeAllPopups}
        />
        <PopupWithForm 
            name="addPlace"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            children={
                <>
                    <input className="popup__input popup__input_add_name" id="name-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                    <span className="name-input-error popup__input-error"></span>
                    <input className="popup__input popup__input_add_link" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                    <span className="link-input-error popup__input-error"></span>
                </>
            }
            onClose={closeAllPopups}
        />

        <ImagePopup
            onClose = {closeAllPopups}
            info = {selectedCard}
        />

        <template id="card-template">
            <article className="card">
                <button className="card__delete-button" type="button"></button>
                <img className="card__image" src="#" alt="Фотография" />
                <div className="card__info">
                    <h2 className="card__title"> </h2>
                    <div className="card__like">
                        <button className="card__like-icon" type="button" aria-label="Лайк"></button>
                        <p className="card__like-counter"></p>
                    </div>
                </div>
            </article>
        </template>
    </div>
  );
}

export default App;
