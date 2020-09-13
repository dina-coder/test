import React from 'react';
import style from '../../assets/style/FirstPage.module.scss';
import Button from '../core/Button';
import {Log_in} from '../../redux/reducers/TagReducer/TagReducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const FirstPage=(props)=> {
  if (props.isAuth) return <Redirect to={'/'} />
  return (
    <div className={style.wrapper}>
      <Button name="Приступить к разметке" func={props.Log_in}/>
    </div>
  );
}

const mapStateToProps=(state)=>({
  isAuth: state.TagReducer.isAuth
})

export default connect(mapStateToProps,{Log_in}) (FirstPage);


