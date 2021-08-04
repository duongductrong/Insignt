import type { AppProps } from "next/app";
import { Head } from "next/document";
import { Fragment, useEffect, useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Loading from "../components/Loading/Loading";
import Noise from "../components/Noise/Noise";
import { PageLayoutI } from "../core/types/PageLayout";
import "../styles/app.scss";

type Props = AppProps & {
  Component: PageLayoutI;
};

function MyApp({ Component, pageProps }: Props) {
  const [isDarkTheme, setDarkTheme] = useState<any>(false);
  const MyLayout = Component.Layout || AppLayout;

  // dark mode open or not
  useEffect(() => {
    isDarkTheme && document.body.classList.add("dark");
  }, []);

  useEffect(() => {
    let scroll: any;
    import("locomotive-scroll").then((locomotive) => {
      scroll = new locomotive.default({
        el: document.querySelector("#app") as Element,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    return () => scroll.destroy();
  }, []);

  return (
    <Fragment>
      <Noise />
      <MyLayout id="app">
        <Component {...pageProps} />
      </MyLayout>

      <Loading />
    </Fragment>
  );
}
export default MyApp;
