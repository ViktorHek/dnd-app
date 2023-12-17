export default {
  druid: {
    index: "druid",
    name: "Druid",
    hit_die: 8,
    proficiency_choices: [
      {
        desc: "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
        choose: 2,
        options: [
          "arcana",
          "animal",
          "insight",
          "medicine",
          "nature",
          "perception",
          "religion",
          "survival",
        ],
      },
    ],
    proficiencies: [
      "light-armor",
      "medium-armor",
      "shields",
      "clubs",
      "daggers",
      "javelins",
      "maces",
      "quarterstaffs",
      "sickles",
      "spears",
      "darts",
      "slings",
      "scimitars",
      "herbalism-kit",
      "saving-throw-int",
      "saving-throw-wis",
    ],
    saving_throws: ["int", "wis"],
    starting_equipment: [
      {
        name: "leather-armor",
        quantity: 1,
      },
      {
        name: "explorers-pack",
        quantity: 1,
      },
    ],
    starting_equipment_options: [
      {
        desc: "(a) a wooden shield or (b) any simple weapon",
        choose: 1,
        options: ["shield", "any-simple-weapon"],
      },
      {
        desc: "(a) a scimitar or (b) any simple melee weapon",
        choose: 1,
        options: ["scimitar", "any-simple-melee-weapon"],
      },
      {
        desc: "druidic focus",
        choose: 1,
        options: ["stick", "staff", "gem"],
      },
    ],
    subclasses: [
      {
        name: "land",
      },
    ],
    spellcasting_ability: "wis",
    spells: [],
  },
};
