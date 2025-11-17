import { promissories, strategies, technologies, units } from "./dictionary.js";

export function populatePromissories() {

	document.getElementById("title").innerHTML = "Promissory Notes";
	document.getElementById("content").innerHTML = "";
	for (const promissory in promissories){
		var txt = "";
		txt += "<h3>" + promissories[promissory]["name"] + "</h3>";
		txt += "<p>" + promissories[promissory]["desc"] + "</p>";
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};

export function populateStrategies() {

	document.getElementById("title").innerHTML = "Strategy Cards";
	document.getElementById("content").innerHTML = "";
	for (const strategy in strategies){
		var txt = "";
		txt += "<h3>" + strategies[strategy]["priority"] + " - " + strategies[strategy]["name"] + "</h3>";
		txt += "<h4>Primary</h4>";
		txt += "<p>" + strategies[strategy]["primary"] + "</p>";
		txt += "<h4>Secondary</h4>";
		txt += "<p>" + strategies[strategy]["secondary"] + "</p>";
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};

export function populateTechnologies() {

	document.getElementById("title").innerHTML = "Technologies";
	document.getElementById("content").innerHTML = "";
	for (const type in technologies){
		var txt = "";
		txt += "<h3>" + technologies[type]["type"] + "</h3>";
		for (const technology in technologies[type]){
			if (technology != "type"){
				if (technologies[type][technology]["prereq"] != "") {
					txt += "<h4>" + technologies[type][technology]["name"] + " (Prerequisite: " + technologies[type][technology]["prereq"] + ")</h4>";
				} else {
					txt += "<h4>" + technologies[type][technology]["name"] + "</h4>";
				}
				txt += "<p>" + technologies[type][technology]["desc"] + "</p>";
			}
		}
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};

export function populateUnits() {

	document.getElementById("title").innerHTML = "Units";
	document.getElementById("content").innerHTML = "";
	for (const unit in units){
		var txt = "";
		txt += "<h3>" + units[unit]["name"] + " (" + units[unit]["type"] + ")</h3>";
		if (units[unit]["abilities"].length > 0) {
			for (const ability in units[unit]["abilities"]) {
				txt += "<p>" + units[unit]["abilities"][ability] + "</p>";
			}
		}
		txt += "<p>cost: " + units[unit]["cost"] + " | combat: " + units[unit]["combat"] + " | move: " + units[unit]["move"] + " | capacity: " + units[unit]["capacity"] + "</p>";
		if (unit != "mech" && unit != "warSun") {
			txt += "<p><i>Upgrade to <b>" + units[unit]["upgrade"]["name"] + "</b>:</i></p>";
			if (units[unit]["upgrade"]["abilities"].length > 0) {
				for (const ability in units[unit]["upgrade"]["abilities"]) {
					txt += "<p>" + units[unit]["upgrade"]["abilities"][ability] + "</p>";
				}
			}
			txt += "<p>cost: " + units[unit]["upgrade"]["cost"] + " | combat: " + units[unit]["upgrade"]["combat"] + " | move: " + units[unit]["upgrade"]["move"] + " | capacity: " + units[unit]["upgrade"]["capacity"] + "</p>";
		} else if (unit == "warSun") {
			txt += "<p><i>Must research this unit's upgrade technology to produce this unit:</i></p>";
			for (const ability in units[unit]["upgrade"]["abilities"]) {
				txt += "<p>" + units[unit]["upgrade"]["abilities"][ability] + "</p>";
			}
			txt += "<p>cost: " + units[unit]["upgrade"]["cost"] + " | combat: " + units[unit]["upgrade"]["combat"] + " | move: " + units[unit]["upgrade"]["move"] + " | capacity: " + units[unit]["upgrade"]["capacity"] + "</p>";
		}
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};
