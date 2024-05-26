import { interactiveMode } from "./interactive-mode.js";

export const ozoneSwitchHandler = (
  dublinCleaningSwitch,
  dublinCleaningSwitchSpan,
  dublinCleaningImage,
  dublinCleaningMonitor,
  dublinCleaningMonitorIframeContainer,
  dublinCleaningURL
) => {
  interactiveMode(
    dublinCleaningSwitch,
    dublinCleaningSwitchSpan,
    dublinCleaningImage,
    dublinCleaningMonitor,
    dublinCleaningMonitorIframeContainer,
    dublinCleaningURL,
    "dublin-cleaning",
    "dublin-cleaning-monitor"
  );
};
