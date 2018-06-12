var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/pythephant.jpg'){
		myImage.setAttribute('src','images/pythephant2.jpg');
	}else{
		myImage.setAttribute('src','images/pythephant.jpg');
	}
}

function setUserName(){
	var myName = prompt("Enter the name to Welcome:");
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Hello, '+ myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storeName = localStorage.getItem('name');
	myHeading.innerHTML = 'Hello, ' + storeName;
}

myButton.onclick = function(){
	setUserName();
}