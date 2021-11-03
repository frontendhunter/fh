import React from "react";
import s from './Users.module.css';
import Paginator from "../../common/Paginator";
import User from "./User";

const Users = (props) => {

    return <div className={s.all}>

        <Paginator totalUsersCount={props.totalUsersCount}
                   currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
            // portionSize={props.portionSize}

        />
        <div className={s.users}>
            {

                props.users.map(u => <User key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
                auth={props.isAuth}

                />)

            }
        </div>

    </div>
}

export default Users;