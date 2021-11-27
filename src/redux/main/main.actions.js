import { ADD_PRODUCT, SET_PRODUCTS, SET_SORTTYPE } from "./main.types";
import api from '../../api';

const setProducts = value => ({type: SET_PRODUCTS, value});

const setSortType = value => ({type: SET_SORTTYPE, value});

const setProductsThunk = () => async (dispatch) => {
    let data = await api.getProducts();
    dispatch(setProducts(data));
}

const addProductThunk = (obj) => async (dispatch) => {
    await api.addProduct(obj);
    dispatch(setProductsThunk());
}

const removeProductThunk = (id) => async (dispatch) => {
    await api.removeProduct(id);
    dispatch(setProductsThunk());
}

export {
    addProductThunk,
    setProductsThunk,
    setSortType,
    removeProductThunk
}