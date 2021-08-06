import classNames from "classnames";
import _ from "lodash";
import { FC, useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Text from "../components/Text/Text";
import { PageLayoutI } from "../core/types/PageLayout";
export interface HomeProps {
  className?: any;
}

const Home: FC<HomeProps> = ({ className, ...props }) => {
  useEffect(() => {
    const movingObject = _.throttle((event: MouseEvent) => {
      const object = {
        x: event.x / 20,
        y: event.y / 20,
      };

      document.body.style.setProperty("--app-mouse-x", `${object.x}px`);
      document.body.style.setProperty("--app-mouse-y", `${object.y}px`);
    }, 200);

    window.addEventListener("mousemove", movingObject);
    return () => {
      window.removeEventListener("mousemove", movingObject);
    };
  }, []);

  return (
    <div {...props} className={classNames("home-screen", className)}>
      <section className="sp-space" data-scroll data-scroll-id="appInsignt">
        <Text tag="h1" variant="big-text" className="sp-space__title">
          InSignt
        </Text>
        <Text tag="h6" variant="h6" className="sp-space__sub-title">
          Web Development & Front-End - @2021{" "}
        </Text>
      </section>

      <section style={{ height: "100vh" }}></section>
    </div>
  );
};

(Home as PageLayoutI).Layout = AppLayout;

export default Home;
