const form = {
  username: document.getElementById("username"),
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phoneno: document.getElementById("phoneno"),
  userrole: document.getElementById("userrole"),
  password: document.getElementById("password"),
  confirmpwd: document.getElementById("confirmpwd"),
  submit: document.querySelector("#reg-button")
};


form.submit.addEventListener("click", (e) => {
  e.preventDefault();

  const userData = {
      userName: form.username.value,
      name: form.name.value,
      email: form.email.value,
      phone_no: form.phoneno.value,
      user_role: form.userrole.value,
      password: form.password.value,
  };

  const jsonData = JSON.stringify(userData);

  const register = 'http://localhost:8080/submitUser';

  fetch(register, {
      method: "POST",
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
      },
      body: jsonData
  })
  .then((response) => {

    if (response.status === 400) {  
        alert("Username can't be empty");
    } else { 
        alert("Registration successfully");
    }
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
.catch((err) => {
    console.error(err); 
});
});






