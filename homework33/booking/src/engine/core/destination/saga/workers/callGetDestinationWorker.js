import {call,put,delay} from 'redux-saga/effects'

import {setItems,setLoading} from "../../slice";
import api from "../../../../config/axios";
export function* callGetDestinationWorker() {
    yield put(setLoading(true));
    const response = yield call(api.getDestination);
    if (response.status === 200) {
        yield put(setItems(response.data));
    }
    yield delay(2000);
    yield put(setLoading(false));
}