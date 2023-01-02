import { call, takeEvery, put } from "redux-saga/effects";
import { fetcher } from "../utils/fetcher";
import { fetchPokeInfo, fetchPokeList } from "./slices/poke.slice";
import { ReduxActions } from "./actions";
import queryString from "query-string";

export function* getPokeList({ payload }: any): any {
    // start request with loading = true
    yield put(fetchPokeList({ data: null, error: null, loading: true }));
    try {
        // if the request resolved set data & update loading value to false
        let result = yield call(() =>
            fetcher({ path: `/pokemon?${queryString.stringify(payload)}` })
        );
        yield put(
            fetchPokeList({
                data: result.data.results,
                error: null,
                loading: false,
                status: result.status,
            })
        );
    } catch (e: any) {
        // if something went wrong update loading with false & set error message
        yield put(
            fetchPokeList({
                data: null,
                error: e.message,
                loading: false,
                status: e.response.status,
            })
        );
    }
}

export function* getPokeInfo({ payload: { name } }: any): any {
    // start request with loading = true
    yield put(fetchPokeInfo({ data: null, error: null, loading: true }));
    try {
        // if the request resolved set data & update loading value to false
        let result = yield call(() => fetcher({ path: `/pokemon/${name}` }));
        yield put(
            fetchPokeInfo({
                data: result.data,
                error: null,
                loading: false,
                status: result.status,
            })
        );
    } catch (e: any) {
        // if something went wrong update loading with false & set error message
        yield put(
            fetchPokeInfo({
                data: null,
                error: e.message,
                loading: false,
                status: e.response.status,
            })
        );
    }
}

export default function* rootSaga() {
    yield takeEvery(ReduxActions.GET_POKE_LIST, getPokeList);
    yield takeEvery(ReduxActions.GET_POKE_INFO, getPokeInfo);
}
