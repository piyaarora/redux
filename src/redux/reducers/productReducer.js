import { ActionTypes } from "../constants/actionTypes"
const initialState = {
    products:[],
}

export const productReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return {...state, products:payload};
        case ActionTypes.FETCH_PRODUCT:
            return {...state, products:payload};
        
        default:
            return state;
    }
} 


export const selectedProductReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}; 
        
        default:
            return state;
    }
} 