const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

let initialState = {
    posts: [
        {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
        {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
    ],
    newPostText: 'sicialInvest',
}
const profileReducer = (state = initialState, action) => {

    let stateCopy = {};

    switch (action.type) {
        case ADD_POST:
            stateCopy = {...state};
            stateCopy.posts =[...state.posts,({id: 5, name: 'smth', message: state.newPostText, likesCount: 0})];
            // state.posts.push({id: 5, name: 'smth', message: state.newPostText, likesCount: 0})
            stateCopy.newPostText = '';
            return stateCopy;
        case POST_CHANGE:
            stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: POST_CHANGE, newText: text});

export default profileReducer