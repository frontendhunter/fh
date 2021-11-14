import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../types/types";


let state = {
    posts: [
        {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
        {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
    ],
    profile: null as ProfileType | null,
    status: '',
    headerProfile: null,
    newPostText: ''
}


it('right length of posts', () => {
    //1. test data
    let action = actions.addPostActionCreator('Hard work does not guarantee results or success. But if a person does not work hard, he is destined to fail.')

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3);
})


it('right message post', () => {
    //1. test data
    let action = actions.addPostActionCreator('Hard work does not guarantee results or success. But if a person does not work hard, he is destined to fail.')

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[2].message).toBe('Hard work does not guarantee results or success. But if a person does not work hard, he is destined to fail.');
})

it('right post delete', () => {
    //1. test data
    let action =  actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(1);
})

it('post shouldnt bbe deleted if id is incorrect', () => {
    //1. test data
    let action =  actions.deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(2);
})
