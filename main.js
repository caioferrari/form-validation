var googleGetURLParams = new URLSearchParams(window.location.search);
if(!googleGetURLParams.get('name') == '' && !googleGetURLParams.get('lastname') == '' && !googleGetURLParams.get('email') == '' && !googleGetURLParams.get('phone') == '' && !googleGetURLParams.get('r_opt') == '') {
  document.querySelector(".main .container .content form").remove()
  document.querySelector(".container > .content").innerHTML = "<h1>Thank you!</h1><h2>Your message has been sent.<br />We will reply you soon.</h2><br /><br /><h6>Wanna try again? <a href=\"\">Click here</a> and send another message.</h6>"
  document.querySelector(".content h6 > a").addEventListener("click", function(e) {
    var g__getURL = window.location.href;
    var g__getSearch = window.location.search;
    this.href = window.location.origin + window.location.pathname;
  });
}

var g__getLabel = document.querySelectorAll(".databox");
for(i=0;i<g__getLabel.length;i++) {
  g__getLabel[i].querySelector("label").addEventListener("click", function(e) {
    this.classList.add("selected");
  });
}