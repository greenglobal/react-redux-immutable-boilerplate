function onclickShowMessage() {
  document.getElementById('showMessage').style.display = "block";
  $('#showMessage').delay(3000).hide(0);
}

function onclickHideMessage() {
  document.getElementById('showMessage').style.display = "none";
}

function clearInput() {
  $(document).ready(function() {
    $('.form-fb').find('input:text').val('');
    $('.form-fb').find('textarea').val('');
    $('#ipt-name').focus();
  });
}

function numberInput() {
  $(document).ready(function () {
    //called when key is pressed in textbox
    $('#phone').keypress(function (e) {
       //if the letter is not digit then display error and don't type anything
       if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          //display error message
          $('#errmsg').html("Chỉ nhập số điện thoại").show().fadeOut("slow");
                 return false;
      }
     });
  });
}
