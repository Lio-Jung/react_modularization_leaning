import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState("");

  const rollPokemon = () => {
    const list = ["enton", "digda", "bisasam"]
    const random = Math.floor(Math.random()*list.length);
    setPokemon(list[random]);
  }

  return (
    <div>
      <h1>Pokémon Roller</h1>
      
      <p>{pokemon}</p>
      <button onClick={rollPokemon}>Roll</button>
    </div>
  )
}

export default App
