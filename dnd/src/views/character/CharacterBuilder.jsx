import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";
import races from "../../db/races";
import AbilityList from "./AbilityList";

function CharacterBuilder() {
  const [race, setRace] = useState({ name: "human" });
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openRaceModal, setOpenRaceModal] = useState(false);
  const [name, setName] = useState("");

  function handleDropDown() {
    setOpenDropDown(!openDropDown);
    setOpenRaceModal(false);
  }

  function handleSelectRace(race) {
    console.log({ race });
    setRace(race);
    setOpenDropDown(!openDropDown);
    setOpenRaceModal(!openRaceModal);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  return (
    <div id="characterBuilderMainContainer">
      <div className="name-container">
        <span>{name ? name : "pick a name"}</span>
        <input onChange={handleChangeName} type="text" />
      </div>
      <div className="race-container">
        <div className="dropdown">
          <button onClick={handleDropDown}>{race ? race.name : "races"}</button>
          {openDropDown
            ? races.list.map((race) => {
                return (
                  <div onClick={() => handleSelectRace(race)} className="race-picker">
                    <p>{race.name}</p>
                  </div>
                );
              })
            : null}
        </div>
        {openRaceModal ? (
          <div style={{ height: "200px", width: "200px", border: "1px solid black" }}>
            <p>{race.name}</p>
          </div>
        ) : null}
      </div>
      <AbilityList />
    </div>
  );
}

export default CharacterBuilder;
