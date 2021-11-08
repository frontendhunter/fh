const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

export type InitialStateType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}
export type DialogItemType = {
    id: number
    name: string
    img: string | null
}
export type MessageItemType = {
    id: number
    name: string
    img: string | null
    message: string
}

let initialState: InitialStateType  = {
    dialogs: [
        {
            id: 1,
            name: 'Yury',
            img: 'https://memepedia.ru/wp-content/uploads/2019/03/erzhan-768x569.jpg'
        },
        {
            id: 2,
            name: 'another girl',
            img: 'https://ru-minecraft.ru/uploads/posts/2018-02/1519154980_mad-villagers.png'
        },
        {
            id: 3,
            name: 'Rina',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirEEXAcgdftxMTICIHgtrNo9qBZhlLuUVlg&usqp=CAU'
        },
        {
            id: 4,
            name: 'Dan',
            img: 'https://media.professionali.ru/processor/topics/size5/2017/03/21/brodude-ru-8-06-2015-f2ecjf7krnt7z.jpg'
        },
    ],
    messages: [
        {
            id: 1,
            name: 'another girl',
            img: 'https://ru-minecraft.ru/uploads/posts/2018-02/1519154980_mad-villagers.png',
            message: 'hello'
        },
        {
            id: 2,
            name: 'me',
            img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
            message: 'Hy'
        },
        {
            id: 3,
            name: 'another girl',
            img: 'https://ru-minecraft.ru/uploads/posts/2018-02/1519154980_mad-villagers.png',
            message: '  what are you doing '
        },
        {
            id: 4,
            name: 'me',
            img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
            message: 'i am programming now'
        }
    ],
};

const dialogsReducer = (state = initialState, action: any):InitialStateType  => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 5,
                    name: 'me',
                    img: 'https://pbs.twimg.com/profile_images/1412450786542379011/IY6aPa50.png',
                    message: action.newMessageBody
                }],
            };

        default:
            return state;

    }
}
type addMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}
export const addMessageActionCreator = (newMessageBody:string):addMessageActionCreatorType => ({type: ADD_MESSAGE, newMessageBody});


export default dialogsReducer;