import axios from "axios";
import { useState, useEffect } from "react";

function CharacterBuilder() {
  const [list, setList] = useState([]);

  useEffect(() => {
    populateList();
  }, []);
  

  async function populateList() {
    await axios
      .get("https://dnd5eapi.co/api/monsters/aboleth")
      // .get("https://dnd5eapi.co/api/monsters")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="Home">
      <button>click</button>
    </div>
  );
}

export default CharacterBuilder;
