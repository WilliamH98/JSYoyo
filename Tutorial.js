window.onscroll = function() {stickyFunction()};

var header = document.getElementById("navHeader");
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var x = document.getElementsByClassName("myImages");
    var i;
  if (n > x.length) {slideIndex = 1}    
  else if (n < 1) {slideIndex = x.length}

  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }    

  x[slideIndex-1].style.display = "block";
  
  document.getElementById("currentSlide").innerHTML = slideIndex;

  if(slideIndex == 1){
    document.getElementById("desc1").style.display = "block";
  }else {
    document.getElementById("desc1").style.display = "none";
  }

  if(slideIndex == 2){
    document.getElementById("desc2").style.display = "block";
  }else {
    document.getElementById("desc2").style.display = "none";
  }

  if(slideIndex == 3){
    document.getElementById("desc3").style.display = "block";
  }else {
    document.getElementById("desc3").style.display = "none";
  }

  if(slideIndex == 4){
    document.getElementById("desc4").style.display = "block";
  }else {
    document.getElementById("desc4").style.display = "none";
  }

  if(slideIndex == 5){
    document.getElementById("desc5").style.display = "block";
  }else {
    document.getElementById("desc5").style.display = "none";
  }

  if(slideIndex == 6){
    document.getElementById("desc6").style.display = "block";
  }else {
    document.getElementById("desc6").style.display = "none";
  }
  if(slideIndex == 7){
    document.getElementById("desc7").style.display = "block";
  }else {
    document.getElementById("desc7").style.display = "none";
  }

  if(slideIndex == 8){
    document.getElementById("desc8").style.display = "block";
  }else {
    document.getElementById("desc8").style.display = "none";
  }

  if(slideIndex == 9){
    document.getElementById("desc9").style.display = "block";
  }else {
    document.getElementById("desc9").style.display = "none";
  }
  if(slideIndex == 10){
    document.getElementById("desc10").style.display = "block";
  }else {
    document.getElementById("desc10").style.display = "none";
  }

  if(slideIndex == 11){
    document.getElementById("desc11").style.display = "block";
  }else {
    document.getElementById("desc11").style.display = "none";
  }

  if(slideIndex == 12){
    document.getElementById("desc12").style.display = "block";
  }else {
    document.getElementById("desc12").style.display = "none";
  }
  if(slideIndex == 13){
    document.getElementById("desc13").style.display = "block";
  }else {
    document.getElementById("desc13").style.display = "none";
  }

  if(slideIndex == 14){
    document.getElementById("desc14").style.display = "block";
  }else {
    document.getElementById("desc14").style.display = "none";
  }

  if(slideIndex == 15){
    document.getElementById("desc15").style.display = "block";
  }else {
    document.getElementById("desc15").style.display = "none";
  }
  if(slideIndex == 16){
    document.getElementById("desc16").style.display = "block";
  }else {
    document.getElementById("desc16").style.display = "none";
  }

  if(slideIndex == 17){
    document.getElementById("desc17").style.display = "block";
  }else {
    document.getElementById("desc17").style.display = "none";
  }

  if(slideIndex == 18){
    document.getElementById("desc18").style.display = "block";
  }else {
    document.getElementById("desc18").style.display = "none";
  }
  if(slideIndex == 19){
    document.getElementById("desc19").style.display = "block";
  }else {
    document.getElementById("desc19").style.display = "none";
  }

  if(slideIndex == 20){
    document.getElementById("desc20").style.display = "block";
  }else {
    document.getElementById("desc20").style.display = "none";
  }

  if(slideIndex == 21){
    document.getElementById("desc21").style.display = "block";
  }else {
    document.getElementById("desc21").style.display = "none";
  }

    if(slideIndex == 22){
    document.getElementById("desc22").style.display = "block";
  }else {
    document.getElementById("desc22").style.display = "none";
  }
}


