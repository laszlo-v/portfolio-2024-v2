export const messageValidation = (
  message,
  messageLabel,
  hasMessageInteracted,
  isMessageValid
) => {
  if (message.value.trim() === "") {
    message.classList.add("alert");
    messageLabel.classList.add("active");
    messageLabel.textContent = "Message is required!";
    isMessageValid = false;
  } else if (hasMessageInteracted && message.value.trim() === "") {
    message.classList.add("alert");
    messageLabel.classList.add("active");
    messageLabel.textContent = "Message is required!";
    isMessageValid = false;
  } else if (hasMessageInteracted && message.value.trim() !== "") {
    message.classList.remove("alert");
    messageLabel.textContent = "Message:";
    isMessageValid = true;
  } else if (message.value.trim() !== "") {
    message.classList.remove("alert");
    messageLabel.textContent = "Message:";
    isMessageValid = true;
  }

  return isMessageValid;
};
