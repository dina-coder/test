import React, { useRef } from 'react';
import MainPhrase from '../core/MainPhrase';
import style from '../../assets/style/Header.module.scss';
import MoodChecker from '../core/MoodChecker';
const Header=(props)=> {

  let AllChannels=[]
    if (props.channel !== undefined){
       AllChannels=props.channel.type.choices.map(x=><option value={x.name} >{x.name}</option>)
    }
  
 
  const AllCheckers=props.checkmarks.map(x=><MoodChecker funcOnCheckmarks={props.funcOnCheckmarks} name={x.name}/>);
  let selectRef = useRef();

  return (
    <div className={style.wrapper}>
      <div><MainPhrase phrase={props.phrase} /></div>
      <div className={style.Checker}> 
        {AllCheckers} 
        <form> 
          <h1 className={style.ChannelTitle}>Канал:</h1>
          <select ref = {selectRef} onChange={()=>props.funcOnChannel(selectRef.current.value)} className={style.ChannelList}>
             {AllChannels} 
          </select>
        </form>
      </div>
      {/* <div className={style.Button}><Button name="Отправить" func={SetData} /></div> */}
    </div>
  );
}

export default Header;
