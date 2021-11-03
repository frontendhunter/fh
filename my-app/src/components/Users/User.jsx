import React from "react";
import s from './Users.module.css';
import defaultImage from '../../assets/images/defaultProfileImage.png';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faUserTie} from '@fortawesome/free-solid-svg-icons';



const User = ({user,followingInProgress,follow,unfollow}) => {

    const checkLength = (text)=>{
        if(!text){
            return 'Статус'
        }else if (text.length < 100){
            return text
        }else{
            let textSm = text.slice(0,99) + '...'
            return textSm

        }
    }

    return <div className={s.userContainer}>
        <div className={s.image_wrap}>
            <NavLink to={`/Profile/${user.id}`} >
                {user.photos.large === null ?  <FontAwesomeIcon className={s.userIcon} icon={faUserTie}/> :  <img src={ user.photos.large}/>}


            </NavLink>

        </div>
        <div className={s.discription}>
            <span className={s.name}>{user.name}</span>
            <span>{ checkLength(user.status )}</span>
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