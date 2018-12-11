// same as /backfiring-words/experiments/priors/stims-2.js

var stimuli = [
{
	habitual: "hikes",
	past: "went on a hike",
	category: "hobby",
	verb: "go on a hike",
	frequency: ["2 years","year","2 months","week"],
	preventative: {
		verb: "was in a motorcycle accident and",
		obj: "will never walk again"
		// requires: "possessive"
	},
	enabling: {
		verb: "remembered how much fun those times were",
		obj: "and bought a lot of new hiking gear"
	},
	filler: {
		verb: "was in a motorcycle accident and got",
		obj: "license suspended",
		requires:"possessive"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "week"
	// prevent_test_freq: ["2 years", "2 months"]
},
{
	habitual: "runs",
	past: "went for a run",
	category: "hobby",
	verb: "go for a run",
	frequency: ["2 years","year","2 months","week"],
	preventative: {
		verb: "was in a car accident and",
		obj: "became permanently paralyzed from the waist down",
		// requires: "possessive"
	},
	enabling: {
		verb: "remembered how much fun those times were",
		obj: "and bought a new pair of running shoes"
	},
	filler: {
		verb: "was in a car accident and",
		obj: "has to go to driving school",
		// requires: "possessive"
	},
	prevent_test_freq: ["2 months"],
	predict_test_freq: "week"
},
{
	habitual: "plays the banjo",
	past: "played the banjo",
	category: "hobby",
	verb:"play the banjo",
	frequency: ["5 years","2 years","year"],
	preventative: {
		verb: "developed crippling arthritis in",
		obj: "hands and no longer can play musical instruments",
		requires: "possessive"
	},
	enabling: {
		verb: "remembered how much fun that was and joined",
		obj: "friend's band as the banjoist",
		requires: "possessive"
	},
	filler: {
		verb: "developed a rash on",
		obj: "leg and has to put ointment on it",
		requires: "possessive"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "week"
	// enabling: "really enjoys playing the banjo"
},
{
	habitual: "plays tennis",
	past: "played tennis",
	category: "hobby",
	verb:"play tennis",
	frequency: ["5 years","2 years","year"],
	preventative: {
		verb: "developed crippling arthritis in both elbows and can only move",
		obj: "arms extremely slowly",
		requires: "possessive"
	},
	enabling: {
		verb: "remembered how much fun that was",
		obj: "and bought a new tennis racket"
	},
	filler: {
		verb: "developed a soreness on",
		obj: "neck and has to put ice on it every night",
		requires: "possessive"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "week"
},
{
	habitual: "climbs mountains",
	past: "climbed a mountain",
	category: "hobby",
	verb: "climb mountains",
	frequency: ["5 years","2 years","year"],
	preventative: {
		verb: "turned 80 and gave up all strenuous physical exercise because",
		obj: "doctor said it would be deadly",
		requires: "possessive"
	},
	enabling: {
		verb: "remembered how much fun that was",
		obj: "bought a lot of new mountain climbing gear"
	},
	filler: {
		verb: "turned 80 and started taking Vitamin B pills because",
		obj: "doctor said it would be helpful",
		requires: "possessive"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "year"
},
{
	habitual: "wears a suit",
	past: "wore a suit",
	verb:"wear a suit",
	category: "clothing",
	verb: "wear suits",
	frequency: ["6 months","month","week"],
	preventative:{
		verb: "got fired from",
		obj: "job on Wall Street and now works in a pizza parlor",
		requires: "possessive"
	},
	enabling: {
		verb: "got a high paying job",
		obj: "on Wall Street"
	},
	filler: {
		verb: "got fired from",
		obj: "job on Wall Street, and now works for the government in DC",
		requires: "possessive"
	},
	prevent_test_freq: ["month"]

},
// {
// 	habitual: "wears a bra",
// 	past: "wore a bra",
// 	category: "clothing",
// 	frequency: ["6 months","month","week"]
// },
{
	habitual: "wears slacks",
	past: "wore slacks",
	verb: "wear slacks",
	category: "clothing",
	frequency: ["6 months","month","week"],
	predict_test_freq: "week"
},
{
	habitual: "wears socks",
	past: "wore socks",
	verb: "wear socks",
	category: "clothing",
	frequency: ["6 months","month","week"],
	predict_test_freq: "week"
},
{
	habitual: "wears a hat",
	past: "wore a hat",
	verb: "wear a hat",
	category: "clothing",
	frequency: ["2 months","month","week"],
	predict_test_freq: "week"
},
// {
// 	habitual: "wears gloves",
// 	past: "wore gloves",
// 	category: "clothing",
// 	frequency: ["month","week"]
// },
// {
// 	habitual: "wears sweaters",
// 	past: "wore a sweater",
// 	category: "clothing",
// 	frequency: ["month","week"]
// },
{
	habitual: "wears a watch",
	verb: "wear a watch",
	past: "wore a watch",
	category: "clothing",
	frequency: ["6 months","month","week"],
	predict_test_freq: "week"
},
{
	habitual: "writes novels",
	past: "wrote a novel",
	verb: "write a novel",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "became fed up with the literary world and",
		obj: "decided to never write anything again"
	},
	enabling: {
		verb: "finished an MFA program and quit",
		obj: "other job to focus on writing novels",
		requires: "possessive"
	},
	filler: {
		verb: "decided to never drive again in order to cut reduce",
		obj: "carbon football",
		requires: "possessive"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "year"
},
{
	habitual: "writes poems",
	verb:"write a poem",
	past: "wrote a poem",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "became fed up with the poetry world and",
		obj: "decided to never write poems again"
	},
	enabling: {
		verb: "finished an MFA program and quit",
		obj: "other job to focus on writing poems",
		requires: "possessive"
	},
	filler:{
		verb: "decided to never buy ice cream again in order to",
		obj: "lose weight",
		requires: "possessive"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "month"
},
// {
// 	habitual: "sells things on eBay",
// 	past: "sold something on eBay",
// 	verb: "sell things on eBay",
// 	category: "employment",
// 	frequency: ["5 years", "year"],
// 	verb:"month"
// },
// {
// 	habitual: "sells companies",
// 	past: "sold a company",
// 	verb: "sell companies",
// 	category: "employment",
// 	frequency: ["5 years", "year"],
// 	// preventative:{
// 	// 	verb: "changed careers",
// 	// 	obj: "to spend more time with family"
// 	// }
// 	// ,
// 	// enabling: {
// 	// 	verb: "began a new career ",
// 	// 	obj: "job to focus on writing"
// 	// 	requires: "possessive"
// 	// },
// 	predict_test_freq:
// },
{
	habitual: "steals cars",
	past: "stole a car",
	verb: "steal a car",
	category: "employment",
	frequency: ["5 years", "year", "month"],
	preventative:{
		verb: "got caught and went through a radical transformation, vowing",
		obj: "to never break the law again"
	},
	enabling: {
		verb: "learned a new technique",
		obj: "for breaking into cars"
	},
	filler: {
		verb: "went through a radical transformation, vowing",
		obj: "to never run a red light again"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "year"
},
{
	habitual: "steals chewing gum",
	past: "stole chewing gum",
	verb: "steal chewing gum",
	category: "employment",
	frequency: ["5 years", "year", "month"],
	preventative:{
		verb: "got caught and vowed",
		obj: "to never break the law again"
	},
	enabling: {
		verb: "learned a new trick",
		obj: "to distract shopkeepers"
	},
	filler: {
		verb: "vowed",
		obj: "to never eat meat again"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "month"
},
{
	habitual: "volunteers for soup kitchens",
	past: "volunteered for a soup kitchen",
	verb: "volunteer for soup kitchens",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "grew disillusioned with the soup kitchen system",
		obj: "and wants nothing to do with it anymore"
	},
	enabling: {
		verb: "researched a new soup kitchen in the area",
		obj: "and is going to volunteer with them"
	},
	filler: {
		verb: "grew disillusioned with the recycling industry in the area and wants to drive",
		obj: "recycling to the next town",
		requires: "possessive"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "month"
},
{
	habitual: "volunteers for political campaigns",
	past: "volunteered for a political campaign",
	verb: "volunteer for a political campaign",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "grew disillusioned with the political system",
		obj: "and wants nothing to do with it anymore"
	},
	enabling: {
		verb: "researched a new political candidate in the area",
		obj: "and is going to volunteer with them"
	},
	filler: {
		verb: "grew disillusioned with the documentary film industry and",
		obj: "does not want to see a documentary again"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "year"
},
{
	habitual: "goes to the movies",
	verb: "go to the movies",
	past: "went to the movies",
	category: "entertainment",
	frequency: ["2 years","year","month"],
	predict_test_freq: "month"
	// preventative: "local theatre closed"
},
{
	habitual: "goes to the ballet",
	verb: "go to the ballet",
	past: "went to the ballet",
	category: "entertainment",
	frequency: ["2 years","year","month"],
	predict_test_freq: "year"
},
{
	habitual: "watches professional football",
	verb: "watch professional football",
	past: "watched professional football",
	category: "entertainment",
	frequency: ["2 years","year","month"],
	preventative: {
		verb: "learned about all the corruption in professional sports and",
		obj: "no longer can watch it"
	},
	enabling: {
		verb: "remembered how much enjoyable that was and upgraded",
		obj: "cable to have access to all professional football games",
		requires: "possessive"
	},
	filler: {
		verb: "learned about all the corruption in professional sports and",
		obj: "vowed to help bring an end to it",
		requires: "possessive"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "week"
},
{
	habitual: "watches space launches",
	past: "watched a space launch",
	verb: "watch a space launch",
	category: "entertainment",
	frequency: ["2 years", "year","month"],
	preventative: {
		verb: "went through a radical transformation and now it is against",
		obj: "belief to witness anything relating to space travel",
		requires: "possessive"
	},
	enabling: {
		verb: "remembered how much enjoyable that was and researched",
		obj: "all of the space launches in the next year within driving distance"
	},
	filler: {
		verb: "was caught for stealing and was fined",
		obj: "a thousand dollars"
	},
	prevent_test_freq: ["2 years"],
	predict_test_freq: "year"
},
// {
// 	habitual: "listens to Pandora",
// 	past: "listened to Pandora",
// 	verb: "listen to Pandora",
// 	category: "entertainment",
// 	frequency: ["year","month", "week"],
// 	preventative: {
// 		verb: "moved off the grid and",
// 		obj: "no longer has access to the internet"
// 	},
// 	enabling: {
// 		verb: "remembered how much enjoyable that was",
// 		obj: "and bought a premium subscription to Pandora"
// 	},
// 	filler: {
// 		verb: "moved to a new apartment and",
// 		obj: "now has a dish washer"
// 	},
// 	predict_test_freq: "week"
// },
// {
// 	habitual: "listens to Russian folk music",
// 	past: "listened to Russian folk music",
// 	category: "entertainment",
// 	frequency: ["year","month", "week"]
// },
{
	habitual: "listens to live music",
	past: "listened to live music",
	verb: "listen to live music",
	category: "entertainment",
	frequency: ["year","month", "week"],
	predict_test_freq: "month"
},
{
	habitual: "eats peanut butter",
	past: "ate peanut butter",
	verb: "eat peanut butter",
	category: "food",
	frequency: ["5 years", "year","month"],
	preventative:{
		verb: "developed",
		obj: "a peanut allergy"
	},
	enabling:{
		verb: "learned about the dietary benefits of eating peanut butter",
		obj: "and bought a jar at the supermaket"
	},
	filler: {
		verb: "developed an affinity",
		obj: "for chocolate covered raisins"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "week"
},
{
	habitual: "eats caviar",
	past: "ate caviar",
	verb: "eat caviar",
	category: "food",
	frequency: ["5 years", "year","month"],
	preventative:{
		verb: "developed",
		obj: "a seafood allergy"
	},
	enabling:{
		verb: "learned about the dietary benefits of eating caviar",
		obj: "and bought a jar at the supermaket"
	},
	filler: {
		verb: "developed an affinity",
		obj: "for sauteed tofu"
	},
	prevent_test_freq: ["5 years"],
	predict_test_freq: "month"
},
{
	habitual: "eats cereal",
	past: "ate cereal",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	predict_test_freq: "week"
},
{
	habitual: "smokes cigarettes",
	past: "smoked cigarettes",
	verb: "smoke cigarettes",
	category: "food",
	frequency: ["year","month", "week"],
	preventative:{
		verb: "quit",
		obj: "smoking cigarettes"
	},
	enabling: {
		verb: "wanted a smoke and",
		obj: "bought a pack of cigarettes"
	},
	filler: {
		verb: "quit",
		obj: "bowling on Tuesdays"
	},
	prevent_test_freq: ["month"],
	predict_test_freq: "week"
},
{
	habitual: "smokes marijuana",
	past: "smoked marijuana",
	verb: "smoke marijuana",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	preventative:{
		verb: "realized",
		obj: "is severely allergic to marijuana and will no longer smoke it",
		requires: "pronoun"
	},
	enabling: {
		verb: "wanted to get high and",
		obj: "bought some marijuana"
	},
	filler: {
		verb: "gave up playing softball because it bothered",
		obj: "significant other",
		requires: "possessive"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "month"
},
{
	habitual: "does cocaine",
	past: "did cocaine",
	verb: "do cocaine",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	preventative:{
		verb: "realized",
		obj: "is severely allergic to cocaine and will no longer do it",
		requires: "pronoun"
	},
	enabling: {
		verb: "wanted to get high and",
		obj: "bought some cocaine"
	},
	filler: {
		verb: "entered",
		obj: "into a weight loss program"
	},
	prevent_test_freq: ["year"],
	predict_test_freq: "month"
},
{
	habitual: "drinks beer",
	past: "drank a beer",
	verb: "drink beer",
	category: "food",
	frequency: ["year","month", "2 weeks","week"],
	preventative:{
		verb: "gave up alcohol and entered",
		obj: "into Alcoholics Anonymous"
	},
	enabling: {
		verb: "wanted to get tipsy and",
		obj: "bought a six-pack of beer"
	},
	filler: {
		verb: "entered",
		obj: "into a food co-op"
	},
	prevent_test_freq: ["month"],
	predict_test_freq: "week"
},
{
	habitual: "drinks coffee",
	past: "drank coffee",
	verb: "drink coffee",
	category: "food",
	frequency: ["year","month", "2 weeks","week"],
	preventative:{
		verb: "developed a caffeine allergy",
		obj: "and decided to give up all caffeine"
	},
	enabling: {
		verb: "wanted a morning jolt and",
		obj: "bought a pound of fresh roasted coffee"
	},
	filler: {
		verb: "developed a nut allergy",
		obj: "and decided to walk every morning"
	},
	prevent_test_freq: ["month"],
	predict_test_freq: "week"
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


var maleCharacters = [
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
	name: "Kyle",
	gender: "male"
},
{
	name: "Ben",
	gender: "male"
},
{
	name: "Josh",
	gender: "male"
},
{
	name: "Robert",
	gender: "male"
},
{
	name: "Ronald",
	gender: "male"
},
{
	name: "Jacob",
	gender: "male"
},
{
	name: "Lewis",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Derrick",
	gender: "male"
},
{
	name: "Christopher",
	gender: "male"
},
{
	name: "Brian",
	gender: "male"
},
{
	name: "Vince",
	gender: "male"
},
{
	name: "Ted",
	gender: "male"
},
{
	name: "Scott",
	gender: "male"
},
{
	name: "Seth",
	gender: "male"
},
{
	name: "Martin",
	gender: "male"
},
{
	name: "Doug",
	gender: "male"
},
{
	name: "George",
	gender: "male"
},
{
	name: "Tim",
	gender: "male"
},
{
	name: "Jack",
	gender: "male"
},
{
	name: "Fred",
	gender: "male"
}]



var femaleCharacters = [
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
},
{
	name: "Rebecca",
	gender: "female"
},
{
	name: "Hillary",
	gender: "female"
},
{
	name: "Jessica",
	gender: "female"
},
{
	name: "Natalie",
	gender: "female"
},
{
	name: "Kristina",
	gender: "female"
},
{
	name: "Esther",
	gender: "female"
},
{
	name: "Elizabeth",
	gender: "female"
},
{
	name: "Crystal",
	gender: "female"
},
{
	name: "Theresa",
	gender: "female"
},
{
	name: "Janet",
	gender: "female"
},
{
	name: "Linda",
	gender: "female"
},
{
	name: "Elisa",
	gender: "female"
},
{
	name: "Ashley",
	gender: "female"
},
{
	name: "Shannon",
	gender: "female"
},
{
	name: "Tina",
	gender: "female"
},
{
	name: "Kelly",
	gender: "female"
},
{
	name: "Bridgette",
	gender: "female"
},
{
	name: "Amber",
	gender: "female"
},
{
	name: "Jackie",
	gender: "female"
},
{
	name: "Brooke",
	gender: "female"
},
{
	name: "Nicole",
	gender: "female"
}]	
