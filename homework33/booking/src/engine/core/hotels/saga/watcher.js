
import {takeEvery} from 'redux-saga/effects'
import {getHotelsAsync} from "./asyncActions";
import {callGetHotelsWorker} from "./workers/callGetHotelsWorker";
export function* hotelsWatcher() {
    yield takeEvery(getHotelsAsync.type, callGetHotelsWorker)
}