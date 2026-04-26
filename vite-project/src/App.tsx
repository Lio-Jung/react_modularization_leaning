import { useState} from "react";
import Roll from "./components/Roll";
import History from "./components/History";
import Settings from "./components/Settings";
import { usePokemon } from "./hooks/usePokemon";
function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [limit, setLimit] = useState(20);

  //Hook
  const { 
    pokemon, 
    history, 
    loading, 
    error, 
    rollPokemon, 
    clearHistory 
  } = usePokemon(limit);

  return (
    <div>
      <h1>Pokémon Roller</h1>

      {/* show */}
      <Roll 
        loading={loading} 
        error={error} 
        pokemon={pokemon} 
        onRoll={rollPokemon}
      />      

      {/* Settings */}
      <Settings 
        isSettingsOpen={isSettingsOpen} 
        limit={limit} 
        setLimit={setLimit} 
        setIsSettingsOpen={setIsSettingsOpen} 
      />
      
      {/* history */}
      {history.length > 0 && !isSettingsOpen && (
      <History history={history} clearHistory={clearHistory}/>
      )}
    </div>
  );
}

export default App;