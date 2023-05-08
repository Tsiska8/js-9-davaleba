function validacia() {
  var fullname = document.getElementById("fullname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if(fullname.value == ""  || fullname.lenght == 0) {
    window.alert("შეიყვანეთ სახელი, გვარი");
  }else if(email.value == ""  || email.lenght == 0) {
    window.alert("შეიყვანეთ ელ.ფოსტა");
  }else if(password.value == "" || password.length == 0) {
    window.alert("შეიყვანეთ პაროლი");
  }
}