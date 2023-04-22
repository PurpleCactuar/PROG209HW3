document.addEventListener("DOMContentLoaded", function(event) {
		// original array
		var origArray = [2, 3, 4];

		// put in the textboxes
			document.getElementById("textbox1").value = origArray[0];
			document.getElementById("textbox2").value = origArray[1];
			document.getElementById("textbox3").value = origArray[2];

		// event listeners for 2nd and 3rd buttons
			document.getElementById("button2").addEventListener("click", function() {
			// Cube the values
			var newArray = origArray.map(function(x) {
				return x * x * x;
				});

			// new values
			document.getElementById("textbox1").value = newArray[0];
			document.getElementById("textbox2").value = newArray[1];
			document.getElementById("textbox3").value = newArray[2];
			});

			document.getElementById("button3").addEventListener("click", fourthPowerValues);
		});

		function squareValues() {
			// original array
			var origArray = [2, 3, 4];

			// square the values
			var newArray = origArray.map(function(x) {
				return x * x;
			});

			// new values
			document.getElementById("textbox1").value = newArray[0];
			document.getElementById("textbox2").value = newArray[1];
			document.getElementById("textbox3").value = newArray[2];
		}

		function fourthPowerValues() {
			// original array
			var origArray = [2, 3, 4];

			// 4th power
			var newArray = origArray.map(function(x) {
				return Math.pow(x, 4);
			});

			// new values
			document.getElementById("textbox1").value = newArray[0];
			document.getElementById("textbox2").value = newArray[1];
			document.getElementById("textbox3").value = newArray[2];
		}
