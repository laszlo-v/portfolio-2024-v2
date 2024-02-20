export const nameValidation = (
  name,
  nameLabel,
  hasNameInteracted,
  isNameValid
) => {
  if (name.value.trim() === "") {
    name.classList.add("alert");
    nameLabel.classList.add("active");
    nameLabel.textContent = "Name is required!";
    isNameValid = false;
  } else if (hasNameInteracted && name.value.trim() === "") {
    name.classList.add("alert");
    nameLabel.classList.add("active");
    nameLabel.textContent = "Name is required!";
    isNameValid = false;
  } else if (hasNameInteracted && name.value.trim() !== "") {
    name.classList.remove("alert");
    nameLabel.textContent = "Name:";
    isNameValid = true;
  } else if (name.value.trim() !== "") {
    name.classList.remove("alert");
    nameLabel.textContent = "Name:";
    isNameValid = true;
  }

  return isNameValid;
};
