var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];//declares array of 5 images
var x = 0;
var imgs = document.getElementById("imgs");

setInterval(slider, 2000);//calls function slider every 2 seconds

function slider() {
  if (x < images.length) {
    x += 1;
  } else {
    x = 1;
  }
  imgs.innerHTML = "<img src=./pictures/sliderImages/" + images[x - 1] + ">";
}//changes image accordingly

function validateForm() {
  var fname = document.getElementById("fname").value; //calls the values of first name
  var lname = document.getElementById("lname").value;//calls the values of last name
  var email = document.getElementById("email").value;//calls the values of email
  var gender = document.querySelector('input[name="gender"]:checked');//calls the value of gender
  var feedback = document.getElementById("feedback").value;//calls the values of feedback message
  

  if (
    fname === "" ||
    lname === "" ||
    email === "" ||
    gender === null ||
    feedback === "" ||
    email === ""
  ) {
    alert("Please fill in all required fields");
    return false;
  } else {
    alert("Thank you for your feedback.");
  }
  return false;
}//checks if the form is valid to send or not

function togglePopup(pdfFile) {
  var popup = document.getElementById("pdfPopup");
  var pdfViewer = document.getElementById("pdfViewer");
  var pdfPath = "../cvs/" + pdfFile;

  pdfViewer.src = pdfPath;
  popup.style.display = "block";
}//displays the cvs of members

function closePopup() {
  var popup = document.getElementById("pdfPopup");
  var pdfViewer = document.getElementById("pdfViewer");
  pdfViewer.src = "";
  popup.style.display = "none";
}//removes the cvs of members
