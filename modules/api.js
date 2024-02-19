import { interactiveMode } from "./interactive-mode.js";

export const apisSwitchHandler = (
  apisSwitch,
  apisSwitchSpan,
  apisImage,
  apisMonitor,
  apisMonitorIframeContainer,
  apisURL
) => {
  interactiveMode(
    apisSwitch,
    apisSwitchSpan,
    apisImage,
    apisMonitor,
    apisMonitorIframeContainer,
    apisURL,
    "apis",
    "apis-monitor"
  );
};
