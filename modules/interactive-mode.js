export const interactiveMode = (
  button,
  buttonSpan,
  image,
  monitor,
  monitorIframeContainer,
  url,
  project,
  projectMonitor
) => {
  button.addEventListener("click", () => {
    buttonSpan.textContent = buttonSpan.textContent === "OFF" ? "ON" : "OFF";
    if (buttonSpan.textContent === "ON") {
      buttonSpan.style.cssText = "color: #27ff82";
    } else {
      buttonSpan.style.cssText = "color: #22ddff";
    }
    image.classList.toggle(`${project}-hide`);
    monitor.classList.toggle(`${projectMonitor}-show`);

    if (monitorIframeContainer.src === "") {
      monitorIframeContainer.src = url;
    } else {
      monitorIframeContainer.src =
        monitorIframeContainer.src === url ? null : url;
    }
  });
};
