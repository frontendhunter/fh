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

    switch (action.type) {
        case ADD_POST:
            state.posts.push({id: 5, name: 'smth', message: state.newPostText, likesCount: 0})
            state.newPostText = '';
            return state;
        case POST_CHANGE:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: POST_CHANGE, newText: text});

export default profileReducer