/*(function() {
'use strict';
window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  form.classList.add('was-validated');
}, false);
});
  }, false);
})();*/

function validateForm(){
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["msg"].value;

  var fnameInval= document.getElementById('fnameInvalid');
  var lnameInval = document.getElementById('lnameInvalid');
  var emailInval1= document.getElementById('emailInvalid');
  var emailInval2 = document.getElementById('emailMsg');
  var msgInval= document.getElementById('msgInvalid');

  var validEmail = /\S+@\S+\.\S+/.test(email);
  var bool = true;

  if(fname ==""){
    fnameInval.style.visibility = "visible";
    bool=false;
  }

  if (lname=="") {
    lnameInval.style.visibility = "visible";
    bool=false;
  }
  if (email =="") {
    emailInval1.style.visibility = "visible";
    bool=false;
  }
  else if (validEmail == false) {
    emailInval2.innerHTML = "Email is in an invalid format. Please make sure email is in the format: test@example.com";
    emailInval1.style.visibility = "visible";
    bool=false;
  }

  if (message =="") {
    msgInval.style.visibility = "visible";
    bool=false;
  }
  console.log(bool);
  return bool;
}
