import { ReduxActions } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/index.";
import { QueryResponseData } from "../store/slices/poke.slice";
import { useHookQuery } from "../types/global";

export interface Payload {
    name: string;
}

export function usePokeInfoQuery(): useHookQuery<Payload, QueryResponseData> {
    const dispatch = useAppDispatch();
    const { data, loading, error, status } = useAppSelector(
        state => state.poke.pokeInformation
    );

    function fetchData(params: Payload): void {
        dispatch({ type: ReduxActions.GET_POKE_INFO, payload: params });
    }

    return [fetchData, { data, error, loading, status }];
}
