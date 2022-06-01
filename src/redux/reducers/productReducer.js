import { productActionsType } from "../action_types";
const {SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} = productActionsType;

const initialState = {
     products: []
};

export const setProductReducer = (state = initialState, {type, payload}) => {
          switch (type) {
              case SET_PRODUCTS:
                  return {...state, products:payload}
              default:
                  return state
          }
}
export const selectedProductReducer = (state = {}, {type, payload}) => {
          switch (type) {
              case SELECTED_PRODUCT:
                  return {...state, ...payload}
              case REMOVE_SELECTED_PRODUCT:
                  return {}
              default:
                  return state
          }
}