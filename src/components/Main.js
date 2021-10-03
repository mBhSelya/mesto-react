function Main() {
    return(
        <main>
            <section className="profile">
                <div className="profile__data">
                    <button className="profile__avatar-edit" type="button">
                        <img className="profile__avatar" src="<%=require('./images/Avatar.jpg')%>" alt="Аватар" />
                    </button>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__edit-button" type="button" aria-label="Изменить профиль"></button>
                        </div>
                        <p className="profile__description">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить"></button>
            </section>
            <section className="cards">
            </section>
        </main>
    )
}

export default Main;