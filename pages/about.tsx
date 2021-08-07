import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import Container from "../components/Container/Container";
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
    <Container data-scroll-container className="about-screen">
      <Text
        tag="h1"
        variant="big-text"
        textTransform="uppercase"
        font="cormorant-upright"
      >
        About
      </Text>

      <Text tag="h2" variant="h6" fontWeight="normal" className="text-content">
        Hi, I'm Trong. <br /> <br />
        The present, I'm a Frontend Developer at RIO Technology Company,
        MasOffer is a one product of us company that I take on the task of
        developing the user interface and feature. You can get more information
        at fin.masoffer.com
      </Text>

      <Text
        tag="h2"
        variant="h6"
        fontWeight="bold"
        textTransform="uppercase"
        className="text-content"
      >
        🚦 Contact me:{" "}
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
    </Container>
  );
};

export default About;
