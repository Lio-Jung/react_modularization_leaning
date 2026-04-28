import Roll from "./components/Roll";
import History from "./components/History";
import Settings from "./components/Settings";
import { usePokemon } from "./hooks/usePokemon";
import { useSettings } from "./hooks/useSettings";
function App() {
  //Hooks
  const {
    isSettingsOpen, 
    limit,  
    toggleSettings, 
    closeSettings,
    changeLimit
  } = useSettings();

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
        changeLimit={changeLimit} 
        toggleSettings={toggleSettings} 
        closeSettings = {closeSettings}
      />
      
      {/* history */}
      {history.length > 0 && !isSettingsOpen && (
      <History history={history} clearHistory={clearHistory}/>
      )}
    </div>
  );
}

export default App;