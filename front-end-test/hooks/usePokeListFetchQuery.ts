import { useEffect, useState } from "react";
import { ReduxActions } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/index.";
import { QueryResponseData } from "../store/slices/poke.slice";
import { useHookQuery } from "../types/global";

export interface Payload {
    offset: number;
    limit: number;
}

export function usePokeListQuery(): useHookQuery<Payload, { name: string }[]> {
    // effect
    const dispatch = useAppDispatch();
    const { data, loading, error, status } = useAppSelector(state => state.poke.pokeList);

    function fetchData(params: Payload): void {
        dispatch({ type: ReduxActions.GET_POKE_LIST, payload: params });
    }

    return [fetchData, { data, error, loading, status }];
}
