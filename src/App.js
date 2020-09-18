import React from 'react';
import style from './assets/style/App.module.scss'
import TagPage from './components/pages/TagPage';


const App=()=> {
  return (
    <div className={style.wrapper}>
       <TagPage />
    </div>
  );
}

export default App;
