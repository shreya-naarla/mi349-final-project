function readMore() {
  var halfway = document.getElementById("halfway");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  
  if (halfway.style.display === "none") {
    halfway.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } 
  else {
    halfway.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

