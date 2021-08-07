import classNames from "classnames";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";

export interface AppbarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  className?: any;
}

const Appbar: FC<AppbarProps> = ({ className, ...props }) => {
  const refHeader = useRef<any>(null);
  const refListItems = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean | null | undefined>(false);

  const onOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const heightOfHeader = refHeader.current.getBoundingClientRect().height;
    const heightOfListItems =
      refListItems.current.getBoundingClientRect().height;

    document.body.style.setProperty(
      "--app-header-height",
      `${heightOfHeader}px`
    );
    document.body.style.setProperty(
      "--app-header-items-height",
      `${heightOfListItems}px`
    );
  }, []);

  return (
    <>
      <header
        {...props}
        ref={refHeader}
        className={classNames("appbar", className, isOpen && "appbar__open")}
      >
        <div className={"appbar__bars"} onClick={onOpen}>
          <span></span>
          <span></span>
        </div>
      </header>

      <section className={classNames("appbar__content")}>
        <div className="appbar__items" ref={refListItems}>
          <Link href="/">
            <h2 onClick={onOpen} className="appbar__item color-white">Home</h2>
          </Link>

          <Link href="/about">
            <h2 onClick={onOpen} className="appbar__item color-white">About me</h2>
          </Link>

          <Link href="/projects">
            <h2 onClick={onOpen} className="appbar__item color-white">Projects</h2>
          </Link>
        </div>
        <div className="appbar__picture"></div>
      </section>
    </>
  );
};

export default Appbar;
