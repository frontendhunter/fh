import React from "react";
import s from './Users.module.css'
import defaultImage from '../../assets/images/defaultProfileImage.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.all}>
        <div className={s.pages}>{pages.map(p => {
            if (p < props.currentPage + 5 && p > props.currentPage - 5) {
                return <span onClick={() => props.onPageChanged(p)}
                             className={(p === props.currentPage ? s.currentPage : '')}>{` ${p} `}</span>
            } else if (p === pages.length) {
                return <span onClick={() => props.onPageChanged(p)}
                             className={(p === props.currentPage ? s.currentPage : '')}>{` ...${p} `}</span>
            }  

        })}</div>
        {

            props.users.map(u => <div key={u.id}>
                <div className={s.userContainer}>
                    <div className={s.image_wrap}>
                        <NavLink to={`/Profile/${u.id}`}>
                            <img src={u.photos.small === null ? defaultImage : u.photos.small}/>
                        </NavLink>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "2cc3354f-01b5-4bfb-aa39-e518c7551d43"
                                    },
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 1) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }

                            }>Unfollow</button> :
                            <button className={s.mode_Green} onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "2cc3354f-01b5-4bfb-aa39-e518c7551d43"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }

                            }>Follow</button>
                        }
                    </div>
                    <div className={s.discription}>
                        <span className={s.name}>{u.name}</span>
                        <span>{'u.location.country'}</span>
                        <span>{'u.location.city'}</span>
                        <span>{u.status}</span>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;