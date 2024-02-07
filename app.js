document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-handler");
  const aside = document.querySelector("aside");
  const logoMail = document.querySelector(".logo-mail");
  const main = document.querySelector("main");
  const ozoneSwitch = document.querySelector(".ozone-switch");
  const ozoneSwitchSpan = document.querySelector(".ozone-switch span");
  const ozoneImage = document.querySelector(".ozone-image");
  const ozoneMonitor = document.querySelector(".ozone-monitor");
  const ozoneMonitorIframeContainer = document.querySelector(".ozone-iframe");

  button
    ? button.addEventListener("click", () => {
        aside.classList.toggle("toggle");
        logoMail.classList.toggle("toggle");
        main.classList.toggle("toggle");
      })
    : "";

  const interactiveMode = (
    button,
    buttonSpan,
    image,
    monitor,
    monitorIframeContainer
  ) => {
    button.addEventListener("click", () => {
      buttonSpan.textContent = buttonSpan.textContent === "OFF" ? "ON" : "OFF";
      if (buttonSpan.textContent === "ON") {
        buttonSpan.style.cssText = "color: #27ff82";
      } else {
        buttonSpan.style.cssText = "color: #22ddff";
      }
      image.classList.toggle("ozone-hide");
      monitor.classList.toggle("ozone-monitor-show");

      if (monitorIframeContainer.src === "") {
        monitorIframeContainer.src = "https://ozonemaster.ie";
      } else {
        monitorIframeContainer.src =
          monitorIframeContainer.src === "https://ozonemaster.ie"
            ? null
            : "https://ozonemaster.ie";
      }
    });
  };

  ozoneSwitch
    ? interactiveMode(
        ozoneSwitch,
        ozoneSwitchSpan,
        ozoneImage,
        ozoneMonitor,
        ozoneMonitorIframeContainer
      )
    : "";
});
