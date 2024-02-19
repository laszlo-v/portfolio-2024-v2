import { interactiveMode } from "./interactive-mode.js";

export const ozoneSwitchHandler = (
  ozoneSwitch,
  ozoneSwitchSpan,
  ozoneImage,
  ozoneMonitor,
  ozoneMonitorIframeContainer,
  ozoneMasterURL
) => {
  interactiveMode(
    ozoneSwitch,
    ozoneSwitchSpan,
    ozoneImage,
    ozoneMonitor,
    ozoneMonitorIframeContainer,
    ozoneMasterURL,
    "ozone",
    "ozone-monitor"
  );
};
