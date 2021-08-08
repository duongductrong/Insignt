import { useRouter } from "next/dist/client/router";
import React, { FC, useEffect } from "react";
import Container from "../../components/Container/Container";
import Image from "next/image";
import Text from "../../components/Text/Text";
import locomotiveScrollHelper from "../../core/helpers/LocomotiveScrollHelper";

import casioWatchPng from "../../public/assets/statics/casio-anhkhue-com.png";
import codestusPng from "../../public/assets/statics/codestus-com.png";
import hatangdothiPng from "../../public/assets/statics/codestus-com.png";
import rechicGamboxPng from "../../public/assets/statics/gambox-desktop.jpg";

const projects = [
  {
    key: "casio",
    image: casioWatchPng,
    title: "Casio watch",
    position: "Front-End & Back-End Development - 2020",
  },
  {
    key: "hatangdothi",
    image: hatangdothiPng,
    title: "HaTangDoThi",
    position: "Front-End Development - 2020",
  },
  {
    key: "codestus",
    image: codestusPng,
    title: "Codestus",
    position: "Front-End & Back-End Development - 2021",
  },
  {
    key: "rechic",
    image: rechicGamboxPng,
    title: "Rechic - Gambox",
    position: "Front-End & Back-End Development - 2021",
  },
];

export interface ProjectScreenProps {}

const ProjectScreen: FC<ProjectScreenProps> = ({ ...props }) => {
  const router = useRouter();
  const slug = router.query.slug;

  const project = projects.find((prj) => prj.key === slug);

  useEffect(() => {
    let scroll: any;
    locomotiveScrollHelper.setup().then((_scroll) => {
      scroll = _scroll;
    });

    return () => scroll.destroy();
  }, []);

  return (
    <Container data-scroll-container className="project-screen">
      <Text
        className="project-screen__title"
        tag="h1"
        variant="big-text"
        fontWeight="bold"
        textTransform="uppercase"
        font="cormorant-upright"
      >
        {project?.title}
      </Text>

      <div className="project-screen__information">
        <Text
          tag="h2"
          variant="h6"
          fontWeight="normal"
          textTransform="uppercase"
        >
          {project?.position}
        </Text>
      </div>
      <Image
        className="project-screen__image"
        src={project?.image ?? codestusPng}
        alt="Image"
      />
    </Container>
  );
};

export default ProjectScreen;
