import { interactiveMode } from "./interactive-mode.js";

export const numbersSwitchHandler = (
  numbersSwitch,
  numbersSwitchSpan,
  numbersImage,
  numbersMonitor,
  numbersMonitorIframeContainer,
  numbersURL
) => {
  interactiveMode(
    numbersSwitch,
    numbersSwitchSpan,
    numbersImage,
    numbersMonitor,
    numbersMonitorIframeContainer,
    numbersURL,
    "numbers",
    "numbers-monitor"
  );
};
