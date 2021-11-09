import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import {UserType} from "../../types/types";

type PropsType = {
    user:UserType,
    followingInProgress: Array<number>,
    follow:(userId:number)=>void,
    unfollow:(userId:number)=>void,

}

const User:React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {

    const checkLength = (text:string) => {
        if (!text) {
            return 'Статус'
        } else if (text.length < 61) {
            return text
        } else {
            let textSm = text.slice(0, 60) + '...'
            return textSm

        }
    }

    return <div className={s.userContainer}>
        <div className={s.image_wrap}>
            <NavLink to={`/Profile/${user.id}`}>
                {user.photos.large === null ? <FontAwesomeIcon className={s.userIcon} icon={faUserTie}/> :
                    <img src={user.photos.large}/>}


            </NavLink>

        </div>
        <div className={s.discription}>
            <NavLink to={`/Profile/${user.id}`} className={s.name}>{user.name} </NavLink>
            <span>{checkLength(user.status)}</span>
        </div>
        {user.followed ?
            <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                        unfollow(user.id)
                    }

                    }>Отписаться</button> :
            <button disabled={followingInProgress.some(id => id === user.id)}
                    className={s.mode_Green} onClick={() => {
                follow(user.id)
            }

            }>Подписаться</button>
        }
    </div>
}

export default User;