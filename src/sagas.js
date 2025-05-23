import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { FETCH_USERS_REQUEST, fetchUserSuccess, fetchUserFailure } from './actions';

/*
call - Call a function in Saga like axios.get
put - Dispatch an action
takeEvery - Run saga on every dispatched action of a specific type
*/

function* fetchUsersSaga() {
    try {
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
        yield put(fetchUserSuccess(response.data));
    } catch (e) {
        yield put(fetchUserFailure(e.message));
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}

export default rootSaga;