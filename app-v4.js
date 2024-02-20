"use strict";
import { asideToggle } from "./modules/aside-toggle.js";
import { ozoneSwitchHandler } from "./modules/ozone-master.js";
import { skorpioklimaSwitchHandler } from "./modules/skorpioklima.js";
import { dentistSwitchHandler } from "./modules/dentist.js";
import { gymSwitchHandler } from "./modules/gym.js";
import { apisSwitchHandler } from "./modules/api.js";
import { formSwitchHandler } from "./modules/form.js";
import { numbersSwitchHandler } from "./modules/numbers.js";
import { scroll } from "./modules/scroll-to-top.js";
import { nameValidation } from "./modules/email-validation/name.js";
import { messageValidation } from "./modules/email-validation/message.js";
import { emailValidation } from "./modules/email-validation/email.js";
document.addEventListener("DOMContentLoaded", () => {
  /************************** aside toggle function ******************* */

  const asideButton = document.querySelector(".menu-handler");
  const aside = document.querySelector("aside");
  const logoMail = document.querySelector(".logo-mail");
  const main = document.querySelector("main");

  // checking the existence of the aside button with ternary if true calling the module!
  asideButton ? asideToggle(asideButton, aside, logoMail, main) : "";

  /******************************************************************** */

  // Ozone Master
  const ozoneMasterURL = "https://ozonemaster.ie";
  const ozoneSwitch = document.querySelector(".ozone-switch");
  const ozoneSwitchSpan = document.querySelector(".ozone-switch span");
  const ozoneImage = document.querySelector(".ozone-image");
  const ozoneMonitor = document.querySelector(".ozone-monitor");
  const ozoneMonitorIframeContainer = document.querySelector(".ozone-iframe");

  // checking the existence of the switch button with ternary if true calling the module!
  ozoneSwitch
    ? ozoneSwitchHandler(
        ozoneSwitch,
        ozoneSwitchSpan,
        ozoneImage,
        ozoneMonitor,
        ozoneMonitorIframeContainer,
        ozoneMasterURL
      )
    : "";

  /******************************************************************** */

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

  // checking the existence of the switch button with ternary if true calling the module!
  skorpioklimaSwitch
    ? skorpioklimaSwitchHandler(
        skorpioklimaSwitch,
        skorpioklimaSwitchSpan,
        skorpioklimaImage,
        skorpioklimaMonitor,
        skorpioklimaMonitorIframeContainer,
        skorpioklimaURL
      )
    : "";

  /********************************************************************* */

  // Dentist
  const dentistURL = "https://lvpfdentist.website/";
  const dentistSwitchSpan = document.querySelector(".dentist-switch span");
  const dentistSwitch = document.querySelector(".dentist-switch");
  const dentistImage = document.querySelector(".dentist-image");
  const dentistMonitor = document.querySelector(".dentist-monitor");
  const dentistMonitorIframeContainer =
    document.querySelector(".dentist-iframe");

  // checking the existence of the switch button with ternary if true calling the module!
  dentistSwitch
    ? dentistSwitchHandler(
        dentistSwitch,
        dentistSwitchSpan,
        dentistImage,
        dentistMonitor,
        dentistMonitorIframeContainer,
        dentistURL
      )
    : "";

  /*********************************************************************** */

  // Gym
  const gymURL = "https://lvpfgym.tech/";
  const gymSwitchSpan = document.querySelector(".gym-switch span");
  const gymSwitch = document.querySelector(".gym-switch");
  const gymImage = document.querySelector(".gym-image");
  const gymMonitor = document.querySelector(".gym-monitor");
  const gymMonitorIframeContainer = document.querySelector(".gym-iframe");

  // checking the existence of the switch button with ternary if true calling the module!
  gymSwitch
    ? gymSwitchHandler(
        gymSwitch,
        gymSwitchSpan,
        gymImage,
        gymMonitor,
        gymMonitorIframeContainer,
        gymURL
      )
    : "";

  /************************************************************************* */
  // APIs
  const apisURL = "https://lvpfapi.tech/";
  const apisSwitchSpan = document.querySelector(".apis-switch span");
  const apisSwitch = document.querySelector(".apis-switch");
  const apisImage = document.querySelector(".apis-image");
  const apisMonitor = document.querySelector(".apis-monitor");
  const apisMonitorIframeContainer = document.querySelector(".apis-iframe");

  // checking the existence of the switch button with ternary if true calling the module!
  apisSwitch
    ? apisSwitchHandler(
        apisSwitch,
        apisSwitchSpan,
        apisImage,
        apisMonitor,
        apisMonitorIframeContainer,
        apisURL
      )
    : "";
  /************************************************************************** */
  // Form
  const formURL = "https://lvpftimedform.tech/";
  const formSwitchSpan = document.querySelector(".form-switch span");
  const formSwitch = document.querySelector(".form-switch");
  const formImage = document.querySelector(".form-image");
  const formMonitor = document.querySelector(".form-monitor");
  const formMonitorIframeContainer = document.querySelector(".form-iframe");

  // checking the existence of the switch button with ternary if true calling the module!
  formSwitch
    ? formSwitchHandler(
        formSwitch,
        formSwitchSpan,
        formImage,
        formMonitor,
        formMonitorIframeContainer,
        formURL
      )
    : "";
  /************************************************************************** */

  // Find numbers
  const numbersURL = "https://lvpffindnumbers.tech/";
  const numbersSwitchSpan = document.querySelector(".numbers-switch span");
  const numbersSwitch = document.querySelector(".numbers-switch");
  const numbersImage = document.querySelector(".numbers-image");
  const numbersMonitor = document.querySelector(".numbers-monitor");
  const numbersMonitorIframeContainer =
    document.querySelector(".numbers-iframe");

  // checking the existence of the switch button with ternary if true calling the module!
  numbersSwitch
    ? numbersSwitchHandler(
        numbersSwitch,
        numbersSwitchSpan,
        numbersImage,
        numbersMonitor,
        numbersMonitorIframeContainer,
        numbersURL
      )
    : "";
  /****************************************************************************** */

  // Scroll to top functionality

  window.addEventListener("scroll", scroll);

  /*************************************************************************** */

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
  const nameLabel = document.querySelector(".name-label");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const emailLabel = document.querySelector(".email-label");
  const messageLabel = document.querySelector(".message-label");

  //************************************************************* */

  let isEmailValid = true;
  let isNameValid = false;
  let isMessageValid = true;
  let hasNameInteracted = false;
  let hasEmailInteracted = false;
  let hasMessageInteracted = false;

  const formValidation = () => {
    const isNameValid = nameValidation(name, nameLabel, isNameValid);
    const isMessageValid = messageValidation(
      message,
      messageLabel,
      isMessageValid
    );
    const isEmailValid = emailValidation(email, emailLabel, isEmailValid);

    return isNameValid && isMessageValid && isEmailValid;
  };

  /*********************** Validating Name ************************/

  name.addEventListener("focus", () => {
    hasNameInteracted = true;
  });
  name.addEventListener("input", () => {
    hasNameInteracted = true;
    nameValidation(name, nameLabel, isNameValid, hasNameInteracted);
  });
  name.addEventListener("blur", () => {
    nameValidation(name, nameLabel, isNameValid, hasNameInteracted);
  });

  /*************************************************************** */

  /*********************** Validating Message ************************/

  message.addEventListener("focus", () => {
    hasMessageInteracted = true;
  });
  message.addEventListener("input", () => {
    hasMessageInteracted = true;
    messageValidation(
      message,
      messageLabel,
      isMessageValid,
      hasMessageInteracted
    );
  });
  message.addEventListener("blur", () => {
    messageValidation(
      message,
      messageLabel,
      isMessageValid,
      hasMessageInteracted
    );
  });

  /*************************************************************** */

  /*********************** Validating Email ************************/

  email.addEventListener("focus", () => {
    hasEmailInteracted = true;
  });
  email.addEventListener("input", () => {
    hasEmailInteracted = true;
    emailValidation(email, emailLabel, isEmailValid, hasEmailInteracted);
  });
  email.addEventListener("blur", () => {
    emailValidation(email, emailLabel, isEmailValid, hasEmailInteracted);
  });

  /*************************************************************** */
  form
    ? form.addEventListener("submit", (e) => {
        if (!formValidation()) {
          e.preventDefault();
        }
      })
    : "";
});
