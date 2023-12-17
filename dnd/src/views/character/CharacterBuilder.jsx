import { useState, useEffect } from "react";
import "./index.css";
import AbilityList from "./AbilityList";
import RaceList from "./RaceList";

function CharacterBuilder() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [proficiency, setProficiency] = useState(2);
  const [race, setRace] = useState({
    name: "",
    abs: [{ name: "", val: 0 }],
    size: "",
    url: "",
    speed: 0,
    traits: [{ name: "", desc: "" }],
    toolProficiency: [],
    lang: [],
    subRace: [{ name: "", abs: [{ name: "", val: 0 }], traits: [{ name: "", desc: "" }] }],
  });
  const [abilitys, setAbilitys] = useState({
    strength: { val: 8, mod: -1 },
    dexterity: { val: 10, mod: 0 },
    constitution: { val: 10, mod: 0 },
    intelligence: { val: 10, mod: 0 },
    wisdom: { val: 10, mod: 0 },
    charisma: { val: 10, mod: 0 },
  });

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeRace(val) {
    setRace(val);
  }

  function handleChangeAbility(name, val) {
    let obj = abilitys;
    obj[name] = val;
    setAbilitys(obj);
  }

  function handleChangeLevel(event) {
    setLevel(event.target.value);
    setProficiency(getProficiency(event.target.value))
  }

  function getProficiency(level) {
    switch (level) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 2
      case 5:
      case 6:
      case 7:
      case 8:
        return 3
      case 9:
      case 10:
      case 11:
      case 12:
        return 4
      case 13:
      case 14:
      case 15:
      case 16:
        return 5
      case 17:
      case 18:
      case 19:
      case 20:
        return 6
      default:
        return 1
    }
  }

  return (
    <div id="characterBuilderMainContainer">
      <div className="name-container">
        <span>{name ? name : "pick a name"}</span>
        <input onChange={handleChangeName} type="text" />
      </div>
      <div className="level-container">
        <span>{level}</span>
        <label for="level">Level:</label>
        <input type="text" name="level" id="levelSelector" onChange={handleChangeLevel} />
      </div>
      <div className="proficiency-container">
        <span>{proficiency}</span>
      </div>
      <RaceList race={race} onChangeRace={handleChangeRace} />
      <AbilityList abilitys={abilitys} onChangeAbilitys={handleChangeAbility} />
    </div>
  );
}

export default CharacterBuilder;
