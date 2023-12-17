import axios from "axios";
import { useState, useEffect } from "react";
import CharacterBuilder from "./character/CharacterBuilder";

function Home() {
  const [openCharBuild, setOpenCharBuild] = useState(false);

  useEffect(() => {
    populateList();
  }, []);
  

  async function populateList() {
    await axios
      .get("https://dnd5eapi.co/api/classes/druid")
      // .get("https://dnd5eapi.co/api/monsters/aboleth")
      // .get("https://dnd5eapi.co/api/monsters")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function openCharacterBuilder() {
    setOpenCharBuild(!openCharBuild)
  }

  return (
    <div className="Home">
      <button onClick={() => openCharacterBuilder()}>Character Builder</button>
      {openCharBuild ? <CharacterBuilder/>:null}
    </div>
  );
}

export default Home;
