const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

type DialogsStateType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}
type DialogItemType = {
    id: number
    name: string
    img: string | null
}
type MessageItemType = {
    id: number
    name: string
    img: string | null
    message: string
}

let initialState: DialogsStateType = {
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

const dialogsReducer = (state = initialState, action: any) => {
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

export const addMessageActionCreator: object = (newMessageBody: string) => ({type: ADD_MESSAGE, newMessageBody});


export default dialogsReducer;