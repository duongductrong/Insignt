import { FC, useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { PageLayoutI } from "../core/types/PageLayout";
import classNames from "classnames";
export interface HomeProps {
  className?: any;
}

const Home: FC<HomeProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={classNames("home-screen", className)}>
      <section className="sp-space">
        {/* <svg
          className="sp-space__sphere"
          viewBox="0 0 100 100"
          width="550"
          height="550"
        >
          <defs>
            <path
              id="circle"
              d="M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
            ></path>
          </defs>
          <text fontSize="14">
            <textPath xlinkHref="#circle">Contact: duongductrong06@gmail.com</textPath>
          </text>
        </svg> */}
        <h1 className="sp-space__title">Simple Style</h1>
      </section>
    </div>
  );
};

(Home as PageLayoutI).Layout = AppLayout;

export default Home;
