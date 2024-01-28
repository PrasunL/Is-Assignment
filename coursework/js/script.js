var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var x = 0;
var imgs = document.getElementById("imgs");

setInterval(slider, 2000);

function slider() {
  if (x < images.length) {
    x += 1;
  } else {
    x = 1;
  }
  imgs.innerHTML = "<img src=./pictures/sliderImages/" + images[x - 1] + ">";
}

function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var feedback = document.getElementById("feedback").value;

  if (fname === "" || lname === "" || email === "" || gender === null || feedback === "" || email ==="") {
      alert("Please fill in all required fields");
      return false;
  }
  else{
    alert("Thank you for your feedback.");
  }
  return false;
}

