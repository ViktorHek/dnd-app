import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
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

  function openCharacterBuilder() {
    
  }

  return (
    <div className="Home">
      <button onClick={openCharacterBuilder()}>Character Builder</button>
    </div>
  );
}

export default Home;
