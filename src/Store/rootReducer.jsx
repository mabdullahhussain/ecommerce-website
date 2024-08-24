import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const rootReducer = combineReducers({
    cartStore : cartReducer

})

export default rootReducer