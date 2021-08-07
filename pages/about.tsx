import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { Timeline, Tween } from "react-gsap";
import Container from "../components/Container/Container";
import Pathline from "../components/Pathline/Pathline";
import PathlineItem from "../components/Pathline/PathlineItem";
import Text from "../components/Text/Text";
import locomotiveScrollHelper from "../core/helpers/LocomotiveScrollHelper";

export interface AboutProps {}

const About: FC<AboutProps> = ({ ...props }) => {
  useEffect(() => {
    let scroll: any;
    locomotiveScrollHelper.setup().then((_scroll) => {
      scroll = _scroll;
    });

    return () => scroll.destroy();
  }, []);

  return (
    <Container tag="div" data-scroll-container className="about-screen">
      <section data-scroll className="about-me">
        <Timeline
          delay={1}
          target={
            <>
              <Text
                tag="h1"
                variant="big-text"
                textTransform="uppercase"
                font="cormorant-upright"
              >
                About
              </Text>

              <Text
                tag="h2"
                variant="h6"
                fontWeight="normal"
                className="text-content"
              >
                Hi, I'm Trong. <br /> <br />
                The present, I'm a Frontend Developer at RIO Technology Company,
                MasOffer is a one product of us company that I take on the task
                of developing the user interface and feature. You can get more
                information at fin.masoffer.com
              </Text>

              <Text
                tag="h2"
                variant="h6"
                fontWeight="bold"
                textTransform="uppercase"
                className="text-content"
              >
                Contact me:{" "}
                <Text
                  tag="a"
                  href="mailto:duongductrong06@gmail.com"
                  variant="h6"
                  fontWeight="normal"
                  textTransform="lowercase"
                >
                  duongductrong06@gmail.com
                </Text>
              </Text>
            </>
          }
        >
          <Tween
            from={{ opacity: 0, y: "150px" }}
            to={{ opacity: 1, y: "0" }}
            target={0}
            duration={0.8}
            clearProps="all"
          />
          <Tween
            from={{ opacity: 0, y: "150px" }}
            to={{ opacity: 1, y: "0" }}
            target={1}
            duration={0.5}
            clearProps="all"
          />
          <Tween
            from={{ opacity: 0, y: "150px" }}
            to={{ opacity: 1, y: "0" }}
            target={2}
            duration={0.5}
            clearProps="all"
          />
        </Timeline>
      </section>

      <section data-scroll className="information">
        <Tween delay={3} from={{opacity: 0}} to={{opacity: 1}}>
          <Text
            tag="h2"
            variant="h1"
            textTransform="capitalize"
            font="cormorant-upright"
          >
            EXPERIENCES
          </Text>
        </Tween>

        <Pathline>
          <Timeline
            delay={3}
            target={
              <>
                <PathlineItem milestones="04/2021 - Now">
                  <Text tag="p" variant="h6" fontWeight="bold">
                    RIO TECHNOLOGY
                  </Text>
                  <Text tag="p" variant="normal" fontWeight="normal">
                    Here, I am a Front-end developer. My main job is to develop,
                    upgrade and maintain the user interface. <br /> In addition,
                    also took on a number of roles developing server-side
                    features and APIs for the company's products.
                  </Text>
                </PathlineItem>

                <PathlineItem milestones="05/2020 - 04/2021">
                  <Text tag="p" variant="h6" fontWeight="bold">
                    ANFLASH TECHNOLOGY
                  </Text>
                  <Text tag="p" variant="normal" fontWeight="normal">
                    At the Anflash Technology, I'm a front-end and back-end
                    developer. <br /> I have responsibility development products
                    for us customer's{" "}
                  </Text>
                </PathlineItem>
              </>
            }
          >
            <Tween
              from={{ opacity: 0, x: "100px" }}
              to={{ opacity: 1, x: "0" }}
              target={0}
            />
            <Tween
              from={{ opacity: 0, x: "100px" }}
              to={{ opacity: 1, x: "0" }}
              target={1}
            />
          </Timeline>
        </Pathline>
      </section>
    </Container>
  );
};

export default About;
