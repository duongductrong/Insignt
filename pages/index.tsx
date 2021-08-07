import classNames from "classnames";
import _ from "lodash";
import { useRouter } from "next/dist/client/router";
import { FC, MouseEvent as MouseEventReact, useEffect } from "react";
import { Timeline, Tween } from "react-gsap";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout/AppLayout";
import Container from "../components/Container/Container";
import Text from "../components/Text/Text";
import locomotiveScrollHelper from "../core/helpers/LocomotiveScrollHelper";
import { loadingOn } from "../core/store/reducers/loadingReducer";
import { PageLayoutI } from "../core/types/PageLayout";
export interface HomeProps {
  className?: any;
}

const Home: FC<HomeProps> = ({ className, ...props }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onNavigate = (event: MouseEventReact) => {
    const element: any = event.target;

    router.push(element?.getAttribute("aria-link"));
  };

  useEffect(() => {
    dispatch(loadingOn);
    const movingObject = _.throttle((event: MouseEvent) => {
      const centerPosition = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const object = {
        x: (centerPosition.x - event.x) / 20,
        y: (centerPosition.y - event.y) / 20,
      };

      document.body.style.setProperty("--app-mouse-x", `${object.x}px`);
      document.body.style.setProperty("--app-mouse-y", `${object.y}px`);
    }, 200);

    window.addEventListener("mousemove", movingObject);
    return () => {
      window.removeEventListener("mousemove", movingObject);
    };
  }, []);

  useEffect(() => {
    let scroll: any;

    locomotiveScrollHelper.setup().then((_scroll) => {
      scroll = _scroll;

      _scroll.on(
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

  return (
    <div
      {...props}
      data-scroll-container
      className={classNames("home-screen", className)}
    >
      <Container tag="main">
        <section className="sp-space" data-scroll data-scroll-id="appInsignt">
          <Timeline
            delay={1}
            target={
              <>
                <Text
                  tag="h1"
                  variant="big-text"
                  className="sp-space__title"
                  font="cormorant-upright"
                >
                  InSignt
                </Text>
                <Text tag="h6" variant="h6" className="sp-space__sub-title">
                  Front-End - Back-End - @2021
                </Text>
              </>
            }
          >
            <Tween from={{opacity: 0, y: "200px"}} to={{opacity: 1, y: "0"}} target={0} duration={0.8} clearProps="all" />
            <Tween from={{opacity: 0, y: "100px"}} to={{opacity: 1, y: "0"}} target={1} duration={0.5} clearProps="all" />
          </Timeline>
        </section>

        <section className="sp-work">
          <Text
            tag="h2"
            variant="h4"
            font="cormorant-upright"
            textTransform="uppercase"
            className="sp-work__title"
          >
            Projects
          </Text>

          <div className="sp-work__list">
            <div>
              <Text
                tag="h2"
                variant="big-text"
                font="cormorant-upright"
                textTransform="uppercase"
                className="sp-work__list__item"
                aria-link="/projects/casio"
                onClick={onNavigate}
              >
                Casio Watch
              </Text>
              <Text
                tag="h3"
                variant="h6"
                font="inter"
                className="sp-work__list__item"
              >
                2020
              </Text>
            </div>

            <div>
              <Text
                tag="h2"
                variant="big-text"
                font="cormorant-upright"
                textTransform="uppercase"
                className="sp-work__list__item"
                aria-link="/projects/hatangdothi"
                onClick={onNavigate}
              >
                HaTangDoThi
              </Text>
              <Text
                tag="h3"
                variant="h6"
                font="inter"
                className="sp-work__list__item"
              >
                2020
              </Text>
            </div>

            <div>
              <Text
                tag="h2"
                variant="big-text"
                font="cormorant-upright"
                textTransform="uppercase"
                className="sp-work__list__item"
                aria-link="/projects/codestus"
                onClick={onNavigate}
              >
                Codestus
              </Text>
              <Text
                tag="h3"
                variant="h6"
                font="inter"
                className="sp-work__list__item"
              >
                2021
              </Text>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

(Home as PageLayoutI).Layout = AppLayout;

export default Home;
