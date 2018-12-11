var stims = [
  {"Ducks":"have wings"},
  {"Leopards":"have spots"},
  {"Swans":"are white"},
  {"Cardinals":"are red"},
  {"Kangaroos":"have pouches"},
  {"Robins":"lay eggs"},
  {"Lions":"have manes"},
  {"Mosquitos":"carry malaria"},
  {"Sharks":"attacks swimmers"},
  {"Ticks":"carry Lyme disease"},
  {"Tigers":"eat people"},
  {"Peacocks":"have beautiful feathers"}
]


var otherStims = [
  [
    {"Leopards":"are full-grown"},
    {"Kangaroos":"are juvenile"}
  ],
  [
    {"Lions":"are male"},
    {"Robins":"are female"}
  ]
];

var properties = [
  {
    property: "have spots", category: "physical"
  },
  {
    property: "have brown fur", category: "physical"
  },
  {
    property: "have white fur", category: "physical"
  },
  {
    property: "have a good sense of smell", category: "physical"
  },
  {
    property: "are afraid of loud noises", category: "psychological"
  },
  {
    property: "are afraid of dogs", category: "psychological"
  },
  {
    property: "are intelligent", category: "psychological"
  },
  {
    property: "eat garbage", category: "diet"
  },
  {
    property: "eat grass", category: "diet"
  },
  {
    property: "eat meat", category: "diet"
  },
  {
    property: "eat insects", category: "diet"
  },
  {
    property: "eat people", category: "diet"
  },
  {
    property: "live in trees", category: "habitat"
  },
  {
    property: "live in zoos", category: "habitat"
  },
  {
    property: "live in Africa", category: "habitat"
  },
  {
    property: "hunt other animals", category: "behavior"
  }
]

var animals = [
  "Cows", "Whales", "Dogs", "Cats", "Rabbits",
  "Raccoons", "Pigs", "Chickens", "Pandas",
  "Tigers", "Turtles", "Dolphins", "Penguins",
  "Mountain lions", "Bears", "Ants"
]


var originalProperties = [
  "has wings",
  "has spots",
  "is white",
  "is red",
  "has a pouch",
  "lays eggs",
  "has a mane",
  "carries malaria",
  "attacks swimmers",
  "carries Lyme disease",
  "eats people",
  "has beautiful feathers",
  "is full-grown",
  "is juvenile",
  "is male",
  "is female"
]

var originalCategories = [
  "duck",
  "swan",
  "cardinal",
  "mosquito",
  "shark",
  "tick",
  "tiger",
  "peacock",
  "leopard",
  "kangaroo",
  "lion",
  "robin"
]

var originalTargets = [
  {category: "duck", property: "has wings"},
  {category: "leopard", property: "has spots"},
  {category: "swan", property: "is white"},
  {category: "cardinal", property: "is red"},
  {category: "kangaroo", property: "has a pouch"},
  {category: "robin", property: "lays eggs"},
  {category: "lion", property: "has a mane"},
  {category: "mosquito", property: "carries malaria"},
  {category: "shark", property: "attacks swimmers"},
  {category: "tick", property: "carries Lyme disease"},
  {category: "tiger", property: "eats people"},
  {category: "peacock", property: "has beautiful feathers"},
  {category: "leopard", property: "is juvenile"},
  {category: "swan", property: "is full-grown"},
  {category: "lion", property: "is male"},
  {category: "robin", property: "is female"},
  {category: "leopard", property: "has wings"},
  {category: "kangaroo", property: "has spots"},
  {category: "tiger", property: "has a pouch"},
  {category: "robin", property: "carries malaria"},
  {category: "shark", property: "has a mane"},
  {category: "lion", property: "lays eggs"},
  {category: "mosquito", property: "attacks swimmers"},
  {category: "shark", property: "lays eggs"},
  {category: "shark", property: "is white"},
  {category: "mosquito", property: "doesn't carry malaria"},
  {category: "tick", property: "doesn't carry Lyme disease"},
  {category: "shark", property: "doesn't attack swimmers"},
  {category: "tiger", property: "doesn't eat people"},
  {category: "peacock", property: "doesn't have beautiful feathers"}
];
