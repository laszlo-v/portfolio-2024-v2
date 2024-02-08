document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-handler");
  const aside = document.querySelector("aside");
  const logoMail = document.querySelector(".logo-mail");
  const main = document.querySelector("main");

  // Ozone Master
  const ozoneMasterURL = "https://ozonemaster.ie";
  const ozoneSwitch = document.querySelector(".ozone-switch");
  const ozoneSwitchSpan = document.querySelector(".ozone-switch span");
  const ozoneImage = document.querySelector(".ozone-image");
  const ozoneMonitor = document.querySelector(".ozone-monitor");
  const ozoneMonitorIframeContainer = document.querySelector(".ozone-iframe");

  // Skorpiklima
  const skorpioklimaURL = "https://skorpioklima.hu";
  const skorpioklimaSwitchSpan = document.querySelector(
    ".skorpioklima-switch span"
  );
  const skorpioklimaSwitch = document.querySelector(".skorpioklima-switch");
  const skorpioklimaImage = document.querySelector(".skorpioklima-image");
  const skorpioklimaMonitor = document.querySelector(".skorpioklima-monitor");
  const skorpioklimaMonitorIframeContainer = document.querySelector(
    ".skorpioklima-iframe"
  );

  // Dentist
  const dentistURL = "https://lvpfdentist.website/";
  const dentistSwitchSpan = document.querySelector(".skorpioklima-switch span");
  const dentistSwitch = document.querySelector(".dentist-switch");
  const dentistImage = document.querySelector(".dentist-image");
  const dentistMonitor = document.querySelector(".dentist-monitor");
  const dentistMonitorIframeContainer =
    document.querySelector(".dentist-iframe");

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
    monitorIframeContainer,
    url
  ) => {
    button.addEventListener("click", () => {
      console.log("clicked");
      buttonSpan.textContent = buttonSpan.textContent === "OFF" ? "ON" : "OFF";
      if (buttonSpan.textContent === "ON") {
        buttonSpan.style.cssText = "color: #27ff82";
      } else {
        buttonSpan.style.cssText = "color: #22ddff";
      }
      image.classList.toggle("ozone-hide");
      monitor.classList.toggle("ozone-monitor-show");

      if (monitorIframeContainer.src === "") {
        monitorIframeContainer.src = url;
      } else {
        monitorIframeContainer.src =
          monitorIframeContainer.src === url ? null : url;
      }
    });
  };

  // Ozone Master

  ozoneSwitch
    ? interactiveMode(
        ozoneSwitch,
        ozoneSwitchSpan,
        ozoneImage,
        ozoneMonitor,
        ozoneMonitorIframeContainer,
        ozoneMasterURL
      )
    : "";

  // Skorpioklima
  skorpioklimaSwitch
    ? interactiveMode(
        skorpioklimaSwitch,
        skorpioklimaSwitchSpan,
        skorpioklimaImage,
        skorpioklimaMonitor,
        skorpioklimaMonitorIframeContainer,
        skorpioklimaURL
      )
    : "";

  // Dentist
  dentistSwitch
    ? interactiveMode(
        dentistSwitch,
        dentistSwitchSpan,
        dentistImage,
        dentistMonitor,
        dentistMonitorIframeContainer,
        dentistURL
      )
    : "";
});
