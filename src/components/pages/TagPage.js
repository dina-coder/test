import React, { useEffect, useState } from 'react';
import style from '../../assets/style/TagPage.module.scss';
import Header from '../elements/Header';
import Button from '../core/Button';
import Column from '../elements/Column';
import Comment from '../core/Comment';
import { connect } from 'react-redux';
import { Post_Counter, Get_Data_Async, Post_Data } from '../../redux/reducers/TagReducer/TagReducer'
import Counter from '../core/Counter';

const TagPage = (props) => {
  useEffect(() => {
    props.Get_Data_Async()
  }, [])
   const [object, SetObject]=useState("");
   const [modificator, SetModificator]=useState("");
   const [negative_modificator, SetNegativeModificator]=useState("");
   const [action, SetAction]=useState("");
   const [add_on, SetAdd_On]=useState("");
   const [checkmarks]=useState([]);
   const [comment, SetComment]=useState("");
   const [channel, SetChannel]=useState("");
  const IsChecmarkClicked=(name)=>{
    if (checkmarks.indexOf(name)!==-1){
      checkmarks.splice(checkmarks.indexOf(name), 1)
    }
    else checkmarks.push(name);
  }
  const CommentContent=(e)=>{
    SetComment(e.currentTarget.value);
  }
  const TagNext = () => {
    props.Post_Counter();
    props.Post_Data(checkmarks);
  }
  return (
    <div className={style.wrapper}>
      <Counter counter={props.counter} />
      <Header funcOnChannel={SetChannel} funcOnCheckmarks={IsChecmarkClicked} phrase={props.phrase} checkmarks={props.checkboxes} channel={props.channel[0]} />
      <div className={style.ListContainer}>
        <Column style="big" name='Объект' list={props.object_list[0]} currentValue = {object} func={SetObject} />
      <div >
          <Column style="small" name='Модификатор отрицания'  currentValue = {modificator} func={SetModificator} list={props.modificator[0]} />
          <Column style="small" name='Модификатор уточнения'  currentValue = {negative_modificator} func={SetNegativeModificator} list={props.modificator[0]} />
        </div>
        <Column style="big" name='Действие'  currentValue = {action} func={SetAction} list={props.action[0]} />
        <Column style="big" name='Дополнение'  currentValue = {add_on} func={SetAdd_On} list={props.add_on[0]} />
      </div>
      <div className={style.ListContainer}>
        <Comment currentValue={comment} func={CommentContent}/>
        <Button  func={TagNext} name="Отправить" />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  checkboxes: state.TagReducer.checkboxes,
  channel: state.TagReducer.channel,
  object_list: state.TagReducer.object_list,
  negative_modificator: state.TagReducer.negative_modificator,
  modificator: state.TagReducer.modificator,
  action: state.TagReducer.action,
  add_on: state.TagReducer.add_on,
  phrase: state.TagReducer.phrase,
  counter: state.TagReducer.counter
})

export default connect(mapStateToProps, {  Post_Counter,  Get_Data_Async, Post_Data })(TagPage);
