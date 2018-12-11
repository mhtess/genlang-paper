var stimuli = [
{
	habitual: "hikes",
	present : "hike",
	past: "hiked",
	category: "hobby",
	frequency: ["year","month","week"],
	defaultFreq: "year"
},
{
	habitual: "runs",
	present: "run",
	past: "run",
	category: "hobby",
	frequency: ["year","month","week"],
	defaultFreq: "year"
},
{
	habitual: "plays the banjo",
	present: "play the banjo",
	past: "played the banjo",
	category: "hobby",
	frequency: ["year"," month","week"],
	defaultFreq: "year"
},
{
	habitual: "plays tennis",
	present: "play tennis",
	past: "played tennis",
	category: "hobby",
	frequency: ["year","month","week"],
	defaultFreq: "year"
},
{
	habitual: "climbs mountains",
	present: "climb mountains",
	past: "climbed mountains",
	category: "hobby",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "wears a suit",
	present: "wear a suit",
	past: "worn a suit",
	category: "clothing",
	frequency: ["year","month","week"],
	defaultFreq: "year"
},
{
	habitual: "wears a bra",
	present: "wear a bra",
	past: "worn a bra",
	category: "clothing",
	frequency: ["year", "month","week"],
	defaultFreq: "year"
},
{
	habitual: "wears slacks",
	present: "wear slacks",
	past: "worn slacks",
	category: "clothing",
	frequency: ["year", "month","week"],
	defaultFreq:  "year"
},
{
	habitual: "wears socks",
	present: "wear socks",
	past: "worn socks",
	category: "clothing",
	frequency: ["month","week"],
	defaultFreq: "year"
},
// {
// 	habitual: "wears a hat",
// 	present: "wear a hat",
// 	past: "wore a hat",
// 	category: "clothing",
// 	frequency: ["month","week"]	
// },
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
	present: "wear a watch",
	past: "worn a watch",
	category: "clothing",
	frequency: ["month","week"],
	defaultFreq: "year"
},
{
	habitual: "writes novels",
	present: "write a novel",
	past: "written a novel",
	category: "employment",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "writes poems",
	present: "write a poem",
	past: "written a poem",
	category: "employment",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "sell things on eBay",
	present: "sell something on eBay",
	past: "sold something on eBay",
	category: "employment",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "sells companies",
	present: "sell a company",
	past: "sold a company",
	category: "employment",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "steals cars",
	present: "steal a car",
	past: "stolen a car",
	category: "employment",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "steals chewing gum",
	present: "steal chewing gum",
	past: "stolen chewing gum",
	category: "employment",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "volunteers for soup kitchens",
	present: "volunteer for a soup kitchen",
	past: "volunteered for a soup kitchen",
	category: "employment",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "volunteers for political campaigns",
	present: "volunteer for a political campaign",
	past: "volunteered for a political campaign",
	category: "employment",
	frequency: ["5 years", "year","month"]
},
{
	habitual: "goes to the movies",
	present: "go to the movies",
	past: "gone to the movies",
	category: "entertainment",
	frequency: ["year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "goes to the ballet",
	present: "go to the ballet",
	past: "gone to the ballet",
	category: "entertainment",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "watches professional football",
	present: "watch professional football",
	past: "watched professional football",
	category: "entertainment",
	frequency: ["year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "watches space launches",
	present: "watch space launches",
	past: "watched space launches",
	category: "entertainment",
	frequency: ["5 years", "year","month"],
	defaultFreq: "year"
},
{
	habitual: "listens to Pandora",
	present: "listen to Pandora",
	past: "listened to Pandora",
	category: "entertainment",
	frequency: ["year","month", "week"],
	defaultFreq: "year"
},
// {
// 	habitual: "listens to Russian folk music",
// 	past: "listened to Russian folk music",
// 	category: "entertainment",
// 	frequency: ["year","month", "week"]
// },
{
	habitual: "listens to live music",
	present: "listen to live music",
	past: "listened to live music",
	category: "entertainment",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "eats peanut butter",
	present: "eat peanut butter",
	past: "eaten peanut butter",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "eats caviar",
	present: "eat caviar",
	past: "eaten caviar",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
// {
// 	habitual: "eats cereal",
// 	past: "ate cereal",
// 	category: "food",
// 	frequency: ["5 years", "year","month", "week"]
// },
{
	habitual: "smokes cigarettes",
	present: "smoke cigarettes",
	past: "smoked cigarettes",
	category: "food",
	frequency: ["year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "smokes marijuana",
	present: "smoke marijuana",
	past: "smoked marijuana",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "does cocaine",
	present: "do cocaine",
	past: "done cocaine",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "drinks beer",
	present: "drink beer",
	past: "drunk beer",
	category: "food",
	frequency: ["year","month", "week"],
	defaultFreq: "year"
},
{
	habitual: "drinks coffee",
	present: "drink coffee",
	past: "drunk coffee",
	category: "food",
	frequency: ["year","month", "week"],
	defaultFreq: "year"
}];


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
