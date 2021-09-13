
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
    addPost(){
        let newPost = {
            id: 5,
            name: 'someth',
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this.postChange('');
    },
    postChange(value){
        this._state.profilePage.newPostText = value ;
        this._callSubscriber(this._state);
    },
    addMessage(){
        let newMessage ={
            id: 5,
            name: 'me',
            img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
        this.messageChange('');
    },
    messageChange(value){
        this._state.dialogsPage.newMessageText = value ;
        this._callSubscriber(this._state);
    },
    _callSubscriber(){
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    }
}



export default store;