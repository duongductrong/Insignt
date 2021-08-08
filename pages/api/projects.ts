import { NextApiRequest, NextApiResponse } from "next";

import casioWatchPng from "../../public/assets/statics/casio-anhkhue-com.png";
import codestusPng from "../../public/assets/statics/codestus-com.png";
import hatangdothiPng from "../../public/assets/statics/htdt.jpg";
import rechicGamboxPng from "../../public/assets/statics/gambox-desktop.jpg";

export type ProjectType = {
  key: string;
  image: any;
  title: string;
  position: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug;

  const projects : ProjectType[] = [
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

  if (slug) {
    const projectItem = projects.find((item) => item.key === slug);

    if (!projectItem) {
      return res.status(404).json({
        message: "Not found this item",
        data: null,
      });
    }

    return res.status(200).json({
      message: "Successfully",
      data: projectItem,
    });
  }

  return res.status(200).json({
    message: "Successfully",
    data: projects,
  });
}
