import React from "react";
import s from './Users.module.css';
import defaultImage from '../../assets/images/defaultProfileImage.png';
import {NavLink} from "react-router-dom";



const User = ({user,followingInProgress,follow,unfollow}) => {

    const checkLength = (text)=>{
        if(!text){
            return 'Статус'
        }else if (text.length < 20){
            return text
        }else{let textSm = text.slice(0,19) + '...'
            return textSm

        }
    }

    return <div className={s.userContainer}>
        <div className={s.image_wrap}>
            <NavLink to={`/Profile/${user.id}`}>
                <img src={user.photos.small === null ? defaultImage : user.photos.small}/>
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