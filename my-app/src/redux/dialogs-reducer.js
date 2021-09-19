const  ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Erjan', img: 'https://memepedia.ru/wp-content/uploads/2019/03/erzhan-768x569.jpg'},
        {
            id: 2,
            name: 'BrushGirl',
            img: 'https://ru-minecraft.ru/uploads/posts/2018-02/1519154980_mad-villagers.png'
        },
        {
            id: 3,
            name: 'uRina',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirEEXAcgdftxMTICIHgtrNo9qBZhlLuUVlg&usqp=CAU'
        },
        {
            id: 4,
            name: 'Dushnila',
            img: 'https://media.professionali.ru/processor/topics/size5/2017/03/21/brodude-ru-8-06-2015-f2ecjf7krnt7z.jpg'
        },
    ],
        messages: [
        {
            id: 1,
            name: 'BrushGirl',
            img: 'https://ru-minecraft.ru/uploads/posts/2018-02/1519154980_mad-villagers.png',
            message: 'hello'
        },
        {
            id: 2,
            name: 'me',
            class: 'textAlign: right;',
            img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
            message: 'sosi jopu'
        },
        {
            id: 3,
            name: 'me',
            class: 'textAlign: right; ',
            img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
            message: 'pisia popa pisia popa pisia popa pisia popa pisia popa  '
        },
        {
            id: 4,
            name: 'BrushGirl',
            img: 'https://ru-minecraft.ru/uploads/posts/2018-02/1519154980_mad-villagers.png',
            message: 'popa pisia popa pisia popa pisia'
        }
    ],
        newMessageText: 'Hello',
};

const dialogsReducer = (state = initialState, action)=>{

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