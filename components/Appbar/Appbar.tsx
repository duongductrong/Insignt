import classNames from "classnames";
import React, { FC, useState } from "react";

import styles from "../../styles/components/Appbar.module.scss";

export interface AppbarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  className?: any;
}

const Appbar: FC<AppbarProps> = ({ className, ...props }) => {
  const [isOpen, setOpen] = useState<boolean|null|undefined>(false);
  
  return (
    <>
      <header {...props} className={classNames(styles.appbar, className)}>
        <div className={styles.appbar__bars}>
          <span></span>
          <span></span>
        </div>
      </header>

      <section className={classNames(styles.appbar__content)}></section>
    </>
  );
};

export default Appbar;
