// all of the causes are desirable... what if they are undesirable? (e.g., chemicals killing babies)

var preamble = "The results are shown below:"

var tasks = {
  speaker: {
    frequencies: [20, 60],
    prompt: "The results of the experiment with SPECIAL were found.",
    utterance: "SPECIAL TARGET.",
    question: "Does SPECIAL QUERY?",
    frequencyStatement: "Your team treated 100 CATEGORY with SPECIAL."
    //" The number of CATEGORY that were successfully PAST (out of 100) with SPECIAL was:"
  },
  listener: {
    prompt: "The results of the experiment with SPECIAL were found.",
    utterance: "SPECIAL TARGET.",
    question: "How many out of 100 UNIT do you think PAST?"
  }
}


var distributions = [
  {
    distribution: "rare_weak",
    data: [0, 20, 0, 10, 0, 0, 15, 0, 20, 0]
  },
  {
    distribution: "common_weak",
    data: [10, 20, 15, 10, 15, 20, 10, 10, 15, 20, 20]
  },
  {
    distribution: "rare_strong",
    data: [75, 0, 65, 0, 80, 90, 0, 0, 80, 90]
  },
  {
    distribution: "common_strong",
    data: [75, 65, 65, 75, 80, 90, 80, 75, 80, 90]
  },
  {
    distribution: "rare_deterministic",
    data: [0, 0, 100, 100, 0, 0, 100, 0, 0, 100, 0]
  },
  // {
  //   distribution: "common_deterministic",
  //   data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
  // },
  {
    distribution: "weak_or_strong",
    data: [85, 75, 15, 75, 10, 90, 90, 80, 10, 20]
  }
]


var stories = [
  // {
  //   story: "batteries",
  //   storyline:  "You are an astronaut-scientist exploring a distant planet. On this planet, there are aliens and they have electronic devices called CATEGORY and your team of scientists wants to figure out what kind of battery makes CATEGORY work. Your team runs experiments trying to make CATEGORY work with different batteries.",
  //   treatment: "battery",
  //   target: "makes the device work",
  //   query: "make the devices work",
  //   past: "worked",
  //   evidence: "had worked",
  //   unit: "devices"
  // },
  // {
  //   story: "artifact play music",
  //   storyline:  "On this planet, you discover an alien artifact that looks like it could play music and your team of scientists wants to figure out how to make the alien machine play music. Your team runs experiments on the machine by putting different objects on the machine to see if it will play music.",
  //   treatment: "object",
  //   event: "attempted",
  //   experiment: "Your team put SPECIAL on the device 100 different times.",
  //   experimentResults: "Of those 100 attempts, the machine played music <strong>N</strong> times.",
  //   lostResults: "The results of this experiment have been misplaced so <strong>we don't know</strong> how many times the machine played music.",
  //   otherExperiments: "your team put a new object on the machine 100 times.",
  //   priorQuestion: "How many times do you think each object will make the machine play music?",
  //   target: "makes the machine play music",
  //   query: "make the play music",
  //   past: "played music",
  //   evidence: " played music",
  //   unit: "times"
  // },
  {
    story: "animal make sleepy",
    storyline:  "On this planet, there are animals called CATEGORY and your team of scientists wants to figure out how to make these animals sleepy. Your team runs experiments trying to make CATEGORY sleepy with different naturally occurring herbs.",
    treatment: "herb",
    event: "treated",
    experiment: "Your team gave SPECIAL to 100 different CATEGORY.",
    experimentResults: "Of those 100 treated, <strong>N</strong> CATEGORY were made sleepy.",
    lostResults: "The results of this experiment have been misplaced so <strong>we don't know</strong> how many CATEGORY were made sleepy.",
    otherExperiments: "your team gave an herb to 100 different CATEGORY.",
    priorQuestion: "<strong>How many CATEGORY do you think will be made sleepy by each herb</strong>?",
    listenerQuestion: "How many CATEGORY do you think were made sleepy?",
    target: "makes CATEGORY sleepy",
    query: "make the animals sleepy",
    past: "made sleepy",
    evidence: " were made sleepy",
    unit: "animals"
  },
  {
    story: "plant grow indoors",
    storyline:  "On this planet, there is a plant called CATEGORY and your team wants to figure out how to make these plants grow tall. Your team runs experiments trying to make CATEGORY grow tall with different fertilizers.",
    treatment: "fertilizer",
    event: "treated",
    experiment: "Your team gave SPECIAL to 100 different CATEGORY.",
    experimentResults: "Of those 100 treated, <strong>N</strong> CATEGORY grew tall.",
    lostResults: "The results of this experiment have been misplaced so <strong>we don't know</strong> how many CATEGORY grew tall.",
    otherExperiments: "your team gave different fertilizers to 100 different CATEGORY.",
    priorQuestion: "<strong>How many CATEGORY do you think will be made to grow tall by each ferilizer</strong>?",
    listenerQuestion: "How many CATEGORY do you think were made to grow tall?",
    target: "makes CATEGORY grow tall",
    query: "make the plants grow tall",
    past: "grew tall",
    evidence: " were made to grow tall",
    unit: "plants"
  },
  // {
  //   story: "metal rust",
  //   storyline:  "On this planet, there is a metal called EXEMPLAR and your team of scientists wants to figure out what makes this metal rust. Your team runs experiments trying to make EXEMPLAR rust with different chemical compounds.",
  //   experiment: "Your team gave SPECIAL to 100 different EXEMPLAR.",
  //   event: "treated",
  //   experimentResults: "Of those 100 treated, <strong>N</strong> EXEMPLAR rusted.",
  //   lostResults: "The results of this experiment have been misplaced so <strong>we don't know</strong> how many EXEMPLAR rusted.",
  //   otherExperiments: "your team gave a compound to 100 different EXEMPLAR.",
  //   priorQuestion: "<strong>How many EXEMPLAR do you think will be made to rust by each compound</strong>?",
  //   treatment: "compound",
  //   target: "makes CATEGORY rust",
  //   query: "make the metal rust",
  //   past: "rusted",
  //   evidence: " were made to rust",
  //   unit: "metals"
  // },
  {
    story: "rocks dissolve",
    storyline:  "On this planet, there are rocks called CATEGORY and your team of scientists wants to figure out how to make these rocks dissolve into particles. Your team runs experiments trying to make CATEGORY dissolve with different chemical compounds.",
    experiment: "Your team gave SPECIAL to 100 different CATEGORY.",
    event: "treated",
    experimentResults: "Of those 100 treated, <strong>N</strong> CATEGORY dissolved into particles.",
    lostResults: "The results of this experiment have been misplaced so <strong>we don't know</strong> how many CATEGORY dissolved into particles.",
    otherExperiments: "your team gave a compound to 100 different CATEGORY.",
    priorQuestion: "<strong>How many CATEGORY do you think will be made to dissolve by each compound</strong>?",
    listenerQuestion: "How many CATEGORY do you think were made to dissolve?",
    treatment: "compound",
    target: "makes CATEGORY dissolve",
    query: "make the rocks dissolve",
    past: "dissolved",
    evidence: " were made to dissolve",
    unit: "rocks"
  }
  // {
  //   story: "blink",
  //   storyline:  "You are an astronaut-scientist exploring a distant planet. On this planet, there are animals called CATEGORY and your team of scientists wants to figure out what makes CATEGORY blink. Your team runs experiments trying to make CATEGORY blink with different chemical compounds.",
  //   treatment: "compound",
  //   target: "makes the animals blink",
  //   query: "make the animals blink",
  //   past:  "blinked",
  //   evidence: "had blinked",
  //   unit: "animals"
  // }
]



// {
//   story: "hair color",
//   storyline:  "You are an astronaut-scientist exploring a distant planet. On this planet, there are animals called CATEGORY and your team of scientists wants to figure out what makes CATEGORY's hair turn brown. Your team runs experiments trying to make CATEGORY's hair turn brown with different chemical compounds.",
//   treatment: "compound",
//   target: "makes the animals' hair brown",
//   query: "make the animals' hair brown",
//   past: "made brown",
//   evidence: "' hair were made brown",
//   unit: "animals' hair"
// },
// {
//   story: "salivate",
//   storyline:  "You are an astronaut-scientist exploring a distant planet. On this planet, there are animals called CATEGORY and your team of scientists wants to figure out what makes CATEGORY salivate. Your team runs experiments trying to make CATEGORY salivate with different chemical compounds.",
//   treatment: "compound",
//   target: "makes the animals salivate",
//   query: "make the animals salivate",
//   past: "made to salivate",
//   evidence: " were made to salivate",
//   unit: "animals"
// },

// {
//   story: "dizzy",
//   storyline:  "On this planet, there are animals called CATEGORY and your team wants to figure out what makes CATEGORY dizzy. Your team runs experiments trying to make CATEGORY dizzy with different chemical compounds.",
//   treatment: "compound",
//   target: "makes the animals dizzy",
//   query: "make the animals dizzy",
//   past: "made dizzy",
//   evidence: " were made dizzy",
//   unit: "animals"
// }
//,

// {
//   story: "fruit",
//   storyline:  "On this planet, there is a tree called CATEGORY which your team believes could bear fruit and your team wants to figure out how CATEGORY bear fruit. Your team runs experiments trying to grow CATEGORY with different chemical compounds.",
//   existentialQuestion: "How likely do you think it is that SPECIAL will grow <emph>at least 1</emph> EXEMPLAR?",
//   prevalenceQuestion: "We know now that at least 1 EXEMPLAR tree successfully bore fruit with SPECIAL.<br> How many of the remaining 99 do you think will successfully bear fruit?\n",
//   treatment: "compound",
//   target: "makes the trees bear fruit",
//   query: "make the trees bear fruit",
//   past: "borne",
//   unit: "fruit"
// },
// {
//   story: "bread",
//   storyline:  "On this inhabited planet, the local intelligent species makes a kind of bread called EXEMPLAR and your team has to figure out how EXEMPLAR bread rises. Your team runs experiments trying to rise EXEMPLAR bread with different yeasts.",
//   existentialQuestion: "How likely do you think it is that SPECIAL will make <emph>at least 1</emph> EXEMPLAR bread rise?",
//   prevalenceQuestion: "We know now that at least 1 EXEMPLAR bread rose successfully with SPECIAL.<br> How many of the remaining 99 do you think will successfully rise?\n",
//   treatment: "yeast",
//   target: "makes the bread rise",
//   query: "make the bread rise",
//   past: "made to rise",
//   unit: "breads"
// },
// {
//   story: "germs",
//   storyline:  "On this planet, there are bacteria called EXEMPLAR and your team has to figure out what kills EXEMPLAR bacteria. Your team runs experiments trying to kill EXEMPLAR bacteria with different chemical compounds.",
//   existentialQuestion: "How likely do you think it is that SPECIAL will kill <emph>at least 1</emph> EXEMPLAR bacteria?",
//   prevalenceQuestion: "We know now that at least 1 EXEMPLAR bacteria was successfully killed with SPECIAL.<br> How many of the remaining 99 do you think will successfully be killed?\n",
//   treatment: "compound",
//   target: "kills the bacteria",
//   query: "kill the bacteria",
//   past: "killed",
//   unit: "bacteria"
// },
// {
//   story: "babies",
//   storyline:  "On this inhabited planet, the local intelligent species called CATEGORY have babies that cry a lot and your team has to figure out what makes EXEMPLAR babies stop crying. Your team runs experiments trying to stop EXEMPLAR babies from crying with different techniques.",
//   existentialQuestion: "How likely do you think it is that SPECIAL will make <emph>at least 1</emph> EXEMPLAR baby stop crying?",
//   prevalenceQuestion: "We know now that at least 1 EXEMPLAR baby successfully stopped crying with SPECIAL.<br> How many of the remaining 99 do you think will successfully stop crying?\n",
//   treatment: "technique",
//   target: "makes the babies stop crying",
//   query: "make the babies stop crying",
//   past: "made to stop crying",
//   unit: "babies"
// }
// {
//   story: "happy animals",
//   storyline:  "On this planet, there are animals called CATEGORY and your team wants to figure out what makes CATEGORY happy. Your team runs experiments trying to make CATEGORY happy with different chemical compounds.",
//   treatment: "compound",
//   target: "makes the animals happy",
//   query: "make the animals happy",
//   evidence: " were happy",
//   past: "happy",
//   unit: "animals"
// },
// {
//   story: "wagging tails",
//   storyline:  "On this planet, there are animals called CATEGORY and your team wants to figure out what makes CATEGORY wag their tails. Your team runs experiments trying to make CATEGORY' tails wag with different chemical compounds.",
//   treatment: "compound",
//   target: "makes the animals' tails wag",
//   query: "make the animals' tails wag",
//   past: "made to wag",
//   evidence: "' tails were made to wag",
//   unit: "tails"
// },

var creatureNames = [
    {list:0,category: "morseths", exemplar:"morseth"},
    {list:1, category: "ollers", exemplar:"oller"},
    {list:2, category: "kweps", exemplar:"kwep"},
    {list:0,category: "blins", exemplar:"blin"},
    {list:1, category: "reesles", exemplar:"reesle"},
    {list:2, category: "dorbs", exemplar:"dorb"},
    {list:0,category: "zorbs", exemplar:"zorb"},
    {list:1, category: "taifels", exemplar:"taifel"},
    {list:2, category: "trufts", exemplar:"truft"},
    {list:0,category: "daiths", exemplar:"daith"},
    {list:1, category: "mooks", exemplar:"mook"},
    {list:2, category: "frams", exemplar:"fram"},
    {list:0,category: "moxes", exemplar:"mox"},
    {list:1, category: "luzaks", exemplar:"luzak"},
    {list:2, category: "javs", exemplar:"jav"},
    {list:0,category: "pangolins", exemplar:"pangolin"},
    {list:1, category: "ackles", exemplar:"ackle"},
    {list:2, category: "wugs", exemplar:"wug"},
    {list:0,category: "cheebas", exemplar:" cheeba"},
    {list:1, category: "elleps", exemplar:"ellep"},
    {list:2, category: "kazzes", exemplar:"kaz"},
    {list:0,category: "lorches", exemplar:"lorch"},
    {list:1, category: "plovs", exemplar:"plov"},
    {list:2, category: "grinks", exemplar:"grink"},
    {list:0,category: "glippets", exemplar:"glippet"},
    {list:1, category: "sapers", exemplar:"saper"},
    {list:2, category: "stups", exemplar:"stup"},
    {list:0,category: "krivels", exemplar:"krivel"},
    {list:1, category: "zoovs", exemplar:"zoov"},
    {list:2, category: "thups", exemplar:"thup"},
    {list:3, category: "crullets", exemplar:"crullet"},
    {list:3, category: "feps", exemplar:"fep"}
]
