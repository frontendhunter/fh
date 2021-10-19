import React from "react";
import s from './Users.module.css';
import defaultImage from '../../assets/images/defaultProfileImage.png';
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, follow, unfollow, auth}) => {
    return <div className={s.userContainer}>
        <div className={s.image_wrap}>
            <NavLink to={`/Profile/${user.id}`}>
                <img src={user.photos.small === null ? defaultImage : user.photos.small}/>
            </NavLink>

            {(this.auth)?{
           if( user.followed){
                <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }

                        }>Unfollow</button> } else{
                <button disabled={followingInProgress.some(id => id === user.id)}
                className={s.mode_Green} onClick={() => {
                follow(user.id)
            }

            }>Follow</button>
            }

            }:null}
        </div>
        <div className={s.discription}>
            <span className={s.name}>{user.name}</span>
            <span>{'user.location.country'}</span>
            <span>{'user.location.city'}</span>
            <span>{user.status}</span>
        </div>
    </div>
}

export default User;