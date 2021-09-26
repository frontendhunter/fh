import React from "react";
import s from './Users.module.css'


const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <=  pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.all}>
            <div className={s.pages}>{pages.map(p => {
                return <span onClick={()=>props.onPageChanged(p)}  className={(p===props.currentPage?s.currentPage:'')}>{` ${p} `}</span>
            })}</div>
            {

                props.users.map(u => <div key={u.id}>
                    <div className={s.userContainer}>
                        <div className={s.image_wrap}>
                            <img
                                src={u.photos.small === null ? 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg' : u.photos.small}/>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}

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