import { PRODUCT_CONSTANTS_FAIL, PRODUCT_CONSTANTS_REQUEST, PRODUCT_CONSTANTS_SUCCESS } from "../constants/constants"

export const productList = (username,password) => async (dispatch) => {
    dispatch({
        type: PRODUCT_CONSTANTS_REQUEST, 
    });
 
    try {
        const {data} = await axios("/",{username,password});
        dispatch({
            type: PRODUCT_CONSTANTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message : error.message;
        dispatch({
            type: PRODUCT_CONSTANTS_FAIL,
            payload: message
        });
    }
}