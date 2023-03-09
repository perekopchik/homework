import { delay, put ,call } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { routes } from "../../../../config/routers";
import api from "../../../../config/axios";
import {setItems} from "../../slice";
import {setLoading} from "../../slice";


export function* callGetHotelsWorker(action) {
    const { payload } = action;
    console.log(payload.destination)
    yield put(setLoading(true));
    const response = yield call (api.getHotels);
    if (response.status === 200) {
        yield put(setItems(response.data));
        console.log(payload)
    }
    yield delay(2000);
    yield put(setLoading(false));
    yield put(push(routes.hotels));
}
