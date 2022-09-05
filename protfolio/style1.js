function validation() {
  var fname = document.form1.fname.value;
  if (fname == '' || fname == nill){
    document.getElementById("p1").innerHTML
  }


  if(
    document.form1.gen[0].checked == falese &&
    document.form1.gen[1].checked == falese
  ){
    document.getElementById("p2").innerHTML = "select gender";
    return false;
  }
}