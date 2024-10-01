document.addEventListener('click', function(e) {
	var btnMessage = "enviar mensagem"

  btnMessage = /^[A-Za-z.\s_-]+$/.test(btnMessage)
  var sendButtonValue = /^[A-Za-z.\s_-]+$/.test(e.srcElement.innerText) || /^[A-Za-z.\s_-]+$/.test(e.srcElement.value)

  if(sendButtonValue == btnMessage) {
    console.log("Sending...");
    var g_getInputs = e.target.closest("form").querySelectorAll("input[required],[aria-required='true']")
    var g_getTextArea = e.target.closest("form").querySelectorAll("textarea[required],[aria-required='true']")
    var g_getSelect = e.target.closest("form").querySelectorAll("select[required],[aria-required='true']")
    var g_getErrors = []

    g_getInputs.forEach(function(input) {
      if(input.type == "text") {
        if(input.value == '') {
          g_getErrors.push('Please enter a value for ' + input.name);
        }
      }
      if(input.type == "email") {
        if(input.value == '') {
          g_getErrors.push('Please enter a value for ' + input.name);
        }else if(!g_validateMail(input.value)) {
          g_getErrors.push('Please enter a valid email format for ' + input.name);
        }
      }
      if(input.type == "tel") {
        if(input.value == '') {
          g_getErrors.push('Please enter a value for ' + input.name);
        }
      }
      if(input.type == "number") {
        if(input.value == '') {
          g_getErrors.push('Please enter a value for ' + input.name);
        }
      }
      if(input.type == "checkbox") {
        if(!input.checked) {
          g_getErrors.push('Please accept the terms');
        }
      }
    });
    
    g_getTextArea.forEach(function(textarea) {
      if(textarea.value == '') {
        g_getErrors.push('Please enter a value for ' + textarea.name);
      }
    });
    g_getSelect.forEach(function(select) {
      if(select.value == '') {
        g_getErrors.push('Please enter a value for ' + select.name);
      }
    });

    if(g_getErrors.length == 0) {
    	console.log("Form has been validated");
    }else {
      console.log(g_getErrors);
    }
  }
});
