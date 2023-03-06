import {setItem} from "../slice";
export const getItems = (text) => {
    return(dispatch) =>{
    dispatch(setItem([{id:1, text: text}]))
    }
}