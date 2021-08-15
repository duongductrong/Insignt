import classNames from "classnames";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import mouseHelper from "../../core/helpers/MouseHelper";

export interface AppbarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  className?: any;
  mouseTarget?: boolean;
}

const Appbar: FC<AppbarProps> = ({ className, mouseTarget, ...props }) => {
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
        <div
          className={classNames(
            "appbar__bars",
            mouseHelper.addTargetTrigger(mouseTarget)
          )}
          onClick={onOpen}
        >
          <span className={mouseHelper.addTargetTrigger(mouseTarget)}></span>
          <span className={mouseHelper.addTargetTrigger(mouseTarget)}></span>
        </div>
      </header>

      <section className={classNames("appbar__content")}>
        <div className="appbar__items" ref={refListItems}>
          <Link href="/" passHref>
            <h2
              onClick={onOpen}
              className={classNames(
                "appbar__item",
                "color-white",
                mouseHelper.addTargetTrigger(mouseTarget)
              )}
            >
              Home
            </h2>
          </Link>

          <Link href="/about" passHref>
            <h2
              onClick={onOpen}
              className={classNames(
                "appbar__item",
                "color-white",
                mouseHelper.addTargetTrigger(mouseTarget)
              )}
            >
              About me
            </h2>
          </Link>

          <Link href="/projects" passHref>
            <h2
              onClick={onOpen}
              className={classNames(
                "appbar__item",
                "color-white",
                mouseHelper.addTargetTrigger(mouseTarget)
              )}
            >
              Projects
            </h2>
          </Link>
        </div>
        <div className="appbar__picture"></div>
      </section>
    </>
  );
};

export default Appbar;
