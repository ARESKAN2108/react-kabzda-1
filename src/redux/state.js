const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It`s my first post', likesCount: 23 }
            ],
            newPostText: 'it-kamasutra.com'
        },
       
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Anton' },
                { id: 4, name: 'Dima' },
                { id: 5, name: 'Lina' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I`m fine' },
                { id: 4, message: 'progress' },
                { id: 5, message: 'my wife' }
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber () {
        console.log('State changed')
    },

    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    } 
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const SendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) 

    window.store = store;
export default store;
