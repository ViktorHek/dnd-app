import { useState } from "react";
import "./index.css";
import AbilitySvg from "../../accets/AbilitySvg";
function AbilityList({ abilitys, onChangeAbilitys }) {
  const [strength, setStrength] = useState(abilitys["strength"]);
  const [dexterity, setDexterity] = useState(abilitys["dexterity"]);
  const [constitution, setConstitution] = useState(abilitys["constitution"]);
  const [intelligence, setIntelligence] = useState(abilitys["intelligence"]);
  const [wisdom, setWisdom] = useState(abilitys["wisdom"]);
  const [charisma, setCharisma] = useState(abilitys["charisma"]);

  function handleChangeStat(event) {
    let obj = {
      val: event.target.value,
      mod: getMod(event.target.value),
    };
    switch (event.target.name) {
      case "strength":
        setStrength(obj);
        break;
      case "dexterity":
        setDexterity(obj);
        break;
      case "constitution":
        setConstitution(obj);
        break;
      case "intelligence":
        setIntelligence(obj);
        break;
      case "wisdom":
        setWisdom(obj);
        break;
      case "charisma":
        setCharisma(obj);
        break;
      default:
        console.log("no name");
        break;
    }
    onChangeAbilitys(event.target.name, obj);
  }

  function getMod(val) {
    return Math.floor((val - 10) / 2);
  }

  return (
    <div className="stats-container">
      <div className="stat-container">
        <div style={{width: 81}}>
          <AbilitySvg />
        </div>
        <p>strength</p>
        <span>{strength.val}</span>
        <span>{strength.mod}</span>
        <input type="text" onChange={handleChangeStat} name="strength" />
      </div>
      <div className="stat-container">
        <p>dexterity</p>
        <span>{dexterity.val}</span>
        <span>{dexterity.mod}</span>
        <input type="text" onChange={handleChangeStat} name="dexterity" />
      </div>
      <div className="stat-container">
        <p>constitution</p>
        <span>{constitution.val}</span>
        <span>{constitution.mod}</span>
        <input type="text" onChange={handleChangeStat} name="constitution" />
      </div>
      <div className="stat-container">
        <p>intelligence</p>
        <span>{intelligence.val}</span>
        <span>{intelligence.mod}</span>
        <input type="text" onChange={handleChangeStat} name="intelligence" />
      </div>
      <div className="stat-container">
        <p>wisdom</p>
        <span>{wisdom.val}</span>
        <span>{wisdom.mod}</span>
        <input type="text" onChange={handleChangeStat} name="wisdom" />
      </div>
      <div className="stat-container">
        <p>charisma</p>
        <span>{charisma.val}</span>
        <span>{charisma.mod}</span>
        <input type="text" onChange={handleChangeStat} name="charisma" />
      </div>
    </div>
  );
}

export default AbilityList;
