import React, { FC } from "react";
import Appbar from "../Appbar/Appbar";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const AppLayout: FC<Props> = ({ children, ...props }) => {
  // const dispatch = useDispatch();
  // const router = useRouter();

  // // listeners change route
  // useEffect(() => {
  //   dispatch(loadingOn);

  //   setTimeout(() => {
  //     dispatch(loadingOff);
  //   }, 300);
  // }, [router.asPath]);

  return (
    <div {...props} className="app-layout">
      <Appbar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
