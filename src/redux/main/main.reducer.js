import { ADD_PRODUCT, SET_PRODUCTS, SET_SORTTYPE } from "./main.types";
import {ALPHABET} from '../../const/sorts';

const initialState = {
    productList: [],
    sortType: ALPHABET
}

const Main = (state = initialState, action = {}) => {
    switch(action.type){
        case ADD_PRODUCT: {

            let {name, image, count, width, height, weight} = action.value;

            return {
                ...state,
                productList: [...state.productList, {
                    id: state.productList.length + 1,
                    name: name,
                    imageUrl: image,
                    count: count,
                    size: {
                        width, height
                    },
                    weight: weight,
                    comments: []
                }]
            }
        }
        case SET_PRODUCTS: {
            return {
                ...state,
                productList: action.value
            }
        }
        case SET_SORTTYPE: {
            return {
                ...state,
                sortType: action.value
            }
        }
        default: return state;
    }
}

export default Main;