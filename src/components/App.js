function App() {
  return (
    <div>
      
      <div className="popup" id="edit-profile">
          <form className="popup__container" name="editProfile" noValidate>
              <fieldset className="popup__set">
                  <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <input className="popup__input popup__input_profile_name" id="nickname-input" type="text" name="name" placeholder = "Имя" minLength="2" maxLength="40" required />
                  <span className="nickname-input-error popup__input-error"> </span>
                  <input className="popup__input popup__input_profile_description" id="description-input" type="text" name="about" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
                  <span className="description-input-error popup__input-error"> </span>
                  <button type="submit" className="popup__button-save popup__button-save_inactive">Сохранить</button>
              </fieldset>
          </form>
      </div>
      <div className="popup" id="add-card">
          <form className="popup__container" name="addCard" noValidate>
              <fieldset className="popup__set">
                  <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
                  <h2 className="popup__title">Новое место</h2>
                  <input className="popup__input popup__input_add_name" id="name-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                  <span className="name-input-error popup__input-error"></span>
                  <input className="popup__input popup__input_add_link" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                  <span className="link-input-error popup__input-error"></span>
                  <button type="submit" className="popup__button-save popup__button-save_inactive">Создать</button>
              </fieldset>
          </form>
      </div>
      <div className="popup" id="open-image">
          <form className="popup__container-image" name="open-image">
              <img className="popup__image" src="#" alt="Фотография" />
              <h2 className="popup__signature"></h2>
              <button className="popup__button-close popup__button-close_image" type="button"></button>
          </form>
      </div>
      <div className="popup" id="delete-card">
          <form className="popup__container" name="deleteCard">
              <fieldset className="popup__set">
                  <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
                  <h2 className="popup__title">Вы уверены?</h2>
                  <button type="submit" className="popup__button-save">Да</button>
              </fieldset>
          </form>
      </div>
      <div className="popup" id="edit-avatar">
          <form className="popup__container" name="editAvatar">
              <fieldset className="popup__set">
                  <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
                  <h2 className="popup__title">Обновить аватар</h2>
                  <input className="popup__input popup__input_add_link" id="avatar-link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                  <span className="avatar-link-input-error popup__input-error"></span>
                  <button type="submit" className="popup__button-save">Сохранить</button>
              </fieldset>
          </form>
      </div>
      <template id="card-template">
          <article className="card">
              <button className="card__delete-button" type="button"></button>
              <img className="card__image" src="#" alt="Фотография" />
              <div className="card__info">
                  <h2 className="card__title"></h2>
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
