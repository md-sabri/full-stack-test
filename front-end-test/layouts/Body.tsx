import React from "react";

export interface AppBodyProps {
    children: React.ReactElement;
}

export const AppBody: React.FC<AppBodyProps> = props => {
    return <main role="main">{props.children}</main>;
};

AppBody.displayName = "PokeAppBody";
