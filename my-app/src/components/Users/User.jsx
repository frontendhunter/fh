import React from "react";
import s from './Users.module.css';
import defaultImage from '../../assets/images/defaultProfileImage.png';
import {NavLink} from "react-router-dom";


const User = ({user,followingInProgress,follow,unfollow}) => {
    return <div className={s.userContainer}>
        <div className={s.image_wrap}>
            <NavLink to={`/Profile/${user.id}`}>
                <img src={user.photos.small === null ? defaultImage : user.photos.small}/>
            </NavLink>
            {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                             unfollow(user.id)
                        }

                        }>Unfollow</button> :
                <button disabled={followingInProgress.some(id => id === user.id)}
                        className={s.mode_Green} onClick={() => {
                     follow(user.id)
                }

                }>Follow</button>
            }
        </div>
        <div className={s.discription}>
            <span className={s.name}>{user.name}</span>
            <span>{user.status}</span>
        </div>
    </div>
}

export default User;