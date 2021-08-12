import casioWatchPng from "../../public/assets/statics/casio-anhkhue-com.png";
import codestusPng from "../../public/assets/statics/codestus-com.png";
import rechicGamboxPng from "../../public/assets/statics/gambox-desktop.jpg";
import hatangdothiPng from "../../public/assets/statics/htdt.jpg";


export type ProjectType = {
  key: string;
  image: any;
  title: string;
  position: string;
  date: string;
};

export const projects: ProjectType[] = [
  {
    key: "casio",
    image: casioWatchPng,
    title: "Casio watch",
    position: "Front-End & Back-End Development - 2020",
    date: "2020"
  },
  {
    key: "hatangdothi",
    image: hatangdothiPng,
    title: "HaTangDoThi",
    position: "Front-End Development - 2020",
    date: "2020"
  },
  {
    key: "codestus",
    image: codestusPng,
    title: "Codestus",
    position: "Front-End & Back-End Development - 2021",
    date: "2021"
  },
  {
    key: "rechic",
    image: rechicGamboxPng,
    title: "Rechic - Gambox",
    position: "Front-End & Back-End Development - 2021",
    date: "2021"
  },
];
