export type useHookQuery<T = any, D = any> = [
    (params: T) => void,
    { data: D; loading: boolean; error: null; status: any }
];
