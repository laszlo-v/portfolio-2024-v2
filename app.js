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

  // Gym
  const gymURL = "https://lvpfgym.tech/";
  const gymSwitchSpan = document.querySelector(".gym-switch span");
  const gymSwitch = document.querySelector(".gym-switch");
  const gymImage = document.querySelector(".gym-image");
  const gymMonitor = document.querySelector(".gym-monitor");
  const gymMonitorIframeContainer = document.querySelector(".gym-iframe");

  // APIs
  const apisURL = "https://lvpfapi.tech/";
  const apisSwitchSpan = document.querySelector(".apis-switch span");
  const apisSwitch = document.querySelector(".apis-switch");
  const apisImage = document.querySelector(".apis-image");
  const apisMonitor = document.querySelector(".apis-monitor");
  const apisMonitorIframeContainer = document.querySelector(".apis-iframe");

  // Form
  const formURL = "https://lvpftimedform.tech/";
  const formSwitchSpan = document.querySelector(".form-switch span");
  const formSwitch = document.querySelector(".form-switch");
  const formImage = document.querySelector(".form-image");
  const formMonitor = document.querySelector(".form-monitor");
  const formMonitorIframeContainer = document.querySelector(".form-iframe");

  // Find numbers
  const numbersURL = "https://lvpffindnumbers.tech/";
  const numbersSwitchSpan = document.querySelector(".numbers-switch span");
  const numbersSwitch = document.querySelector(".numbers-switch");
  const numbersImage = document.querySelector(".numbers-image");
  const numbersMonitor = document.querySelector(".numbers-monitor");
  const numbersMonitorIframeContainer =
    document.querySelector(".numbers-iframe");

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

  // Gym
  gymSwitch
    ? interactiveMode(
        gymSwitch,
        gymSwitchSpan,
        gymImage,
        gymMonitor,
        gymMonitorIframeContainer,
        gymURL
      )
    : "";

  // APIs
  apisSwitch
    ? interactiveMode(
        apisSwitch,
        apisSwitchSpan,
        apisImage,
        apisMonitor,
        apisMonitorIframeContainer,
        apisURL
      )
    : "";

  // Form
  formSwitch
    ? interactiveMode(
        formSwitch,
        formSwitchSpan,
        formImage,
        formMonitor,
        formMonitorIframeContainer,
        formURL
      )
    : "";

  // Find numbers
  numbersSwitch
    ? interactiveMode(
        numbersSwitch,
        numbersSwitchSpan,
        numbersImage,
        numbersMonitor,
        numbersMonitorIframeContainer,
        numbersURL
      )
    : "";

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", () => {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
      backToTopButton.addEventListener("click", scrollToTop);
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Contact form
  const inputs = document.querySelectorAll(".input");

  inputs
    ? inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          input.nextElementSibling.classList.add("active");
        });

        input.addEventListener("blur", () => {
          if (input.value === "") {
            input.nextElementSibling.classList.remove("active");
          }
        });
      })
    : "";

  // Form validation
  const form = document.querySelector(".contact-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const submitButton = document.querySelector(".submit");
  const nameLabel = document.querySelector(".name-label");
  const emailLabel = document.querySelector(".email-label");
  const messageLabel = document.querySelector(".message-label");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isNameValid = true;
  let hasNameInteracted = false;

  const formValidation = () => {
    if (name.value.trim() === "") {
      name.classList.add("name-alert");
      nameLabel.classList.add("active");
      nameLabel.textContent = "Name is required!";
      isNameValid = false;
    } else {
      name.classList.remove("name-alert");
      nameLabel.textContent = "Name";
    }
    return isNameValid;
  };

  name
    ? name.addEventListener("input", () => {
        if (name.value.trim()) {
          name.classList.remove("name-alert");
          nameLabel.textContent = "Name";
        } else if (name.value.length < 1) {
          name.classList.add("name-alert");
          nameLabel.textContent = "Name is required!";
          nameLabel.classList.add("active");
        }
        hasNameInteracted = true;
      })
    : "";

  name
    ? name.addEventListener("blur", () => {
        if (!hasNameInteracted && name.value === "") {
          name.classList.add("name-alert");
          nameLabel.classList.add("active");
          nameLabel.textContent = "Name is required!";
        } else if (name.value.length < 1) {
          name.classList.add("name-alert");
          nameLabel.textContent = "Name is required!";
          nameLabel.classList.add("active");
        }
      })
    : "";

  form
    ? form.addEventListener("submit", (e) => {
        if (!formValidation()) {
          e.preventDefault();
        }
      })
    : "";
});
