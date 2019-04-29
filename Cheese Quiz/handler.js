function generateQuiz(){
	var questions = [["Wie viel gibst du für Käse?",
				[["Nicht viel", 2],
				["Ich nehme den Käse meiner Mutter", 4],
				["Einnormaler Preis", 0],
				["Viel", 5],
				["Man bezahlt mich für den Käse nehmen", 3],
				["Ich kaufe die Discountmarke", 1]]],
			["Wie isst du Käse?",
				[["Sandwich",1],
				["Croque monsieur", 2],
				["Pasta", 4],
				["Coupelles", 3],
				["Cracker", 5],
				["Käsechips", 0]]],
			["Wie trainierst du?",
				[["Ich spiele mit mienem Hund",0],
				["Cheetos essen ist mein Training", 1],
				["Ja", 2],
				["Nein", 3],
				["Ich laufe Marathons", 4],
				["Swoll.", 5]]],
			["Wie hart gefällt dir dein Käse?",
				[["Quasi-hart",3],
				["Sechserpackung hart", 0],
				["So hart wie ein Mönchskopf", 5],
				["Harten als dieses Quiz zu machen", 4],
				["Mittel", 1],
				["Keine Präferenz", 4]]],
			["Was ist dein Leiblingsschwiezerberg?",
				[["Matterhorn",1],
				["Nisen", 3],
				["Pilatus", 5],
				["Schilthorn", 2],
				["Defourspitze", 0],
				["Jungfrau", 4]]],
			["Was ist deine Lievlingssprache in der Schwiez",
				[["Französisch",0],
				["Deutsch", 4],
				["Italienisch", 1],
				["Engisch", 2],
				["Gebärdensprache", 5],
				["Rumänisch", 3]]]	
			];
	for(var i = 0; i < questions.length; i++){
		var name = "q" + i;
		var div = document.createElement(name);
		
		var contents = "<br>";	
		contents += "<h3>" + questions[i][0] + "</h3>";
		for(var a = 0; a < questions[i][1].length; a++){
			console.log("<input type=\"radio\" name=\"" + (name) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>");
			contents += "<input type=\"radio\" name=\"" + (name) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>";
		}
		contents += "<br>";	
		div.innerHTML = contents;

		document.getElementById("questions").appendChild(div);
	}

	document.getElementById("go").style.visibility = "hidden";
	document.getElementById("done").style.visibility = "visible";
}

function scoreQuiz(){
	console.log("scoreing quiz");
	document.getElementById("done").style.visibility = "hidden";
	document.getElementById("results").style.visibility = "visible";

	var scores = [0,0,0,0,0,0];
	for(var i = 0; i < questions.length; i++){
		var radios = //get buttons
		for(var r = 0; r < 6; r++){
			if(document.getElementById(
		}
	}
}

