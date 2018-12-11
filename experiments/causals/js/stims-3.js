// all of the causes are desirable... what if they are undesirable? (e.g., chemicals killing babies)

var preamble = "The results are shown below:"

var tasks = {
  speaker: {
    frequencies: [20],//, 90],
    prompt: "The results of the experiment with SPECIAL were found.",
    utterance: "SPECIAL TARGET.",
    question: "Does SPECIAL QUERY?",
    frequencyStatement: "Your team treated 100 CATEGORY with SPECIAL."
    //" The number of CATEGORY that were successfully PAST (out of 100) with SPECIAL was:"
  },
  listener: {
    prompt: "The experiment with SPECIAL has just finished.",
    utterance: "SPECIAL TARGET.",
    question: "How many out of 100 UNIT do you think were successfully PAST?"
  }
}


var distributions = [
  {
    distribution: "rare",
    data: [0, 10, 0, 0, 0, 15, 0, 0, 0, 0]
  },
  // {
  //   distribution: "gendered",
  //   data:[0, 0, 50, 0, 0, 50, 0, 0, 0, 0]
  // },
  // {
  //   distribution: "female",
  //   data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
  // },
  // {
  //   distribution: "biological",
  //   data: [0, 0, 100, 100, 0, 0, 100, 0, 0, 100, 0]
  // },
  {
    distribution: "accidental",
    data: [5, 15, 10, 5, 10, 15, 5, 5, 10, 15, 15]
  },
  {
    distribution: "prevalent",
    data: [75, 60, 65, 75, 80, 40, 80, 75, 80, 90]
  }
]

var stories = [
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
  {
    story: "alert",
    storyline:  "You are an astronaut-scientist exploring a distant planet. On this planet, there are animals called CATEGORY and your team of scientists wants to figure out what makes CATEGORY more alert. Your team runs experiments trying to make CATEGORY alert with different chemical compounds.",
    treatment: "compound",
    target: "makes the animals alert",
    query: "make the animals alert",
    past: "made alert",
    evidence: " were made alert",
    unit: "animals"
  }//,
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
  //   story: "plants",
  //   storyline:  "On this planet, there is an plant called CATEGORY which your team believes can grow indoors and your team wants to figure out how CATEGORY grows indoors. Your team runs experiments trying to grow CATEGORY indoors with different chemical compounds.",
  //   existentialQuestion: "How likely do you think it is that SPECIAL will grow <emph>at least 1</emph> EXEMPLAR?",
  //   prevalenceQuestion: "We know now that at least 1 EXEMPLAR plant was successfully grown indoors with SPECIAL.<br> How many of the remaining 99 do you think will successfully grow?\n",
  //   treatment: "compound",
  //   target: "makes the plants grow indoors",
  //   query: "make the plants grow indoors",
  //   past: "grown indoors",
  //   unit: "plants"
  // },
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
]

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
