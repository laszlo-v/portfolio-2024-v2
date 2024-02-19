import { interactiveMode } from "./interactive-mode.js";

export const dentistSwitchHandler = (
  dentistSwitch,
  dentistSwitchSpan,
  dentistImage,
  dentistMonitor,
  dentistMonitorIframeContainer,
  dentistURL
) => {
  interactiveMode(
    dentistSwitch,
    dentistSwitchSpan,
    dentistImage,
    dentistMonitor,
    dentistMonitorIframeContainer,
    dentistURL,
    "dentist",
    "dentist-monitor"
  );
};
