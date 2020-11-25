import {getDatabaseRoutine, getDatabasesRoutine, getTableRoutine, sortTableRoutine} from '../sagas/routines'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {combineReducers} from 'redux';

export interface IDatabaseState {
    dbs?: Database[];
    currentDB?: Database;
    currentTable?: Table;
    isLoading: boolean;
}

export interface Database {
    name: string;
    tables?: Table[];
}

export interface Table {
    name: string;
    columns: Column[];
    rows: Row[];
}

export interface Column {
    name: string;
    type: string;
}

export interface Row {
    cells: Cell[]
}

export interface Cell {
    data: string;
}

const initialState = {
    isLoading: false
};

const databaseReducer = (state: IDatabaseState = initialState, action: any) => {
    switch(action.type) {
        case getDatabasesRoutine.TRIGGER:
        case getDatabaseRoutine.TRIGGER:
        case getTableRoutine.TRIGGER:
        case sortTableRoutine.TRIGGER:
            return { 
                ...state,
                isLoading: true
            };
        case getDatabasesRoutine.FAILURE:
        case getDatabaseRoutine.FAILURE:
        case getTableRoutine.FAILURE:
        case sortTableRoutine.FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case getDatabasesRoutine.SUCCESS:
            return {
                ...state,
                isLoading: false,
                dbs: action.payload
            };
        case getDatabaseRoutine.SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentDB: action.payload
            }
        case getTableRoutine.SUCCESS:
        case sortTableRoutine.SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentTable: action.payload
            }
        default:
            return state;
    }
}

const reducers = {
    database: databaseReducer,
    toastr: toastrReducer
}

export interface IAppState {
    database: IDatabaseState,
    toastr: any
}

export default combineReducers(reducers);