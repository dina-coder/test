import { LOG_IN, GET_MOOD, GET_OBJECT_LIST, GET_MODIFICATOR_LIST, GET_ACTION_LIST, GET_ADD_ON_LIST, GET_PHRASE } from "./constants";
import { api } from "../../../API/api";

let initialState = {
    isAuth: false,
    isFetching:false,
    phrase:{},
    mood:[],
    object_list:[], 
    modificator:[],
    action:[],
    add_on:[]
}

const TagReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return { ...state, isAuth: true }
        }
        case GET_MOOD: {
            return {...state, mood:action.payload}
        }
        case GET_OBJECT_LIST: {
            return {...state, object_list: action.payload}
        }
        case GET_MODIFICATOR_LIST: {
            return {...state, modificator:action.payload}
        }
        case GET_ACTION_LIST: {
            return {...state, action:action.payload}
        }
        case GET_ADD_ON_LIST: {
            return {...state, add_on:action.payload}
        }
        case GET_PHRASE:{
            return {...state, phrase: action.payload[0]}
        }
        default:
            return state
    }
}
export default TagReducer


export const Log_in = () => {
    return ({type:LOG_IN})
    }
export const Get_Mood = (payload) => {
    return ({type:GET_MOOD, payload})
    }
export const Get_Object_List = (payload) => {
     return ({type:GET_OBJECT_LIST, payload})
    }
export const Get_Modificator_List = (payload) => {
   return ({type:GET_MODIFICATOR_LIST, payload})
    }
export const Get_Action_List = (payload) => {
   return ({type:GET_ACTION_LIST, payload})
    }
export const Get_Add_On_List = (payload) => {
   return ({type:GET_ADD_ON_LIST, payload})
    }
export const Get_Phrase=(payload)=>{
    return ({type:GET_PHRASE, payload})
}
export const Get_Mood_Async = () => async (dispatch) => {
    let response = await api.getMood()
    dispatch(Get_Mood(response))
}
export const Get_Object_List_Async = () => async (dispatch) => {
    let response = await api.getObjectList()
    dispatch(Get_Object_List(response))
}
export const Get_Modificator_List_Async = () => async (dispatch) => {
    let response = await api.getModificatorList()
    dispatch(Get_Modificator_List(response))
}
export const Get_Action_List_Async = () => async (dispatch) => {
    let response = await api.getActionList()
    dispatch(Get_Action_List(response))
}
export const Get_Add_On_List_Async = () => async (dispatch) => {
    let response = await api.getAddOnList()
    dispatch(Get_Add_On_List(response))
}

export const Get_Phrase_Async = () => async (dispatch) => {
    let response = await api.getPhrase()
    dispatch(Get_Phrase(response))
}