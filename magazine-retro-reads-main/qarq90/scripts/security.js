document.addEventListener("keydown", function (event) {
  if (event) {
    event.preventDefault();
    alert("Keyboard Not Allowed");
  }

  if (event.keyCode === 123) {
    event.preventDefault();
    alert("Keyboard Not Allowed");
  }
});

document.addEventListener("contextmenu", (event) => event.preventDefault());
