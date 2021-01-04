
// Get the modal 1
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal 2
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window2.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}