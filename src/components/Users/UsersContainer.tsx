import React from 'react'
import {
    follow, requestUsers,
    unfollow
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>
    followingInProgress: Array<number>
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    getUsers: (currentPage:number, pageSize:number) => void
}
type OwnPropsType = {

}

type PropsType =  MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber:number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                // portionSize={this.props.portionSize}
            />
        </>
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {

    return {

        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        // portionSize: getPortionSize(state)
    }
}


export default compose(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers,
    })
    , WithAuthRedirect
)(UsersContainer)
