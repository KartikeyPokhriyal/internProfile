document.querySelectorAll(".button").forEach(function(elem) {
  elem.addEventListener("click", function() {
    var val = elem.parentNode.parentNode.childNodes[1].childNodes[1].textContent;
document.write("Welcome " + val);
  });
});
