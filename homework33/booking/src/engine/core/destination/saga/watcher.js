
import {takeEvery} from 'redux-saga/effects'
import {getDestinationAsync} from "./asyncActions";
import {callGetDestinationWorker} from "./workers/callGetDestinationWorker";
export function* destinationWatcher() {
    yield takeEvery(getDestinationAsync.type, callGetDestinationWorker)
}