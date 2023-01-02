import "../styles/main.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/index.";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);

    return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}
