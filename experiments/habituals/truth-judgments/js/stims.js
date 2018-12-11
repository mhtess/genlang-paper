var stimuli = [
{
	habitual: "hikes",
	25: {hab: "once a year", 
		past: {tense: "hiked", instances: "1 time", pastTimeWindow: "year"}
	},
	50: {hab: "every couple months",
		past: {tense: "hiked", instances: "4 times", pastTimeWindow: "year"}
	},
	75: {hab: "once a month",
		past: {tense: "hiked", instances: "12 times", pastTimeWindow: "year"}
	}
},{
	habitual: "runs",
	25: {hab: "three times a year",
		past: {tense: "ran", instances: "3 times", pastTimeWindow: "year"}
	},
	50: {hab: "twice a month",
		past: {tense: "ran", instances: "25 times", pastTimeWindow: "year"}
	},
	75: {hab: "twice a week",
		past: {tense: "ran", instances: "120 times", pastTimeWindow: "year"}
	}
},{
	habitual: "smokes",
	25: {hab: "once a week",
		past: {tense: "smoked", instances: "1 time", pastTimeWindow: "week"}
	},
	50: {hab: "once a day",
		past: {tense: "smoked", instances: "7 times", pastTimeWindow: "week"}
	},
	75: {hab: "ten times a day",
		past: {tense: "smoked", instances: "70 times", pastTimeWindow: "week"}
	}
},{
	habitual:"drives to work",
	25: {hab: "3 times a week",
		past: {tense: "drove to work", instances: "3 times", pastTimeWindow: "week"}
	},
	50: {hab: "4 times a week",
		past: {tense: "drove to work", instances: "4 times", pastTimeWindow: "week"}
	},
	75: {hab: "5 times a week",
		past: {tense: "drove to work", instances: "5 times", pastTimeWindow: "week"}
	}
},{
	habitual:"bikes to work",
	25: {hab: "once or twice a month",
		past: {tense: "biked to work", instances: "2 times", pastTimeWindow: "month"}
	},
	50: {hab: "once or twice a week",
		past: {tense: "biked to work", instances: "6 times", pastTimeWindow: "month"}
	},
	75: {hab: "six times a week",
		past: {tense: "biked to work", instances: "24 times", pastTimeWindow: "month"}
	}
},{
	habitual:"vacations in Switzerland",
	25: {hab: "once in a life time",
		past: {tense: "vacationed in Switzerland", instances: "1 time", pastTimeWindow: "10 years"}
	},
	50: {hab: "twice in a life time",
		past: {tense: "vacationed in Switzerland", instances: "2 times", pastTimeWindow: "10 years"}
	},
	75: {hab: "six times in a life time",
		past: {tense: "vacationed in Switzerland", instances: "6 times", pastTimeWindow: "10 years"}
	}
},{
	habitual:"eats granola for breakfast",
	25: {hab: "once or twice a month",
		past: {tense: "ate granola for breakfast", instances:"2 times", pastTimeWindow: "month"}
	},
	50: {hab: "once a week",
		past: {tense: "ate granola for breakfast", instances:"5 times", pastTimeWindow: "month"}
	}, 
	75: {hab: "three times a week",
		past: {tense: "ate granola for breakfast", instances:"15 times", pastTimeWindow: "month"}
	}
},{
	habitual: "plays computer games",
	25: {hab: "twice a week",
		past: {tense: "played computer games", instances: "2 times", pastTimeWindow: "week"}
	},
	50: {hab: "four times a week",
		past: {tense: "played computer games", instances: "4 times", pastTimeWindow: "week"}
	},
	75: {hab: "once a day",
		past: {tense: "played computer games", instances: "7 times", pastTimeWindow: "week"}
	}
},{
	habitual:"writes novels",
	25: {hab: "5 times in a life time",
		past: {tense: "wrote", instances: "2 novels", pastTimeWindow: "10 years"}
	},
	50: {hab: "20 times in a life time",
		past: {tense: "wrote", instances: "10 novels", pastTimeWindow: "10 years"}
	},
	75: {hab: "twice a year",
		past: {tense: "wrote", instances: "20 novels", pastTimeWindow: "10 years"}
	}
},{
	habitual:"writes poems",
	25: {hab: "once every ten years",
		past: {tense: "wrote", instances: "1 poem", pastTimeWindow: "5 years"}
	},
	50: {hab: "once every other year",
		past: {tense: "wrote", instances: "5 poems", pastTimeWindow: "5 years"}
	},
	75: {hab: "three times a year",
		past: {tense: "wrote", instances: "30 poems", pastTimeWindow: "5 years"}
	}
},{
	habitual:"drinks beer",
	25: {hab: "once a week",
		past: {tense: "drank", instances: "1 beer", pastTimeWindow: "month"}
	},
	50: {hab: "twice a week",
		past: {tense: "drank", instances: "5 beers", pastTimeWindow: "month"}
	},
	75: {hab: "three times a week",
		past: {tense: "drank", instances: "15 beers", pastTimeWindow: "month"}
	}
},{
	habitual:"steals cars",
	25: {hab: "once in a life time",
		past: {tense: "stole", instances: "1 car", pastTimeWindow: "10 years"}
	},
	50: {hab: "five times in a life time",
		past: {tense: "stole", instances: "2 cars", pastTimeWindow: "10 years"}
	},
	75: {hab: "once every other year",
		past: {tense: "stole", instances: "5 cars", pastTimeWindow: "10 years"}
	}
// },{
// 	habitual:"fails at something",
// 	25: {hab: "three times a year",
// 		past: {tense: "failed at something", instances: "6 times", pastTimeWindow: "2 years"}
// 	},
// 	50: {hab: "once or twice a month",
// 		past: {tense: "failed at something", instances: "18 times", pastTimeWindow: "year"}
// 	},
// 	75:"once or twice a week"
// 		past: {tense: "failed at something", instances: "75 times", pastTimeWindow: "year"}
// 	}
}
];


var characters = [
{
	name: "Daniel",
	gender: "male"
},
{
	name: "David",
	gender: "male"
},
{
	name: "Alexander",
	gender: "male"
},
{
	name: "Gabriel",
	gender: "male"
},
{
	name: "Anthony",
	gender: "male"
},
{
	name: "William",
	gender: "male"
},
{
	name: "John",
	gender: "male"
},
{
	name: "Tom",
	gender: "male"
},
{
	name: "Lucas",
	gender: "male"
},
{
	name: "Michael",
	gender: "male"
},
{
	name: "Eric",
	gender: "male"
},
{
	name: "Cameron",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Lee",
	gender: "male"
},
{
	name: "Greg",
	gender: "male"
},
{
	name: "Angela",
	gender: "female"
},
{
	name: "Jennifer",
	gender: "female"	
},
{
	name: "Monica",
	gender: "female"
},
{
	name: "Melinda",
	gender: "female"
},
{
	name: "Veronica",
	gender: "female"	
},
{
	name: "Alicia",
	gender: "female"
},
{
	name: "Maya",
	gender: "female"
},
{
	name: "Sophia",
	gender: "female"
},
{
	name: "Kim",
	gender: "female"
},
{
	name: "Laura",
	gender: "female"
},
{
	name: "Julia",
	gender: "female"
},
{
	name: "Michelle",
	gender: "female"
},
{
	name: "Stephanie",
	gender: "female"
},
{
	name: "Claire",
	gender: "female"
},
{
	name: "Kathleen",
	gender: "female"
}]	
