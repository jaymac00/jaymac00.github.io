import { promissories, strategies, technologies, units } from "./dictionary.js";

export function populatePromissories() {

	document.getElementById("title").innerHTML = "Promissory Notes";
	document.getElementById("content").innerHTML = "";
	for (const promissory in promissories){
		var txt = "";
		txt += "<div class=\"promissories\">";
		txt += "<h3 class=\"promissoryHeader\">" + promissories[promissory]["name"] + "</h3>";
		txt += "<p class=\"promissoryBody\">" + promissories[promissory]["desc"] + "</p>";
		txt += "</div><br>";
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};

export function populateStrategies() {

	document.getElementById("title").innerHTML = "Strategy Cards";
	document.getElementById("content").innerHTML = "";
	for (const strategy in strategies){
		var txt = "";
		txt += "<div class=\"strategies\">";
		txt += "<h3 class=\"strategyHeader\" style=\"background-color:" + strategies[strategy]["color"] + ";\">" + strategies[strategy]["priority"] + " - " + strategies[strategy]["name"] + "</h3>";
		txt += "<div class=\"strategyActions\">";
		txt += "<h4 class=\"primaryHeader\">Primary</h4>";
		txt += "<p class=\"primaryBody\">" + strategies[strategy]["primary"] + "</p>";
		txt += "<h4 class=\"secondaryHeader\">Secondary</h4>";
		txt += "<p class=\"secondaryBody\">" + strategies[strategy]["secondary"] + "</p>";
		txt += "</div></div><br>";
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};

export function populateTechnologies() {

	document.getElementById("title").innerHTML = "Technologies";
	document.getElementById("content").innerHTML = "";
	for (const type in technologies){
		var txt = "";
		txt += "<div class=\"technologyType\">";
		txt += "<h3 class=\"technologyHeader\" style=\"background-color:" + technologies[type]["color"] + ";\">" + technologies[type]["type"] + "</h3>";
		for (const technology in technologies[type]){
			if (technology != "type" && technology != "color"){
				txt += "<div class=\"technologies\">";
				if (technologies[type][technology]["prereq"] != "") {
					txt += "<h4 class=\"technologyName\">" + technologies[type][technology]["name"] + "<br>(Prerequisite - " + technologies[type][technology]["prereq"] + ")</h4>";
				} else {
					txt += "<h4 class=\"technologyName\">" + technologies[type][technology]["name"] + "</h4>";
				}
				txt += "<p class=\"technologyBody\">" + technologies[type][technology]["desc"] + "</p>";
				txt += "</div>";
			}
		}
		txt += "</div><br>";
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};

export function populateUnits() {

	document.getElementById("title").innerHTML = "Units";
	document.getElementById("content").innerHTML = "";
	for (const unit in units){
		var txt = "";
		txt += "<div class=\"units\">";
		txt += "<h3 class=\"unitHeader\">" + units[unit]["name"] + " (" + units[unit]["type"] + ")</h3>";
		txt += "<div class=\"unitStats\">";
		if (units[unit]["abilities"].length > 0) {
			txt += "<p class=\"unitAbilities\">";
			for (const ability in units[unit]["abilities"]) {
				txt += units[unit]["abilities"][ability] + "<br>";
			}
			txt += "</p>";
		}
		txt += "<p class=\"unitBody\">cost: " + units[unit]["cost"] + " | combat: " + units[unit]["combat"] + " | move: " + units[unit]["move"] + " | capacity: " + units[unit]["capacity"] + "</p>";
		if (unit != "mech" && unit != "warSun") {
			txt += "<p class=\"unitUpgrade\"><i>Upgrade to <b>" + units[unit]["upgrade"]["name"] + "<br>(Prerequisite - " + units[unit]["upgrade"]["prereq"] + ")</b></i></p>";
			if (units[unit]["upgrade"]["abilities"].length > 0) {
				txt += "<p class=\"unitUpgradeAbilities\">";
				for (const ability in units[unit]["upgrade"]["abilities"]) {
					txt += units[unit]["upgrade"]["abilities"][ability] + "<br>";
				}
				txt += "</p>";
			}
			txt += "<p class=\"unitUpgradeBody\">cost: " + units[unit]["upgrade"]["cost"] + " | combat: " + units[unit]["upgrade"]["combat"] + " | move: " + units[unit]["upgrade"]["move"] + " | capacity: " + units[unit]["upgrade"]["capacity"] + "</p>";
		} else if (unit == "warSun") {
			txt += "<p class=\"unitUpgrade\"><i>Must research <b>" + units[unit]["upgrade"]["name"] + "<br>(Prerequisite - " + units[unit]["upgrade"]["prereq"] + ")</b></i></p>";
			txt += "<p class=\"unitUpgradeAbilities\">";
			for (const ability in units[unit]["upgrade"]["abilities"]) {
				txt += units[unit]["upgrade"]["abilities"][ability] + "<br>";
			}
			txt += "</p>";
			txt += "<p class=\"unitUpgradeBody\">cost: " + units[unit]["upgrade"]["cost"] + " | combat: " + units[unit]["upgrade"]["combat"] + " | move: " + units[unit]["upgrade"]["move"] + " | capacity: " + units[unit]["upgrade"]["capacity"] + "</p>";
		}
		txt += "</div></div><br>";
		document.getElementById("content").innerHTML += txt;
	}

	return true;
};
