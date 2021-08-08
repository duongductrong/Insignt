import { useRouter } from "next/dist/client/router";
import React, { FC, useEffect } from "react";
import Container from "../../components/Container/Container";
import Image from "next/image";
import Text from "../../components/Text/Text";
import locomotiveScrollHelper from "../../core/helpers/LocomotiveScrollHelper";

import { Timeline, Tween } from "react-gsap";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ProjectType } from "../api/projects";

import "../../public/assets/statics/casio-anhkhue-com.png";
import "../../public/assets/statics/codestus-com.png";
import "../../public/assets/statics/htdt.jpg";
import "../../public/assets/statics/gambox-desktop.jpg";

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
                  className="project-screen__image"
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

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {

  const slug = (ctx.params as { slug?: string }).slug;
  const project  = await (await fetch(`${process.env.HOSTNAME}/api/projects?slug=${slug}`)).json();

  return {
    props: {
      project: project.data,
    },
    notFound: !project
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await fetch(`${process.env.HOSTNAME}/api/projects`, {
    method: "GET"
  });

  const projects = (await res.json()).data;

  const paths = projects.map((proj : ProjectType) => ({
    params: {
      slug: proj.key,
    },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default ProjectScreen;
