import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers/rootReducer";


const configStore = {
    reducer,
    preloadedState : {},
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

}
const store = configureStore(configStore);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// {reducer, preloadedState:{}}
export default store;
