import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});
type MapPropsType ={
     isAuth:boolean
}

export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    function RedirectComponent(props:  MapPropsType) {

        let {isAuth,...restProps} = props;
        if (!isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedRedirectComponent = connect<MapPropsType,{},WCP,AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)
    return ConnectedRedirectComponent;
}