import { productActionsType } from "../action_types";

export const setProducts = (products) => {
       const {SET_PRODUCTS} = productActionsType;

       return {
            type: SET_PRODUCTS,
            payload: products
       }
}

export const selectedProduct = (product) => {
       const {SELECTED_PRODUCT} = productActionsType;
       return {
            type: SELECTED_PRODUCT,
            payload: product
       }
}

export const removeSelectedProduct = () => {
       const {REMOVE_SELECTED_PRODUCT} = productActionsType;
       return {
            type: REMOVE_SELECTED_PRODUCT  
       }
}