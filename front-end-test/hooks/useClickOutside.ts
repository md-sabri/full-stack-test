import React, { useEffect, useRef } from "react";

export interface RefProps {
    contains?: any;
}

export function useClickOutside<T extends RefProps>(handler: () => void) {
    let domNodeRef = useRef() as React.MutableRefObject<T>;

    useEffect(() => {
        const clickFunction = (e: any) => {
            if (
                domNodeRef &&
                domNodeRef.current &&
                !domNodeRef.current.contains(e.target) &&
                handler
            ) {
                // call the function
                handler();
            }
        };

        document.addEventListener("mousedown", clickFunction);

        return () => document.removeEventListener("mousedown", clickFunction);
    });

    // return ref dom
    return domNodeRef;
}
