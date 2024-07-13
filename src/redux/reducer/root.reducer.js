import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product.reducer";
import { categoryReducer } from "./category.reducer";

export const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer
})