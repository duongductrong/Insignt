import { useRouter } from "next/dist/client/router";
import React, { FC, MouseEvent, useEffect } from "react";
import Text from "../../components/Text/Text";
import locomotiveScrollHelper from "../../core/helpers/LocomotiveScrollHelper";

interface ProjectListScreenProps {}

const ProjectListScreen: FC<ProjectListScreenProps> = ({ ...props }) => {
  const projects = [
    {
      key: 0,
      name: "Casio Watch",
      link: "/projects/casio",
      date: "2020",
    },
    {
      key: 1,
      name: "HaTangDoThi",
      link: "/projects/hatangdothi",
      date: "2020",
    },
    {
      key: 2,
      name: "Codestus",
      link: "/projects/codestus",
      date: "2021",
    },
    {
      key: 3,
      name: "Rechic - Gambox",
      link: "/projects/rechic",
      date: "2021",
    },
  ];
  const router = useRouter();

  const onNavigate = (event: MouseEvent) => {
    router.push((event.target as any).getAttribute("aria-link"))
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
        {projects.map((project) => (
          <div key={project.key}>
            <Text
              tag="h2"
              variant="big-text"
              font="cormorant-upright"
              textTransform="uppercase"
              className="sp-work__list__item"
              aria-link={project.link}
              onClick={onNavigate}
            >
              {project.name}
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
      </div>
    </section>
  );
};

export default ProjectListScreen;
