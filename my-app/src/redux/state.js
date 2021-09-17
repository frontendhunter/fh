import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';
const  ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
                {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
            ],
            newPostText: 'sicialInvest',
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Erjan', img: 'https://memepedia.ru/wp-content/uploads/2019/03/erzhan-768x569.jpg'},
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
            ]
        },

    },
    _callSubscriber() {
    },

    addMessage() {
        let newMessage = {
            id: 5,
            name: 'me',
            img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
        this.messageChange('');
    },
    messageChange(value) {
        this._state.dialogsPage.newMessageText = value;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this.state)

    }
}


export default store;