import { rerenderEntireThree } from "../render";

let state = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
};
export default state;