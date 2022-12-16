import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vhKXIsDwAbn7HFQ7JkS71zCmkmP-tAjoiA&usqp=CAU' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--YOcv_Dl---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://kolosek.com/content/images/2018/02/beach.png' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
