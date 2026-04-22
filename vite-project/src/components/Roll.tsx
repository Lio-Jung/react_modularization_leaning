type Props = {
    loading : boolean;
    error : string;
    pokemon : string;
    onRoll : () => void;
    
}

export default function Roll({loading, error, pokemon, onRoll}:Props) {
    return (
        <div>
            {loading ? (
        <p>Loading Pokémon...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{pokemon || "Click Roll to start"}</p>
      )}

      <button onClick={onRoll} disabled={loading}>
        Roll
      </button>
        </div>
    )    
}

