export const emailValidation = (
  email,
  emailLabel,
  hasEmailInteracted,
  isEmailValid
) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email.value.trim() === "") {
    email.classList.add("alert");
    emailLabel.classList.add("active");
    emailLabel.textContent = "Email is required!";
    isEmailValid = false;
  } else if (!emailRegex.test(email.value)) {
    email.classList.add("alert");
    emailLabel.classList.add("active");
    emailLabel.textContent = "Email is invalid!";
    isEmailValid = false;
  } else {
    email.classList.remove("alert");
    emailLabel.textContent = "Email:";
    isEmailValid = true;
  }

  return isEmailValid;
};
