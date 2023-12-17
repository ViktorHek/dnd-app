import { useState } from "react";
import "./index.css";
import races from "../../db/races";

function RaceList() {
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
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openRaceModal, setOpenRaceModal] = useState(false);

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

  return (
    <div className="race-container">
      <div className="dropdown">
        <button onClick={handleDropDown}>{race.name ? race.name : "races"}</button>
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
        <div style={{ height: "500px", width: "500px", border: "1px solid black" }}>
          <p>{race.name}</p>
          <p>{race.speed}</p>
        </div>
      ) : null}
    </div>
  );
}

export default RaceList;
