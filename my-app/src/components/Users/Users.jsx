import React from "react";
import s from './Users.module.css'
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })

    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.all}>
            <div className={s.pages}>{pages.map(p => {
                return <span onClick={()=>this.onPageChanged(p)}  className={(p===this.props.currentPage?s.currentPage:'')}>{` ${p} `}</span>
            })}</div>
            {

                this.props.users.map(u => <div key={u.id}>
                    <div className={s.userContainer}>
                        <div className={s.image_wrap}>
                            <img
                                src={u.photos.small === null ? 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg' : u.photos.small}/>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
}

export default Users;