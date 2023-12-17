import { useState } from "react";
import "./index.css";
import classes from "../../db/classes";

function ClassList({ race, onChangeRace }) {
  const [classObj, setClassObj] = useState({});
  const [openRaceModal, setOpenRaceModal] = useState(false);

  function handleDropDown() {
    setOpenDropDown(!openDropDown);
    setOpenRaceModal(false);
  }

  function handleSelectRace(race) {
    onChangeRace(race);
    // setRace(race);
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
                <div onClick={() => handleSelectRace(race)} className="race-picker" key={race.name}>
                  <p>{race.name}</p>
                </div>
              );
            })
          : null}
      </div>
      {openRaceModal ? (
        <div style={{ height: "500px", width: "500px", border: "1px solid black" }}>
          <p>{race.name}</p>
          <span>{race.speed}</span>
          <span>{race.size}</span>
        </div>
      ) : null}
    </div>
  );
}

export default ClassList;
