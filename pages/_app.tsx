import _ from "lodash";
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
        lerp: 0.05,
      });

      scroll.on(
        "scroll",
        _.throttle(({ ...props }) => {
          let ratio = Math.ceil(props.scroll.y / 50);

          if (ratio > 3) {
            return;
          }

          document.body.style.setProperty(
            "--app-scale",
            `${ratio > 0 ? ratio : 1}`
          );
        }, 200)
      );
    });

    return () => scroll.destroy();
  }, []);

  useEffect(() => {
    const movingObject = _.throttle((event: MouseEvent) => {
      const object = {
        x: event.x,
        y: event.y,
      };

      document.body.style.setProperty("--app-mouse-moving-x", `${object.x - (60/2)}px`);
      document.body.style.setProperty("--app-mouse-moving-y", `${object.y - (60/2)}px`);
    }, 50);

    window.addEventListener("mousemove", movingObject);
    return () => {
      window.removeEventListener("mousemove", movingObject);
    };
  }, []);

  return (
    <Fragment>
      <Noise />
      <div className="mouse"></div>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
      <Loading />
    </Fragment>
  );
}
export default MyApp;
