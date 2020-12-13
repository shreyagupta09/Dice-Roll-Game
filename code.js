onEvent("button1", "click", function( ) {
  setNumber("lbl_num1", randomNumber(1, 6));
  if (getNumber("lbl_num1") == 1) {
    setImageURL("image1", "assets/1.PNG");
  } else if ((getNumber("lbl_num1") == 2)) {
    setImageURL("image1", "assets/2.PNG");
  } else if ((getNumber("lbl_num1") == 3)) {
    setImageURL("image1", "assets/3.PNG");
  } else if ((getNumber("lbl_num1") == 4)) {
    setImageURL("image1", "assets/4.PNG");
  } else if ((getNumber("lbl_num1") == 5)) {
    setImageURL("image1", "assets/5.PNG");
  } else if ((getNumber("lbl_num1") == 6)) {
    setImageURL("image1", "assets/6.PNG");
  }
  setNumber("lbl_num2", randomNumber(1, 6));
  if (getNumber("lbl_num2") == 1) {
    setImageURL("image2", "assets/1.PNG");
  } else if ((getNumber("lbl_num2") == 2)) {
    setImageURL("image2", "assets/2.PNG");
  } else if ((getNumber("lbl_num2") == 3)) {
    setImageURL("image2", "assets/3.PNG");
  } else if ((getNumber("lbl_num2") == 4)) {
    setImageURL("image2", "assets/4.PNG");
  } else if ((getNumber("lbl_num2") == 5)) {
    setImageURL("image2", "assets/5.PNG");
  } else if ((getNumber("lbl_num2") == 6)) {
    setImageURL("image2", "assets/6.PNG");
  }
  setNumber("lbl_total_num", getNumber("lbl_num1") + getNumber("lbl_num2"));
});
