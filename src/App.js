import React from 'react';
import FirstPage from './components/pages/FirstPage';
import {Route, Switch} from 'react-router-dom';
import PageResolver from './utils/PageResolver';
import style from './assets/style/App.module.scss'


const App=()=> {
  return (
    <div className={style.wrapper}>
       <Switch>
          <Route path='/login' exact={true} component={FirstPage} />
          <Route path='/' exact={true} component={PageResolver} />
      </Switch>
    </div>
  );
}

export default App;
