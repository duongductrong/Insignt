import { Fragment } from "react";
import type { AppProps } from "next/app";
import "../styles/globalStyles.scss";
import Noise from "../components/Noise/Noise";
import { PageLayoutI } from "../core/types/PageLayout";
import AppLayout from "../components/AppLayout/AppLayout";

type Props = AppProps & {
  Component: PageLayoutI
}

function MyApp({ Component, pageProps }: Props) {
  const MyLayout = Component.Layout || AppLayout;
  
  return (
    <Fragment>
      <Noise />
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </Fragment>
  );
}
export default MyApp;
