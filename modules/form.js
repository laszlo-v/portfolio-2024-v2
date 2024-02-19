import { interactiveMode } from "./interactive-mode.js";

export const formSwitchHandler = (
  formSwitch,
  formSwitchSpan,
  formImage,
  formMonitor,
  formMonitorIframeContainer,
  formURL
) => {
  interactiveMode(
    formSwitch,
    formSwitchSpan,
    formImage,
    formMonitor,
    formMonitorIframeContainer,
    formURL,
    "form",
    "form-monitor"
  );
};
