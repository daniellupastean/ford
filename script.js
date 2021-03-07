function myFunction1() {
  var x = document.getElementById("imagini");
  if (x.style.display === "none" || x.style.display === '') {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function myFunction() {
    var x = document.getElementById("scris");
    if (x.style.display === "none" || x.style.display === '') {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



var vid1 = document.getElementById("myVideo1");
var vid2 = document.getElementById("myVideo2");
vid1.volume = 0.1;
vid2.volume = 0.1;