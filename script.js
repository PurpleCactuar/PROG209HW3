document.addEventListener("DOMContentLoaded", function(event) {
			// Define the original array
			var origArray = [2, 3, 4];

			// Write the values of the origArray into the 3 textboxes
			document.getElementById("textbox1").value = origArray[0];
			document.getElementById("textbox2").value = origArray[1];
			document.getElementById("textbox3").value = origArray[2];

			// Add event listeners for the 2nd and 3rd buttons
			document.getElementById("button2").addEventListener("click", function() {
				// Cube the values in the origArray
				var newArray = origArray.map(function(x) {
					return x * x * x;
				});

				// Write out the new values into the HTML textboxes
				document.getElementById("textbox1").value = newArray[0];
				document.getElementById("textbox2").value = newArray[1];
				document.getElementById("textbox3").value = newArray[2];
			});

			document.getElementById("button3").addEventListener("click", fourthPowerValues);
		});

		function squareValues() {
			// Define the original array
			var origArray = [2, 3, 4];

			// Square the values in the origArray
			var newArray = origArray.map(function(x) {
				return x * x;
			});

			// Write out the new values into the HTML textboxes
			document.getElementById("textbox1").value = newArray[0];
			document.getElementById("textbox2").value = newArray[1];
			document.getElementById("textbox3").value = newArray[2];
		}

		function fourthPowerValues() {
			// Define the original array
			var origArray = [2, 3, 4];

			// Take the 4th power of the values in the origArray
			var newArray = origArray.map(function(x) {
				return Math.pow(x, 4);
			});

			// Write out the new values into the HTML textboxes
			document.getElementById("textbox1").value = newArray[0];
			document.getElementById("textbox2").value = newArray[1];
			document.getElementById("textbox3").value = newArray[2];
		}
