import Axios from "axios";

export interface FetcherParams<T = any> {
    path: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: T;
}

export async function fetcher<T = any>({ path, method = "GET", data }: FetcherParams<T>) {
    // setup axios instance
    return await Axios({
        url: `https://pokeapi.co/api/v2${path}`,
        method,
        data,
    });
}
