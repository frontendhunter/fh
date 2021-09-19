const  ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

const dialogsReducer = (state, action)=>{

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                name: 'me',
                img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
                message:  state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText='';
            return state;
        case MESSAGE_CHANGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageChangeActionCreator = (txt) => ({type:MESSAGE_CHANGE,text:txt});

export default dialogsReducer;