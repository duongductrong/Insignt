import { FC } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { PageLayoutI } from "../core/types/PageLayout";

export interface HomeProps {}

const Home: FC<HomeProps> = ({ ...props }) => {
  return <div {...props}>123</div>;
};

(Home as PageLayoutI).Layout = AppLayout;

export default Home;