var titleText = document.getElementById("titleText");
var submitBtn = document.getElementById("submitBtn");
var headingText = document.getElementById("headingText");

var headingTextRef = firebase.database().ref().child("Title");

function submitClick() {

	var firebaseRef = firebase.database().ref();

	var title = titleText.value;

	firebaseRef.child("Title").set(title);

	headingTextRef.on('value', function(datasnapshot) {
		headingText.innerText = datasnapshot.val();
	});

}