import { PRODUCT_CONSTANTS_FAIL, PRODUCT_CONSTANTS_REQUEST, PRODUCT_CONSTANTS_SUCCESS } from "../constants/constants";

export const productReducer = (
    state = {loading: true, products: []},
    action
) => {
    switch(action.type){ 
        case PRODUCT_CONSTANTS_REQUEST:  
            return {loading: true};
        case PRODUCT_CONSTANTS_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_CONSTANTS_FAIL: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}