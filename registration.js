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

function register(event){ 
	event.preventDefault(); 

	if(confirm("Are You Sure Want to Submit The Data?")){
		var flag = 0;
		var name = document.getElementsByName("name")[0]; 
		var gender = document.querySelector("input[name = 'gender']:checked");
		var email = document.getElementsByName("email")[0];
		var password = document.getElementsByName("pass")[0];
		var rePass = document.getElementsByName("repass")[0];
		var city = document.getElementsByName("City")[0];
		var address = document.getElementsByName("address")[0];

		if(name == null || name.value.length < 3 || name.value.length > 20){
			document.getElementById("name-error").innerHTML = "Name Length Must Between 3 and 20 Characters!";
		}else {
			document.getElementById("name-error").innerHTML = "";
			flag += 1;
		}

		var indexAt = email.value.indexOf("@");
		var indexDot = email.value.lastIndexOf(".");

		if(email == null || indexAt < 1 || (indexDot - indexAt) < 2){
			document.getElementById("email-error").innerHTML = "Wrong Email Format!";
		}else {
			document.getElementById("email-error").innerHTML = "";
			flag += 1;
		}

		if(password == null || password.value.length < 6 || password.value.length > 10){
			document.getElementById("password-error").innerHTML = "Password Length Must Between 6 and 10 Characters!";
		}else {
			document.getElementById("password-error").innerHTML = "";
			flag += 1;
		}

		if(rePass == null || password.value != rePass.value){
			document.getElementById("repass-error").innerHTML = "Confirm Password Doesn't Match With The Password!";
		}else {
			document.getElementById("repass-error").innerHTML = "";
			flag += 1;
		}

		if(address == null || address.value.length < 8 || address.value.length > 50){
			document.getElementById("address-error").innerHTML = "Address Length Must Between 8 and 50 Characters!";
		}else {
			document.getElementById("address-error").innerHTML = "";
			flag += 1;
		}

		if(address.value.indexOf(" Street") == -1){
			document.getElementById("address-error").innerHTML = "Address Must End With 'Street'!";
		}else {
			document.getElementById("address-error").innerHTML = "";
			flag += 1;
		}

		if(gender == null){
			document.getElementById("gender-error").innerHTML = "Gender Must Be Chosen!";
		}else {
			document.getElementById("gender-error").innerHTML = "";
			flag += 1;
		}

		if(city.selectedIndex == 0){
			document.getElementById("city-error").innerHTML = "City Must Be Chosen!";
		}else {
			document.getElementById("city-error").innerHTML = "";
			console.log(city[city.selectedIndex].value);
			flag += 1;
		}
	}

	if (flag == 8){
		alert("Successfully Register!");
		flag = 0;
	}
}

function contact(event){ 
	event.preventDefault(); 

	if(confirm("Are You Sure Want to Submit The Data?")){
		var flag = 0;
		var name = document.getElementsByName("name")[0]; 
		var email = document.getElementsByName("email")[0];
		var message = document.getElementsByName("message")[0];

		if(name == null || name.value.length < 3 || name.value.length > 20){
			document.getElementById("name-error").innerHTML = "Name Length Must Between 3 and 20 Characters!"; 
		}else {
			document.getElementById("name-error").innerHTML = "";
			flag += 1;
		}

		var indexAt = email.value.indexOf("@");
		var indexDot = email.value.lastIndexOf(".");

		if(email == null || indexAt < 1 || (indexDot - indexAt) < 2){
			document.getElementById("email-error").innerHTML = "Wrong Email Format!";
		}else {
			document.getElementById("email-error").innerHTML = "";
			flag += 1;
		}

		if(message == null || message.value.length < 5 || message.value.length > 50){
			document.getElementById("message-error").innerHTML = "Message Length Must Between 5 and 20 Characters!";
		}else {
			document.getElementById("message-error").innerHTML = "";
			flag += 1;
		}
	}

	if (flag == 3){
		alert("Successfully Send!");
		flag = 0;
		document.getElementById("send").style.display = 'none';	
	}
}

var x = window.matchMedia("(max-width: 500px)");
responsiveYoyoTypes(x);
x.addListener(responsiveYoyoTypes);

function responsiveYoyoTypes(x) {
	if (x.matches) {
		document.getElementById("transView").checked = false;
		document.getElementById("buttonClick").checked = true;
	} else {
		document.getElementById("transView").checked = true;
		document.getElementById("buttonClick").checked = false;
	}

	if (document.getElementById("transView").checked == false) {
		document.getElementById("buttonClick").style.display = "block";
	} else {
		document.getElementById("buttonClick").style.display = "none";
	}
}