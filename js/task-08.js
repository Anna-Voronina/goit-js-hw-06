const loginFormEl = document.querySelector(".login-form");

const onLoginFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
  return formData;
};

loginFormEl.addEventListener("submit", onLoginFormSubmit);
