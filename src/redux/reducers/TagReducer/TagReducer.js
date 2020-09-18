import {POST_COUNTER, GET_DATA } from "./constants";
import data from '../../../data.json'

let initialState = {
    phrase: "",
    checkboxes: [],
    channel: [],
    object_list: [],
    negative_modificator: [],
    modificator: [],
    action: [],
    add_on: [],
    comment: [],
    counter: 0,
    isAuth: false
}

const TagReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_COUNTER: {
            return { ...state, counter: state.counter + 1 }
        }
        case GET_DATA: {
            return {
                ...state,
                checkboxes: action.payload.catalog.entities[0].fields.filter(x => x.type.name === "bool"),
                channel: action.payload.catalog.entities[0].fields.filter(x => x.name === "\u041a\u0430\u043d\u0430\u043b"),
                object_list: action.payload.catalog.entities[0].fields.filter(x => x.name === "\u041e\u0431\u044a\u0435\u043a\u0442"),
                negative_modificator: action.payload.catalog.entities[0].fields.filter(x => x.name === "\u041c\u043e\u0434\u0438\u0444. \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435"),
                modificator: action.payload.catalog.entities[0].fields.filter(x => x.name === "\u041c\u043e\u0434\u0438\u0444. \u0423\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435"),
                action: action.payload.catalog.entities[0].fields.filter(x => x.name === "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 (\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0435)"),
                add_on: action.payload.catalog.entities[0].fields.filter(x => x.name === "\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"),
                phrase: action.payload.phrase
            }
        }

        default:
            return state
    }
}
export default TagReducer

//action creator

export const Post_Counter = () => {
    return ({ type: POST_COUNTER })
}
export const Get_Data = (payload) => {
    return ({ type: GET_DATA, payload })
}


//thunk

export const Get_Data_Async = () => dispatch => {
    const getTask = new Promise(resolve => {
        setTimeout(() => resolve({ catalog: data, phrase: "тексттекст" }), 1000)
    })

    getTask.then(data => {
        dispatch(Get_Data(data))
    })
}

export const Post_Data = (data) => () => {
    new Promise(resolve => {
        setTimeout(()=>resolve(setResult(data), 1000))
    })
}
export const setResult=(data)=>{
    console.log(data);
}