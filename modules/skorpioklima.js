import { interactiveMode } from "./interactive-mode.js";

export const skorpioklimaSwitchHandler = (
  skorpioklimaSwitch,
  skorpioklimaSwitchSpan,
  skorpioklimaImage,
  skorpioklimaMonitor,
  skorpioklimaMonitorIframeContainer,
  skorpioklimaURL
) => {
  interactiveMode(
    skorpioklimaSwitch,
    skorpioklimaSwitchSpan,
    skorpioklimaImage,
    skorpioklimaMonitor,
    skorpioklimaMonitorIframeContainer,
    skorpioklimaURL,
    "skorpioklima",
    "skorpioklima-monitor"
  );
};
