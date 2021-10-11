import React, {useState, useEffect} from "react";
import { ApiConfig } from "../utils/Api";
import Card from "./Card";


function Main(props) {

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [Cards, setCards] = useState([]);
    

    useEffect(() => {
        ApiConfig.getInfoUser()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
        ApiConfig.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <>
            <main>
                <section className="profile">
                    <div className="profile__data">
                        <button onClick={props.onEditAvatar} className="profile__avatar-edit" type="button">
                            <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар" />
                        </button>
                        <div className="profile__info">
                            <div className="profile__title">
                                <h1 className="profile__name">{userName}</h1>
                                <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="Изменить профиль"></button>
                            </div>
                            <p className="profile__description">{userDescription}</p>
                        </div>
                    </div>
                    <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="Добавить"></button>
                </section>
                <section className="cards">
                    {Cards.map((cardInfo, i) => ( 
                        <Card key={i}
                            popup = {() => {props.onCardClick(cardInfo)}}
                            dataCard = {cardInfo}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Main;