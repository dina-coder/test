import React, { useEffect, useState } from 'react';
import style from '../../assets/style/TagPage.module.scss';
import Header from '../elements/Header';
import MoodChecker from '../core/MoodChecker';
import Column from '../core/Column';
import Comment from '../core/Comment';
import { connect } from 'react-redux';
import {Get_Mood_Async, Get_Object_List_Async, Get_Modificator_List_Async, Get_Action_List_Async, 
  Get_Phrase_Async, Get_Add_On_List_Async} from '../../redux/reducers/TagReducer/TagReducer'
import Column1 from '../core/Column1';

const TagPage=(props)=> {
  useEffect(()=>{
    props.Get_Mood_Async()},[])
  useEffect(()=>{
    props.Get_Object_List_Async()},[])
  useEffect(()=>{
    props.Get_Modificator_List_Async()},[])
  useEffect(()=>{
    props.Get_Action_List_Async()},[])
  useEffect(()=>{
    props.Get_Add_On_List_Async()},[])
  useEffect(()=>{
    props.Get_Phrase_Async()},[])

  const [object, SetObject]=useState("");
  const [modificator, SetModificator]=useState("");
  const [action, SetAction]=useState("");
  const [add_on, SetAdd_On]=useState("");
  const [checkmarks, SetCheckmarks]=useState([]);
  const [comment, SetComment]=useState("");
  const IsChecmarkClicked=(name)=>{
    if (checkmarks.indexOf(name)!==-1){
      checkmarks.splice(checkmarks.indexOf(name), 1)
    }
    else checkmarks.push(name);
  }
  const CommentContent=(e)=>{
    SetComment(e.currentTarget.value);
  }
  const PutinFunction=()=>{
    SetObject('');
    SetModificator('');
    SetAction('');
    SetAdd_On('');
    SetCheckmarks([]);
    SetComment('');
  }
  const AllMoods=props.mood.map(x=><MoodChecker func={IsChecmarkClicked} name={x.mood}/>);
  const arr={
    bank: [],
    rere:[],
    aaa:['eee', 'fff', 'sss'],
    qqq: [],
    ddd:['fgg', 'sds', 'wew']
  }
  return (
    <div className={style.wrapper}>
      <Header object={object} modificator={modificator} action={action} add_on={add_on} checkmarks={checkmarks}
       phrase={props.phrase.phrase} comment={comment} Get_Phrase_Async={props.Get_Phrase_Async} PutinFunction={PutinFunction}/>
      {AllMoods}
      <div className={style.ListContainer}>
      {/* <Column name='Object' func={SetObject} object={props.object_list}/> */}
      <Column name='Modificator' func={SetModificator} object={props.modificator}/>
      <Column name='Action' func={SetAction} object={props.action}/>
      <Column name='Add-on' func={SetAdd_On} object={props.add_on}/>
      <Column1 name='Test' func={SetObject} object={arr}/>
      </div>
      <Comment func={CommentContent} />
      </div>
  );
}
const mapStateToProps=(state)=>({
  mood: state.TagReducer.mood,
  object_list: state.TagReducer.object_list,
  modificator:state.TagReducer.modificator,
  action:state.TagReducer.action,
  add_on:state.TagReducer.add_on,
  phrase: state.TagReducer.phrase
})

export default connect(mapStateToProps, {Get_Mood_Async, Get_Object_List_Async, Get_Modificator_List_Async, 
  Get_Action_List_Async, Get_Add_On_List_Async, Get_Phrase_Async})(TagPage);
