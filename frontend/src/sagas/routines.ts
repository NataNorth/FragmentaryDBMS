import { createRoutine } from 'redux-saga-routines';

export const AddTextRoutine = createRoutine('ADD_TEXT');
export const getDatabasesRoutine = createRoutine('GET_DBS');
export const getDatabaseRoutine = createRoutine('GET_DB');
export const getTableRoutine = createRoutine('GET_TABLE');
export const sortTableRoutine = createRoutine('SORT_TABLE');

export const CheckPlagRoutine = createRoutine('CHECK_PLAG');