let initialState = {
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
    ]}

const sidebarReducer = (state = initialState, action)=>{
    switch (action.type) {
        default: return state;
    }
}

export default sidebarReducer;