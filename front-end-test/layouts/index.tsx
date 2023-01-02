import { NextPage } from "next";
import React, { ReactElement } from "react";
import { AppBody } from "./Body";
import { AppFooter } from "./Footer";
import { AppHeader } from "./Header";

export interface AppLayoutProps {
    children: React.ReactElement;
}

export const AppLayout = (props: AppLayoutProps) => {
    return (
        <div>
            <AppHeader />
            <AppBody>{props.children}</AppBody>
            <AppFooter />
        </div>
    );
};

export function withLayout(Page: ReactElement) {
    return Object.defineProperty(Page, "getLayout", {
        value: function (Component: ReactElement) {
            return <AppLayout>{Component}</AppLayout>;
        },
    });
}
