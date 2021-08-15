import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import { Timeline, Tween } from "react-gsap";
import Container from "../../components/Container/Container";
import Text from "../../components/Text/Text";
import locomotiveScrollHelper from "../../core/helpers/LocomotiveScrollHelper";
import { projects } from "../api/data";

import "../../public/assets/statics/casio-anhkhue-com.png";
import "../../public/assets/statics/codestus-com.png";
import "../../public/assets/statics/gambox-desktop.jpg";
import "../../public/assets/statics/htdt.jpg";
import classNames from "classnames";
import mouseHelper from "../../core/helpers/MouseHelper";
export interface ProjectScreenProps {
  project: {
    key: string;
    image?: any;
    title: string;
    position: string;
  };
}

const ProjectScreen: FC<ProjectScreenProps> = ({ project, ...props }) => {
  useEffect(() => {
    let scroll: any;
    locomotiveScrollHelper.setup().then((_scroll) => {
      scroll = _scroll;
    });

    return () => scroll.destroy();
  }, []);

  return (
    <Container data-scroll-container className="project-screen">
      <Timeline
        delay={1}
        target={
          <>
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

            <div>
              {project?.image && (
                <Image
                  className={classNames(
                    "project-screen__image",
                    mouseHelper.addTargetTrigger(true)
                  )}
                  src={project?.image ?? ""}
                  alt="Image"
                />
              )}
            </div>
          </>
        }
      >
        <Tween
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          duration={0.8}
          target={0}
        />
        <Tween
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          duration={0.5}
          target={1}
        />
        <Tween
          from={{ opacity: 0, scale: 0.5 }}
          to={{ opacity: 1, scale: 1 }}
          duration={0.5}
          target={2}
        />
      </Timeline>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const slug = (ctx.params as { slug?: string }).slug;
  const project = projects.find((proj) => proj.key === slug);

  return {
    props: {
      project: project,
    },
    notFound: !project,
  };
};

export default ProjectScreen;
