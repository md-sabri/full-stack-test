import { useState } from "react";

export function useLoadMore(fetcher: (params: any) => void) {
    const [data, setData] = useState([]);
}
