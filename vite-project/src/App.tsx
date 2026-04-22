import { useState, useEffect } from "react";
import Roll from "./components/Roll";
import History from "./components/History";
import Settings from "./components/Settings";
import { saveHistoryToLocalStorage, loadHistoryFromLocalStorage } from "./services/storage";
import { fetchPokemons } from "./services/api";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [history, setHistory] = useState<string[]>(loadHistoryFromLocalStorage());

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [limit, setLimit] = useState(20);

  // history save
  useEffect(() => {
    saveHistoryToLocalStorage(history);
  }, [history]);

  // Pokémon load
  const rollPokemon = async () => {
    setLoading(true);
    setError("");

    try {      
      const list = await fetchPokemons(limit);

      const randomIndex = Math.floor(Math.random() * list.length);
      const selected = list[randomIndex];

      setPokemon(selected.name);
      setHistory((prev) => [...prev, selected.name]);
    } catch (err) {
      setError("Could not load Pokémon. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pokémon Roller</h1>

      {/* show */}
      <Roll loading={loading} error={error} pokemon={pokemon} onRoll={rollPokemon}/>      

      {/* Settings */}
      <Settings isSettingsOpen={isSettingsOpen} limit={limit} setLimit={setLimit} setIsSettingsOpen={setIsSettingsOpen} />
      
      {/* history */}
      {history.length > 0 && !isSettingsOpen && (
      <History history={history} setHistory={setHistory} setPokemon={setPokemon}/>
      )}
    </div>
  );
}

export default App;