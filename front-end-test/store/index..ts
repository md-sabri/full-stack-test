import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { pokeReducer } from "./slices/poke.slice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        poke: pokeReducer,
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(saga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
