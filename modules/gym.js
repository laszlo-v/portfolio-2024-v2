import { interactiveMode } from "./interactive-mode.js";

export const gymSwitchHandler = (
  gymSwitch,
  gymSwitchSpan,
  gymImage,
  gymMonitor,
  gymMonitorIframeContainer,
  gymURL
) => {
  interactiveMode(
    gymSwitch,
    gymSwitchSpan,
    gymImage,
    gymMonitor,
    gymMonitorIframeContainer,
    gymURL,
    "gym",
    "gym-monitor"
  );
};
