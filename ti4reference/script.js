import { promissories, strategies, technologies, units } from "./dictionary.js";

for (const promissory in promissories){
	var txt = "";
	txt += "<h3>" + promissories[promissory]["name"] + "</h3>";
	txt += "<p>" + promissories[promissory]["desc"] + "</p>";
	document.getElementById("promissories").innerHTML += txt;
}
for (const strategy in strategies){
	var txt = "";
	txt += "<h3>" + strategies[strategy]["name"] + "</h3>";
	txt += "<h4>Primary</h4>";
	txt += "<p>" + strategies[strategy]["primary"] + "</p>";
	txt += "<h4>Secondary</h4>";
	txt += "<p>" + strategies[strategy]["secondary"] + "</p>";
	document.getElementById("strategies").innerHTML += txt;
}
for (const type in technologies){
	var txt = "";
	txt += "<h3>" + technologies[type]["type"] + "</h3>";
	for (const technology in technologies[type]){
		if (technology != "type"){
			txt += "<h4>" + technologies[type][technology]["name"] + "</h4>";
			txt += "<p>" + technologies[type][technology]["desc"] + "</p>";
		}
	}
	document.getElementById("technologies").innerHTML += txt;
}
for (const unit in units){
	var txt = "";
	txt += "<h3>" + units[unit]["name"] + "</h3>";
	txt += "<p>" + units[unit]["type"] + "</p>";
	document.getElementById("units").innerHTML += txt;
}
