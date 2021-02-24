import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
//export const fetchProducts = products => {
//  return dispatch => {
//    dispatch(fetchProductsSuccess(products));
//  };
//};

export const fetchProducts = products => {
  return dispatch => {
    axios.get("http://localhost:5000/products")
    .then(({data}) => { 
      dispatch(fetchProductsSuccess(data));
    });
};
}
