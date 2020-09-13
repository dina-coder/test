import React from 'react';
import MainPhrase from '../core/MainPhrase';
import Button from '../core/Button';
import style from '../../assets/style/Header.module.scss';
const Header=(props)=> {
  const SetData=()=>{
    const data={
      checkmarks: props.checkmarks,
      object: props.object,
      modificator: props.modificator,
      action: props.action,
      add_on: props.add_on,
      comment:props.comment
    }
    console.log(data);
    props.Get_Phrase_Async();
    props.PutinFunction();

  }
  return (
    <div className={style.wrapper}>
      <div><MainPhrase phrase={props.phrase} /></div>
      <div className={style.Button}><Button name="Отправить" func={SetData} /></div>
    </div>
  );
}

export default Header;
