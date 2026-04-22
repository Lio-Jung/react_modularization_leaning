import { useState, useEffect } from "react";
import Roll from "./components/Roll";
import History from "./components/History";
import Settings from "./components/Settings";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("savedHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [limit, setLimit] = useState(20);

  // history 저장
  useEffect(() => {
    localStorage.setItem("savedHistory", JSON.stringify(history));
  }, [history]);

  // Pokémon 가져오기
  const rollPokemon = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );

      if (!res.ok) {
        throw new Error("API error");
      }

      const data = await res.json();

      const list = data.results;
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

  const clearHistory = () => {
    setHistory([]);
    setPokemon("");
  };

  return (
    <div>
      <h1>Pokémon Roller</h1>

      {/* 결과 / 로딩 / 에러 */}
      <Roll loading={loading} error={error} pokemon={pokemon} onRoll={rollPokemon}/>      

      {/* Settings 버튼 */}
      <Settings isSettingsOpen={isSettingsOpen} limit={limit} setLimit={setLimit} setIsSettingsOpen={setIsSettingsOpen} />
      

      {history.length > 0 && !isSettingsOpen && (
      <History history={history} onClear={clearHistory}/>
      )}
    </div>
  );
}

export default App;