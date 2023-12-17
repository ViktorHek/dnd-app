const list = [
  {
    name: "dwarf",
    abs: [{ name: "con", val: 2 }],
    size: "medium",
    url: "http://dnd5e.wikidot.com/lineage:dwarf",
    speed: 25,
    traits: [
      {
        name: "darkvision",
        desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      },
      {
        name: "dwarven-resilience",
        desc: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
      },
      {
        name: "Dwarven Combat Training",
        desc: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
      },
      {
        name: "Stonecunning",
        desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
      },
    ],
    toolProficiency: ["smith", "brewer", "mason"],
    lang: ["common", "dwarvish"],
    subRace: [
      {
        name: "hill-dwarf",
        abs: [{ name: "wisdom", val: 1 }],
        traits: [
          {
            name: "Dwarven Toughness",
            desc: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
          },
        ],
      },
      {
        name: "mountain-dwarf",
        abs: [{ name: "strength", val: 2 }],
        traits: [
          {
            name: "Dwarven Armor Training",
            desc: "You have proficiency with light and medium armor.",
          },
        ],
      },
    ],
  },
  {
    name: "human",
    abs: [
      { name: "str", val: 1 },
      { name: "dex", val: 1 },
      { name: "con", val: 1 },
      { name: "int", val: 1 },
      { name: "wis", val: 1 },
      { name: "cha", val: 1 },
    ],
    size: "medium",
    url: "http://dnd5e.wikidot.com/lineage:human",
    speed: 30,
    traits: [],
    toolProficiency: [],
    lang: ["common", "choose"],
    subRace: [
      {
        name: "variant",
        abs: [
          { name: "choose", val: 1 },
          { name: "choose", val: 1 },
        ],
        traits: [
          {
            name: "skills",
            desc: "You gain proficiency in one skill of your choice.",
          },
          {
            name: "feat",
            desc: "You gain one feat of your choice.",
          },
        ],
      },
    ],
  },
  {
    name: "elf",
    abs: [{ name: "dex", val: 2 }],
    size: "medium",
    url: "http://dnd5e.wikidot.com/lineage:elf",
    speed: 30,
    traits: [
      {
        name: "darkvision",
        desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
      },
      {
        name: "fay-ancestry",
        desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
      },
      {
        name: "trance",
        desc: 'Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.',
      },
      {
        name: "keen-senses",
        desc: "You have proficiency in the Perception skill.",
      },
    ],
    toolProficiency: [],
    lang: ['common', 'elven'],
    subRace: [
      {
        name: "dark-elf",
        abs: [{ name: "cha", val: 1 }],
        traits: [
          {
            name: "superior-darkvision",
            desc: "Your darkvision has a range of 120 feet, instead of 60.",
          },
          {
            name: "sunlight-sensitivity",
            desc: "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of the attack, or whatever you are trying to perceive is in direct sunlight.",
          },
          {
            name: "drow-magic",
            desc: "You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell onceand regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
          },
          {
            name: "drow-weapon-training",
            desc: "You have proficiency with rapiers, shortswords, and hand crossbows.",
          },
        ],
      },
    ],
  },
  // { name: "gnome" },
  // { name: "half-elf" },
  // { name: "half-orc" },
  // { name: "halfling" },
  // { name: "tiefling" },
  // { name: "dragonborn" },
  // {
  //   name: "",
  //   abs: [{ name: "", val: 0 }],
  //   size: "",
  //   url: "",
  //   speed: 0,
  //   traits: [
  //     {
  //       name: "",
  //       desc: "",
  //     },
  //   ],
  //   toolProficiency: [],
  //   lang: [],
  //   subRace: [
  //     {
  //       name: "",
  //       abs: [{ name: "", val: 0 }],
  //       traits: [
  //         {
  //           name: "",
  //           desc: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default {
  list,
};
