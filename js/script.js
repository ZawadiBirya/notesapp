function myFunction() {
  var x = document.getElementsByClassName("registrationform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

myFunction();
