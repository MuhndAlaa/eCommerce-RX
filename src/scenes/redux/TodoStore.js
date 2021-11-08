import { createStore } from "redux";


//Action
export function addTaskAction(payload){
    return{
        type:"ADD_TASK",
        payload
    }
}

export function removeTaskAction(payload){
    return{
        type:"DELETE_TASK",
        payload
    }
}


//State
const initialState = {
    tasks:[]
}


//Reducer
function reducer(state = initialState , action){
    switch (action.type) {
        case "ADD_TASK":
            return {...state , tasks : [...state.tasks , action.payload]}
        case "DELETE_TASK":
            return {...state , tasks : state.tasks.filter((elem)=>{return action.payload !== elem.todoTitle})}
        default:
            return state;
    }
}


//Store
export const store = createStore(reducer)