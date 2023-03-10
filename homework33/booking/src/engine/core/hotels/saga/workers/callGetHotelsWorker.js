import { delay, put ,call } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { routes } from "../../../../config/routers";
import api from "../../../../config/axios";
import {setItems} from "../../slice";
import {setLoading} from "../../slice";


export function* callGetHotelsWorker(action) {
    const { payload } = action;
    const currentId = payload.destination;
    yield put(setLoading(true));
    const response = yield call (api.getHotels);
    const destinations = yield call (api.getDestination);
    const nameDestination = destinations.data.find(elem=> elem.value === currentId).label;
    if (response.status === 200) {
        const arrayHotels = response.data.filter(elem => elem.city === nameDestination)
        yield put(setItems(arrayHotels));
    }
    yield delay(2000);
    yield put(setLoading(false));
    yield put(push(routes.hotels));
}
