import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import React, { FC, MouseEvent, useEffect } from "react";
import { Timeline, Tween } from "react-gsap";
import Text from "../../components/Text/Text";
import locomotiveScrollHelper from "../../core/helpers/LocomotiveScrollHelper";
import { projects, ProjectType } from "../api/data";

interface ProjectListScreenProps {
  projects: ProjectType[]
}

const ProjectListScreen: FC<ProjectListScreenProps> = ({ projects, ...props }) => {
  const router = useRouter();

  const onNavigate = (event: MouseEvent) => {
    router.push((event.target as any).getAttribute("aria-link"));
  };

  useEffect(() => {
    let scroll: any;
    locomotiveScrollHelper.setup().then((_scroll) => {
      scroll = _scroll;
    });

    return () => scroll.destroy();
  }, []);

  return (
    <section className="sp-work" data-scroll-container>
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
        <Timeline
          delay={1}
          target={
            <>
              {projects.map((project) => (
                <div key={project.key}>
                  <Text
                    tag="h2"
                    variant="big-text"
                    font="cormorant-upright"
                    textTransform="uppercase"
                    className="sp-work__list__item"
                    aria-link={`/projects/${project.key}`}
                    onClick={onNavigate}
                  >
                    {project.title}
                  </Text>
                  <Text
                    tag="h3"
                    variant="h6"
                    font="inter"
                    className="sp-work__list__item"
                  >
                    {project.date}
                  </Text>
                </div>
              ))}
            </>
          }
        >
          {projects.map((_, i) => (
            <Tween key={i} from={{opacity: 0, x: "80px"}} to={{opacity: 1, x: "0"}} duration={0.5} target={i} />
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export const getStaticProps : GetStaticProps = async (ctx : GetStaticPropsContext) => {
  return {
    props: {
      projects: projects
    },
    notFound: false
  }
}

export default ProjectListScreen;
