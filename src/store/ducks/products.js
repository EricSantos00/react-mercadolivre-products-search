import { createActions, createReducer } from "reduxsauce";
import axios from "axios";

export const { Types, Creators } = createActions({
  searchProductSuccess: ["data"],
  searchProductFail: ["error"],
  setLoadingIndicator: [],
  cleanProducts: []
});

export const searchProduct = query => {
  return dispatch => {
    dispatch(Creators.cleanProducts());
    dispatch(Creators.setLoadingIndicator());

    axios
      .get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then(res => {
        dispatch(Creators.searchProductSuccess(res.data));
      })
      .catch(err => {
        dispatch(Creators.searchProductFail(err.message));
      });
  };
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: ""
};

const searchSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, data: action.data, loading: false };
};

const searchFail = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.error, data: [], loading: false };
};

const setLoading = (state = INITIAL_STATE) => {
  return { ...state, loading: true };
};

const cleanProducts = (state = INITIAL_STATE, action) => {
  return { ...state, data: [] };
};

export default createReducer(INITIAL_STATE, {
  [Types.SEARCH_PRODUCT_SUCCESS]: searchSuccess,
  [Types.SEARCH_PRODUCT_FAIL]: searchFail,
  [Types.SET_LOADING_INDICATOR]: setLoading,
  [Types.CLEAN_PRODUCTS]: cleanProducts
});
