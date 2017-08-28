
  // Get the modal
  var modal = document.getElementById('box-modal');

  // Get the button that opens the modal
  // var btn = document.getElementById("btn-popup-search");
  var btn = document.getElementById("btn-back-home");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-modal")[0];
  var spanCancel = document.getElementsByClassName("btn-cancel")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {

    modal.style.display = "block";
  }
  // btnSearch.onclick = function() {
  //
  //   modal.style.display = "block";
  // }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  spanCancel.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var a = 5;


/////
