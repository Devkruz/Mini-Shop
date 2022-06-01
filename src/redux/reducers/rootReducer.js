import { combineReducers } from "redux";
import { setProductReducer, selectedProductReducer } from "./productReducer";


 const reducer = combineReducers({
     allProducts: setProductReducer,
     product: selectedProductReducer
});


export default reducer;