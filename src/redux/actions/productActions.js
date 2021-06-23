import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/actionTypes"

export const fetchProducts = () => async(dispatch) => {
    // helps us for async api call for action creator
        const response = await fakeStoreApi.get('/products');
        dispatch({
            type: ActionTypes.SET_PRODUCT,
            payload: response.data
        })
    };


export const fetchProduct = (id) => async(dispatch) => {
    // helps us for async api call for action creator
        const response = await fakeStoreApi.get(`/products/${id}`);
        dispatch({
            type: ActionTypes.SELECTED_PRODUCT,
            payload: response.data
        })
    };

export const setProducts = (products) =>{
    return{
        type : ActionTypes.SET_PRODUCT,
        payload:products,
    }
};

export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
} 


export const removeSelectedProduct = () =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    
    }
} 