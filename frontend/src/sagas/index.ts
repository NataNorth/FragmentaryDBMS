import { all, takeEvery, call, put } from 'redux-saga/effects';
import { getDatabasesRoutine, getDatabaseRoutine, getTableRoutine, sortTableRoutine } from './routines';
import axios from 'axios';
import {store} from '../store';
import { Database } from '../reducers';

const apiClient = axios.create();

const BASE_URI = 'http://localhost:8080/api';

const client = axios.create({
    baseURL: BASE_URI,
    headers: {'Content-type': 'application/json'}
});

function* getDatabaseList(action: any) {
    try {
        const result =  yield call(client.get, '/db/all');
        yield put(getDatabasesRoutine.success(result.data));
     } catch (error) {
        yield put(getDatabasesRoutine.failure());
     }
}

function* getDB(action: any) {
    try {
        const result = yield call(client.get, `/db/${action.payload}`);
        yield put(getDatabaseRoutine.success(result.data));
    } catch (error) {
        yield put(getDatabaseRoutine.failure());
    }
}

function* getTable(action: any) {
    try {
        const result = yield call(client.get, `/table/${action.payload}`);
        yield put(getTableRoutine.success(result.data));
    } catch (error) {
        yield put(getTableRoutine.failure());
    }
}

function* sortTable(action: any) {
    try {
        const tableName = store.getState().database.currentTable?.name;
        const tableDto = {tableName: tableName, columnName: action.payload};
        const result = yield call(client.get, `/table/${tableName}/sort?column=${action.payload}`);
        yield put(sortTableRoutine.success(result.data));
    } catch (error) {
        console.log(error);
        yield put(sortTableRoutine.failure());
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(getDatabasesRoutine.trigger, getDatabaseList),
        yield takeEvery(getDatabaseRoutine.trigger, getDB),
        yield takeEvery(getTableRoutine.trigger, getTable),
        yield takeEvery(sortTableRoutine.trigger, sortTable)
    ])
};