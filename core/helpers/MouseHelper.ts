import _ from 'lodash';

class MouseHelper {
  addTargetTrigger(isTarget?: boolean): string {
    return isTarget ? "mouseTarget" : "";
  }

  shouldTarget(element: HTMLElement | null, target : HTMLElement | null) {
    const isHasTarget = target?.classList.contains("mouseTarget");

    if(isHasTarget) {
      element?.classList.add("mouse--target");
    }
    else {
      element?.classList.remove("mouse--target");
    }
  }
}

const mouseHelper = new MouseHelper();

export default mouseHelper;
