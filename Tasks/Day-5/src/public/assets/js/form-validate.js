// IIFE
(function () {
  const contactFormButton = document.querySelector("#contact_form_button");
  const contactFullnameInput = document.querySelector("#contact_fullname");
  const contactNumberInput = document.querySelector("#contact_number");
  const contactEmailInput = document.querySelector("#contact_email");
  const contactMessageInput = document.querySelector("#contact_message");

  contactFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    // get all values from DOM Element
    let output = getAllValues(contactFullnameInput, contactNumberInput, contactEmailInput, contactMessageInput);

    // Pass all value to valiatefunction
    let examine =  validationColor(output['name'],output['number'],output['email'],output['msg']);

    if(examine == true){
      console.log('All Izz Well');
    }else{
      console.log('At least One field is Empty');
    }
  });

  function validationColor(nameVal, numberVal, emailVal, messageVal) {
    let bool = false;

    if (nameVal == "") {
      contactFullnameInput.style.borderColor = "red";
      contactFullnameInput.style.boxShadow = "0 0 0 .1rem red";
      bool = false;
    } else {
      contactFullnameInput.style.border = "1px solid #ced4da";
      contactFullnameInput.style.boxShadow = "none";
      bool = true;
    }

    if (numberVal == "") {
      contactNumberInput.style.borderColor = "red";
      contactNumberInput.style.boxShadow = "0 0 0 .1rem red";
      bool = false;
    } else {
      contactNumberInput.style.border = "1px solid #ced4da";
      contactNumberInput.style.boxShadow = "none";
      bool = true;
    }

    if (emailVal == "") {
      contactEmailInput.style.borderColor = "red";
      contactEmailInput.style.boxShadow = "0 0 0 .1rem red";
      bool = false;
    } else {
      contactEmailInput.style.border = "1px solid #ced4da";
      contactEmailInput.style.boxShadow = "none";
      bool = true;
    }

    if (messageVal == "") {
      contactMessageInput.style.borderColor = "red";
      contactMessageInput.style.boxShadow = "0 0 0 .1rem red";
      bool = false;
    } else {
      contactMessageInput.style.border = "1px solid #ced4da";
      contactMessageInput.style.boxShadow = "none";
      bool = true;
    }

    return bool;
  }

  function getAllValues(name, number, email, message) {
    const contactName = name.value;
    const contactNumber = number.value;
    const contactEmail = email.value;
    const contactMessage = message.value;

    const resultObject = {
      name: contactName,
      number: contactNumber,
      email: contactEmail,
      msg: contactMessage
    };

    return resultObject;
  }

})();
