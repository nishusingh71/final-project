import { put, takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY_START, GET_CATEGORY_START } from "../constant/category.constant";
import { addCategoryError, getCategoryError, getCategorySuccess } from "../action/category.action";
import { addCategoryToAPI, getCategoryFromAPI } from "../service/category.service";

function* getCategory() {
    try {
       let result =  yield getCategoryFromAPI();
       yield put(getCategorySuccess(result))
    } catch (error) {
        yield put(getCategoryError(error.message))
    }
}

function* addCategory({payload}) {
    try {
        yield addCategoryToAPI(payload)
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}

export default function* category() {
    yield takeLatest(GET_CATEGORY_START, getCategory);
    yield takeLatest(ADD_CATEGORY_START, addCategory);
}