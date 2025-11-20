// core names, descriptions, stats

export const promissoryKeys = ["alliance","ceasefire","politicalSecret","supportForTheThrone","tradeAgreement"];

export const promissories = {
	alliance:{
		name:"Alliance",
		desc:"When you receive this card, if you are not the [color] player, you must place it face up in your play area.<br><br>While this card is in your play area, you can use the [color] player's commander ability, if it is unlocked.<br><br>If you activate a system that contains 1 or more of the [color] player's units, return this card to the [color] player."
	},
	ceasefire:{
		name:"Ceasefire",
		desc:"After the [color] player activates a system that contains 1 or more of your units:<br><br>The [color] player cannot move units into the active system.<br><br>Then, return this card to the [color] player."
	},
	politicalSecret:{
		name:"Political Secret",
		desc:"When an agenda is revealed:<br><br>The [color] player cannot vote, play action cards, or use faction abilities until after that agenda has been resolved.<br><br>Then, return this card to the [color] player."
	},
	supportForTheThrone:{
		name:"Support for the Throne",
		desc:"When you receive this card, if you are not the [color] player, you must place it face-up in your play area and gain 1 Victory Point.<br><br>If you activate a system that contains 1 or more of the [color] player's units or if the [color] player is eliminated, lose 1 Victory Point and return this card to the [color] player."
	},
	tradeAgreement:{
		name:"Trade Agreement",
		desc:"When the [color] player replenishes commodities:<br><br>The [color] player gives you all of their commodities.<br><br>Then, return this card to the [color] player."
	}
};

export const strategyKeys = ["leadership","diplomacy","politics","construction","trade","warfare","technology","imperial"];

export const strategies = {
	leadership:{
		name:"Leadership",
		priority:"1",
		color:"rgba(255, 0, 0, 0.3)",
		primary:"Gain 3 command tokens.<br><br>Spend any amount of influence to gain 1 command token for every 3 influence spent.",
		secondary:"Spend any amount of influence to gain 1 command token for every 3 influence."
	},
	diplomacy:{
		name:"Diplomacy",
		priority:"2",
		color:"rgba(255, 127, 0, 0.3)",
		primary:"Choose 1 system other than the Mecatol Rex system that contains a planet you control; each other player places a command token from their reinforcements in that system. Then ready up to 2 exhausted planets you control.",
		secondary:"Spend 1 token from your strategy pool to ready up to 2 exhausted planets you control."
	},
	politics:{
		name:"Politics",
		priority:"3",
		color:"rgba(255, 255, 0, 0.3)",
		primary:"Choose a player other than the speaker. That player gains the speaker token.<br><br>Draw 2 action cards.<br><br>Look at the top 2 cards of the agenda deck. Place each card on the top or bottom of the deck in any order.",
		secondary:"Spend 1 token from your strategy pool to draw 2 action cards."
	},
	construction:{
		name:"Construction",
		priority:"4",
		color:"rgba(0, 255, 0, 0.3)",
		primary:"Either place 1 structure on a planet you control or use the PRODUCTION ability of 1 of your space docks.<br><br>Place 1 structure on a planet you control.",
		secondary:"Spend 1 token from your strategy pool to place 1 structure on a planet you control."
	},
	trade:{
		name:"Trade",
		priority:"5",
		color:"rgba(0, 255, 255, 0.3)",
		primary:"Gain 3 trade goods.<br><br>Replenish commodities.<br><br>Choose any number of other players. Those players use the secondary ability of this strategy card without spending a command token.",
		secondary:"Spend 1 token from your strategy pool to replenish commodities."
	},
	warfare:{
		name:"Warfare",
		priority:"6",
		color:"rgba(0, 0, 255, 0.3)",
		primary:"Perform a tactical action in any system without placing a command token, even if the system already has your command token in it; that system still counts as being activated. You may redistribute your command tokens before and after this action.",
		secondary:"Spend 1 token from your strategy pool to use the PRODUCTION abilities of the units in your home system."
	},
	technology:{
		name:"Technology",
		priority:"7",
		color:"rgba(0, 0, 127, 0.3)",
		primary:"Research 1 technology.<br><br>Spend 6 resources to research 1 technology.",
		secondary:"Spend 1 token from your strategy pool and 4 resources to research 1 technology."
	},
	imperial:{
		name:"Imperial",
		priority:"8",
		color:"rgba(127, 0, 127, 0.3)",
		primary:"Immediately score 1 public objective if you fulfill its requirements.<br><br>Gain 1 Victory Point if you control Mecatol Rex; otherwise, draw 1 secret objective.",
		secondary:"Spend 1 token from your strategy pool to draw 1 secret objective."
	}
};

export const technologyKeys = ["propulsion","biotic","warfare","cybernetics"];

export const technologies = {
	propulsion:{
		type:"Propulsion",
		color:"rgba(0, 0, 255, 0.3)",
		antimassDeflectors:{
			name:"Antimass Deflectors",
			prereq:"",
			desc:"Your ships can move into and through asteroid fields.<br><br>When other players' units use SPACE CANNON against your units, apply -1 to the result of each die roll."
		},
		darkEnergyTap:{
			name:"Dark Energy Tap",
			prereq:"",
			desc:"After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token.<br><br>Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system."
		},
		gravityDrive:{
			name:"Gravity Drive",
			prereq:"B",
			desc:"After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action."
		},
		slingRelay:{
			name:"Sling Relay",
			prereq:"B",
			desc:"ACTION: Exhaust this card to produce 1 ship in any system that contains one of your space docks."
		},
		fleetLogistics:{
			name:"Fleet Logistics",
			prereq:"BB",
			desc:"During each of your turns of the action phase, you may perform 2 actions instead of one."
		},
		lightWaveDeflector:{
			name:"Light/Wave Deflector",
			prereq:"BBB",
			desc:"Your ships can move through systems that contain other players' ships."
		}
	},
	biotic:{
		type:"Biotic",
		color:"rgba(0, 255, 0, 0.3)",
		neuralMotivator:{
			name:"Neural Motivator",
			prereq:"",
			desc:"During the status phase, draw 2 action cards instead of 1."
		},
		psychoarchaeology:{
			name:"Psychoarchaeology",
			prereq:"",
			desc:"You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted.<br><br>During the action phase, you can exhaust planets you control that have technology specialties to gain 1 trade good."
		},
		dacxiveAnimators:{
			name:"Dacxive Animators",
			prereq:"G",
			desc:"After you win a ground combat, you may place 1 infantry from your reinforcements on that planet."
		},
		bioStims:{
			name:"Bio Stims",
			prereq:"G",
			desc:"You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies."
		},
		hyperMetabolism:{
			name:"Hyper Metabolism",
			prereq:"GG",
			desc:"During the status phase, gain 3 command tokens instead of 2."
		},
		x89BacterialWeapon:{
			name:"X-89 Bacterial Weapon",
			prereq:"GGG",
			desc:"Double the hits produced by your units' BOMBARDMENT and ground combat rolls.<br><br>Exhaust each planet you use BOMBARDMENT against."
		}
	},
	warfare:{
		type:"Warfare",
		color:"rgba(255, 0, 0, 0.3)",
		plasmaScoring:{
			name:"Plasma Scoring",
			prereq:"",
			desc:"When 1 or more of your units use BOMBARDMENT or SPACE CANNON, 1 of those units may roll 1 additional die."
		},
		aiDevelopmentAlgorithm:{
			name:"AI Development Algorithm",
			prereq:"",
			desc:"When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite.<br><br>When 1 or more of your units use PRODUCTION, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own."
		},
		magenDefenseGrid:{
			name:"Magen Defense Grid",
			prereq:"R",
			desc:"When any play activates a system that contains 1 or more of your structures, place 1 infantry from your reinforcements with each of those structures.<br><br>At the start of ground combat on a planet that contains 1 or more of your structures, produce 1 hit and assign it to 1 of your opponent's ground forces."
		},
		selfAssemblyRoutines:{
			name:"Self Assembly Routines",
			prereq:"R",
			desc:"After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet that you control in that system.<br><br>after 1 of your mechs is destroyed, gain 1 trade good."
		},
		duraniumArmor:{
			name:"Duranium Armor",
			prereq:"RR",
			desc:"During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use SUSTAIN DAMAGE during this combat round."
		},
		assaultCannon:{
			name:"Assault Cannon",
			prereq:"RRR",
			desc:"At the start of a space combat that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of their non-fighter ships."
		}
	},
	cybernetics:{
		type:"Cybernetics",
		color:"rgba(255, 255, 0, 0.3)",
		sarweenTools:{
			name:"Sarween Tools",
			prereq:"",
			desc:"When 1 or more of your units use PRODUCTION, reduce the combined cost of the produced units by 1."
		},
		scanlinkDroneNetwork:{
			name:"Scanlink Drone Network",
			prereq:"",
			desc:"At the end of your turn, you may exhaust this card to redistribute your command tokens.<br><br>When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card."
		},
		gravitonLaserSystem:{
			name:"Graviton Laser System",
			prereq:"Y",
			desc:"You may exhaust this card before 1 or more of your units uses SPACE CANNON; hits produced by those units must be assigned to non-fighter ships if able."
		},
		predictiveIntelligence:{
			name:"Predictive Intelligence",
			prereq:"Y",
			desc:"When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units."
		},
		transitDiodes:{
			name:"Transit Diodes",
			prereq:"YY",
			desc:"You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your ground forces from the game board and place them on 1 or more planets you control."
		},
		integratedEconomy:{
			name:"Integrated Economy",
			prereq:"YYY",
			desc:"After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal or less than that planet's resource value."
		}
	}
};

export const unitKeys = ["carrier","cruiser","destroyer","dreadnought","fighter","warSun","infantry","mech","spaceDock","pds"]

export const units = {
	carrier:{
		name:"Carrier",
		type:"Ship",
		cost:"3",
		combat:"9",
		move:"1",
		capacity:"4",
		abilities:[],
		upgrade:{
			prereq:"BB",
			name:"Carrier II",
			type:"Ship",
			cost:"3",
			combat:"9",
			move:"2",
			capacity:"6",
			abilities:[]
		},
		reinforcements:"4"
	},
	cruiser:{
		name:"Cruiser",
		type:"Ship",
		cost:"2",
		combat:"7",
		move:"2",
		capacity:"-",
		abilities:[],
		upgrade:{
			prereq:"GRY",
			name:"Cruiser II",
			type:"Ship",
			cost:"2",
			combat:"6",
			move:"3",
			capacity:"1",
			abilities:[]
		},
		reinforcements:"8"
	},
	destroyer:{
		name:"Destroyer",
		type:"Ship",
		cost:"1",
		combat:"9",
		move:"2",
		capacity:"-",
		abilities:["Anti-Fighter Barrage 9*2"],
		upgrade:{
			prereq:"RR",
			name:"Destroyer II",
			type:"Ship",
			cost:"1",
			combat:"8",
			move:"2",
			capacity:"1",
			abilities:["Anti-Fighter Barrage 6*3"]
		},
		reinforcements:"8"
	},
	dreadnought:{
		name:"Dreadnought",
		type:"Ship",
		cost:"4",
		combat:"5",
		move:"1",
		capacity:"1",
		abilities:["Sustain Damage","Bombardment 5"],
		upgrade:{
			prereq:"BBY",
			name:"Dreadnought II",
			type:"Ship",
			cost:"4",
			combat:"5",
			move:"2",
			capacity:"1",
			abilities:["Sustain Damage","Bombardment 5"]
		},
		reinforcements:"5"
	},
	fighter:{
		name:"Fighter",
		type:"Ship",
		cost:"0.5",
		combat:"9",
		move:"-",
		capacity:"-",
		abilities:[],
		upgrade:{
			prereq:"BG",
			name:"Fighter II",
			type:"Ship",
			cost:"0.5",
			combat:"8",
			move:"2",
			capacity:"-",
			abilities:[]
		},
		reinforcements:"10"
	},
	warSun:{
		name:"War Sun",
		type:"Ship",
		cost:"-",
		combat:"-",
		move:"-",
		capacity:"-",
		abilities:[],
		upgrade:{
			prereq:"RRRY",
			name:"War Sun",
			type:"Ship",
			cost:"12",
			combat:"3*3",
			move:"2",
			capacity:"6",
			abilities:["Sustain Damage","Bombardment 3*3"]
		},
		reinforcements:"2"
	},
	infantry:{
		name:"Infantry",
		type:"Ground Unit",
		cost:"0.5",
		combat:"8",
		move:"-",
		capacity:"-",
		abilities:[],
		upgrade:{
			prereq:"GG",
			name:"Infantry II",
			type:"Ground Unit",
			cost:"0.5",
			combat:"7",
			move:"-",
			capacity:"-",
			abilities:[]
		},
		reinforcements:"12"
	},
	mech:{
		name:"Mech",
		type:"Ground Unit",
		cost:"2",
		combat:"6",
		move:"-",
		capacity:"-",
		abilities:["Sustain Damage"],
		upgrade:{
			prereq:"-",
			name:"-",
			type:"-",
			cost:"-",
			combat:"-",
			move:"-",
			capacity:"-",
			abilities:[]
		},
		reinforcements:"4"
	},
	spaceDock:{
		name:"Space Dock",
		type: "Structure",
		cost:"-",
		combat:"-",
		move:"-",
		capacity:"-",
		abilities:["Production +2"],
		upgrade:{
			prereq:"YY",
			name:"Space Dock II",
			type:"Structure",
			cost:"-",
			combat:"-",
			move:"-",
			capacity:"-",
			abilities:["Production +4"]
		},
		reinforcements:"3"
	},
	pds:{
		name:"PDS",
		type:"Structure",
		cost:"-",
		combat:"-",
		move:"-",
		capacity:"-",
		abilities:["Planetary Shield","Space Cannon 6"],
		upgrade:{
			prereq:"RY",
			name:"PDS II",
			type:"Structure",
			cost:"-",
			combat:"-",
			move:"-",
			capacity:"-",
			abilities:["Planetary Shield","Space Cannon 5"]
		},
		reinforcements:"6"
	}
};
