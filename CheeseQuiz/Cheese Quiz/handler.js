var questions = [["Wie viel gibst du f�r K�se?",
			[["Nicht viel", 2],
			["Ich nehme den K�se meiner Mutter", 4],
			["Einnormaler Preis", 0],
			["Viel", 5],
			["Man bezahlt mich f�r den K�se nehmen", 3],
			["Ich kaufe die Discountmarke", 1]]],
		["Wie isst du K�se?",
			[["Sandwich",1],
			["Croque monsieur", 2],
			["Pasta", 4],
			["Coupelles", 3],
			["Cracker", 5],
			["K�sechips", 0]]],
		["Wie trainierst du?",
			[["Ich spiele mit mienem Hund",0],
			["Cheetos essen ist mein Training", 1],
			["Ja", 2],
			["Nein", 3],
			["Ich laufe Marathons", 4],
			["Swoll.", 5]]],
		["Wie hart gef�llt dir dein K�se?",
			[["Quasi-hart",3],
			["Sechserpackung hart", 0],
			["So hart wie ein M�nchskopf", 5],
			["Harten als dieses Quiz zu machen", 4],
			["Mittel", 1],
			["Keine Pr�ferenz", 4]]],
		["Was ist dein Leiblingsschwiezerberg?",
			[["Matterhorn",1],
			["Nisen", 3],
			["Pilatus", 5],
			["Schilthorn", 2],
			["Defourspitze", 0],
			["Jungfrau", 4]]],
		["Was ist deine Lieblingssprache in der Schwiez",
			[["Franz�sisch",0],
			["Deutsch", 4],
			["Italienisch", 1],
			["Engisch", 2],
			["Geb�rdensprache", 5],
			["Rum�nisch", 3]]]
		];

function generateQuiz(){
	for(var i = 0; i < questions.length; i++){
		var name = "q" + i;
		var div = document.createElement(name);

		var contents = "<br>";
		contents += "<h3>" + questions[i][0] + "</h3>";
		for(var a = 0; a < questions[i][1].length; a++){
			console.log("<input type=\"radio\" id=\"" + (name + a) + "\" name=\"" + (name) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>");
			contents += "<input type=\"radio\" id=\"" + (name + a) + "\" name=\"" + (name) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>";
		}
		contents += "<br>";
		div.innerHTML = contents;

		document.getElementById("questions").appendChild(div);
	}

	document.getElementById("go").style.visibility = "hidden";
	document.getElementById("done").style.visibility = "visible";
}

function scoreQuiz(){
	console.log("scoring quiz");
	document.getElementById("done").style.visibility = "hidden";
	document.getElementById("results").style.visibility = "visible";

	console.log("questions length = " + questions.length);
	var scores = [0,0,0,0,0,0];
	for(var i = 0; i < questions.length; i++){
		console.log("looking at q" + i);
		var radiosID = "q" + i;
		for(var r = 0; r < questions[i][1].length; r++){
			console.log(document.getElementById(radiosID + r))
			if(document.getElementById(radiosID + r).checked){
				console.log("incrementing index " + questions[i][1][r][1]);
				scores[questions[i][1][r][1]]++;
			}
		}
	}
	console.log(scores);

	//set span to max from scores
}
