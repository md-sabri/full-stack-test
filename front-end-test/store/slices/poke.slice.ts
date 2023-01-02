import { createSlice } from "@reduxjs/toolkit";

export interface QueryResponseData {
    abilities: any[];
    base_experience: number;
    forms: { name: string; url: string }[];
    height: number;
    held_items: any[];
    id: number;
    moves: { move: { name: string } }[];
    name: string;
    stats: { base_stat: number; effort: number }[];
    weight: number;
}

export interface initialStateProps {
    pokeList: {
        data: null | { name: string }[];
        error: null | string;
        loading: boolean;
        status: null | number;
    };
    pokeInformation: {
        data: null | QueryResponseData;
        error: null;
        loading: false;
        status: null;
    };
}

const initialState: initialStateProps = {
    pokeList: {
        data: null,
        error: null,
        loading: false,
        status: null,
    },
    pokeInformation: {
        data: null,
        error: null,
        loading: false,
        status: null,
    },
};

export const pokeSlice = createSlice({
    name: "poke",
    initialState,
    reducers: {
        fetchPokeList(actions, state) {
            return {
                pokeList: {
                    ...state.payload,
                },
                pokeInformation: {
                    ...actions.pokeInformation,
                },
            };
        },
        fetchPokeInfo(actions, state) {
            return {
                pokeInformation: {
                    ...state.payload,
                },
                pokeList: {
                    ...actions.pokeList,
                },
            };
        },
    },
});

export const { fetchPokeList, fetchPokeInfo } = pokeSlice.actions;

export const pokeReducer = pokeSlice.reducer;
