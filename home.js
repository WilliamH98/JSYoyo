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

function validasiEmail(){
	var subsEmail = document.getElementById("email").value;
	indexAt = subsEmail.indexOf("@");
	indexDot = subsEmail.lastIndexOf(".");

	if (indexAt < 1 || (indexDot - indexAt < 2))
	{
		alert("Please enter correct Email");
		return false;
	}

	alert("Thank you for subscribing");
	return( true );
}

function buy(){
	var qty = document.getElementById("qty").value;

	if(qty < 1){
		alert("Please Order At Least 1 Item!");
	}else{
		alert("Successfully Add Item to Cart");
		document.getElementById("qty").value = "";
	}
}

function buyBas(){
	var qty = document.getElementById("qty").value;
	var qty2 = document.getElementById("qty2").value;
	var qty3 = document.getElementById("qty3").value;
	var qty4 = document.getElementById("qty4").value;
	var qty5 = document.getElementById("qty5").value;
	var qty6 = document.getElementById("qty6").value;
	var qty7 = document.getElementById("qty7").value;
	var qty8 = document.getElementById("qty8").value;

	if(qty < 1 && qty2 < 1 && qty3 < 1 && qty4 < 1 && qty5 < 1 && qty6 < 1 && qty7 < 1 && qty8 < 1){
		alert("Please Order At Least 1 Item!");
	}else{
		alert("Successfully Add Item to Cart");
		document.getElementById("qty").value = "";
		document.getElementById("qty2").value = "";
		document.getElementById("qty3").value = "";
		document.getElementById("qty4").value = "";
		document.getElementById("qty5").value = "";
		document.getElementById("qty6").value = "";
		document.getElementById("qty7").value = "";
		document.getElementById("qty8").value = "";
	}
}

function buyPro(){
	var qty = document.getElementById("qty").value;
	var qty2 = document.getElementById("qty2").value;
	var qty3 = document.getElementById("qty3").value;
	var qty4 = document.getElementById("qty4").value;
	var qty5 = document.getElementById("qty5").value;
	var qty6 = document.getElementById("qty6").value;

	if(qty < 1 && qty2 < 1 && qty3 < 1 && qty4 < 1 && qty5 < 1 && qty6 < 1){
		alert("Please Order At Least 1 Item!");
	}else{
		alert("Successfully Add Item to Cart");
		document.getElementById("qty").value = "";
		document.getElementById("qty2").value = "";
		document.getElementById("qty3").value = "";
		document.getElementById("qty4").value = "";
		document.getElementById("qty5").value = "";
		document.getElementById("qty6").value = "";
	}
}


function checkBoxActive(){
	var checkBox = document.getElementById("imageClick1");
	var checkBox2 = document.getElementById("imageClick2");
	var header = document.getElementById("basicHeader");
	var header2 = document.getElementById("professionalHeader");
	var des1 = document.getElementById("desImage1");
	var des2 = document.getElementById("desImage2");

	if(checkBox.checked == true){
		header.style.display = "none";
		// des1.style.display = "block";	
	}else if(checkBox.checked == false){
		header.style.display = "block";
		// des1.style.display = "none";	
	}

	if(checkBox2.checked == true){
		header2.style.display = "none";
		// des2.style.display = "block";	
	}else if(checkBox2.checked == false){
		header2.style.display = "block";
		// des2.style.display = "none";	
	}
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// 	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
// 	    document.getElementById("logo").style.height = "10px";
// 	    document.getElementById("logo").style.display = "none";
// 	   	document.getElementsByClassName("menuList").style.height = "10px";
// 	} else {
// 	    document.getElementById("logo").style.display = "block";
// 	}
// }

var x = window.matchMedia("(max-width: 500px)");
responsiveYoyoTypes(x);
x.addListener(responsiveYoyoTypes);

function responsiveYoyoTypes(x) {
	if (x.matches) {
		document.getElementById("transView").checked = false;
		// document.getElementById("changeView").checked = false;
		document.getElementById("buttonClick").checked = true;
	} else {
		document.getElementById("transView").checked = true;
		// document.getElementById("changeView").checked = true;
		document.getElementById("buttonClick").checked = false;
	}

	if (document.getElementById("transView").checked == false) {
		document.getElementById("buttonClick").style.display = "block";
	} else {
		document.getElementById("buttonClick").style.display = "none";
	}
}


