import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Sasha'},
  {id: 3, name: 'Anton'},
  {id: 4, name: 'Dima'},
  {id: 5, name: 'Lina'}
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'I`m fine'},
  {id: 4, message: 'progress'},
  {id: 5, message: 'my wife'}
]

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 15 },
  { id: 2, message: 'It`s my first post', likesCount: 23 }
]


const root = ReactDOM.createRoot(document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
