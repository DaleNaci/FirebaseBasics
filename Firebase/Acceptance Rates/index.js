var inputText = document.getElementById("inputText");
var searchBtn = document.getElementById("searchBtn");
var percentageText = document.getElementById("percentageText");


function searchClick() {

	var input = inputText.value;

	var percentageTextRef = firebase.database().ref().child(input);

	var firebaseRef = firebase.database().ref();

	percentageTextRef.on('value', function(datasnapshot) {
		percentageText.innerText = datasnapshot.val();
	})

}