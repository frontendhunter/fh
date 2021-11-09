import React from "react";
import s from './Users.module.css';
import Paginator from "../../common/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId:number) => void
    unfollow: (userId:number) => void
}

const Users: React.FC<PropsType> = (props) => {

    return <div className={s.all}>

        <Paginator totalUsersCount={props.totalUsersCount}
                   currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
            // portionSize={props.portionSize}

        />
        <div className={s.users}>
            {

                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}

                />)

            }
        </div>
        <Paginator totalUsersCount={props.totalUsersCount}
                   currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
            // portionSize={props.portionSize}

        />

    </div>
}

export default Users;