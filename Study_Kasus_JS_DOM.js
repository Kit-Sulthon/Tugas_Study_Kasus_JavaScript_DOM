function buat_login() {
  var elem = document.getElementById("LoginPage");
  elem.parentElement.removeChild(elem);
  var Pessan = document.getElementById("pessan");
  Pessan.parentElement.removeChild(Pessan);

  var TulisanParag = document.createElement("p");
  TulisanParag.className = "tulisan_login";
  TulisanParag.innerHTML = "Siahkan Login";

  //!User Login page

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(TulisanParag);
  var form = document.createElement("FORM");
  element.appendChild(form);

  //User Name

  var label = document.createElement("label");
  label.innerHTML = "User Name";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.value = "Admin";
  form.appendChild(input_username);

  //Password User

  var label2 = document.createElement("label");
  label2.innerHTML = "Password";
  form.appendChild(label2);
  var inputPW = document.createElement("input");
  inputPW.type = "password";
  inputPW.name = "password";
  inputPW.className = "form_login";
  inputPW.value = "12345678";
  form.appendChild(inputPW);

  // Button

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
