import _ from "lodash";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import AppLayout from "../components/AppLayout/AppLayout";
import Loading from "../components/Loading/Loading";
import Noise from "../components/Noise/Noise";
import mouseHelper from "../core/helpers/MouseHelper";
import store from "../core/store";
import { loadingOff, loadingOn } from "../core/store/reducers/loadingReducer";
import { PageLayoutI } from "../core/types/PageLayout";
import "../styles/app.scss";

type Props = AppProps & {
  Component: PageLayoutI;
};

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter();
  const mouseRef = useRef(null);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const MyLayout = Component.Layout || AppLayout;

  // dark mode open or not
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const movingFunc = _.throttle((event: MouseEvent) => {
      const elementTarget = (event.target as HTMLElement);
      const object = {
        x: event.x,
        y: event.y,
      };

      const mouse = (mouseRef.current as HTMLElement | null);
      mouseHelper.shouldTarget(mouse, elementTarget);

      document.body.style.setProperty("--app-mouse-moving-x", `${object.x - 60 / 2}px`);
      document.body.style.setProperty("--app-mouse-moving-y", `${object.y - 60 / 2}px`);
    }, 50);

    window.addEventListener("mousemove", movingFunc);
    return () => {
      window.removeEventListener("mousemove", movingFunc);
    };
  }, []);

  // listeners change route
  useEffect(() => {
    store.dispatch(loadingOn());

    setTimeout(() => {
      store.dispatch(loadingOff());
    }, 1000);
  }, [router.asPath]);

  return (
    <Fragment>
      <Noise />
      <div ref={mouseRef} className="mouse"></div>
      <Provider store={store}>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
        <Loading />
      </Provider>
    </Fragment>
  );
}
export default MyApp;
