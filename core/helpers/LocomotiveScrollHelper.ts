class LocomotiveScrollHelper {
  async setup() {
    return await import("locomotive-scroll").then((locomotiveScroll) => {
      return new locomotiveScroll.default({
        el: document.querySelector("[data-scroll-container]") as Element,
        smooth: true,
        smoothMobile: true,
        resetNativeScroll: true,
        lerp: 0.05,
      });
    });
  }
}

const locomotiveScrollHelper = new LocomotiveScrollHelper();

export default locomotiveScrollHelper;
