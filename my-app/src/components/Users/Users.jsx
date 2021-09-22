import React from "react";
import s from './Users.module.css'
import {followAC} from "../../redux/users-reducer";


const Users = (props) => {
    debugger
    if (props.users.length===0){
        props.setUsers([
            {
                id: 1,
                followed: false,
                profilePhoto:'https://i.pinimg.com/originals/30/62/75/3062756a297f1e3c22e35f3fe89b3ecc.jpg',
                fullName: 'Kira',
                status: 'Buying deep',
                location: {country: 'RUSSIA', city: 'Saint-Petersburg'}
            },
            {
                id: 2,
                followed: true,
                profilePhoto:'https://i.pinimg.com/originals/30/62/75/3062756a297f1e3c22e35f3fe89b3ecc.jpg',
                fullName: 'Dmitry',
                status: 'one year Investor(OLD)',
                location: {country: 'RUSSIA', city: 'Kolpino'}
            },
            {
                id: 3,
                followed: false,
                profilePhoto:'https://i.pinimg.com/originals/30/62/75/3062756a297f1e3c22e35f3fe89b3ecc.jpg',
                fullName: 'Andrew',
                status: 'beer investor',
                location: {country: 'Ukraine', city: 'Kiev'}
            }
            ])
    }
    return <div className={s.all}>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.userContainer}>
                    <div className={s.image_wrap}>
                        <img src={u.profilePhoto}/>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}

                    </div>
                    <div className={s.discription}>
                        <span className={s.name}>{u.fullName}</span>
                        <span>{u.location.country}</span>
                        <span>{u.location.city}</span>
                        <span>{u.status}</span>
                    </div>
                </div>
            </div>)
        }
    </div>
}
export default Users;