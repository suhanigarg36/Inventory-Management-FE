const form = {
  username: document.querySelector("#username-field"),
  password: document.querySelector("#password-field"),
  submit: document.querySelector("#login-form-submit"),
  messages: document.getElementById("login-error-msg-holder")
};

form.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const login = 'http://localhost:8080/validateUser';

  fetch(login, {
      method: "POST",
      headers: {
          Accept: "application/json, text/plain, text/html, */*",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          userName: form.username.value,
          password: form.password.value,
      }),
  })
  .then((response) => {
    if (response.ok) {
        return response.text(); 
    } else {
        throw new Error("Network response was not ok");
    }
})
.then((data) => {
    console.log("Server response:", data); 

    if (data === "Login Success") {
        console.log("Login success"); 
         window.location = "GetProducts.html";
    } else {
        console.log("Login failed"); 
        
        form.messages.innerText = "Login failed. Please check your credentials.";
        form.messages.style.opacity = 1; 
    }
})
.catch((err) => {
    console.error(err);
});
});
