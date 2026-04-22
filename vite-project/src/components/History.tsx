type Props = {
    history : string[];
    setHistory : React.Dispatch<React.SetStateAction<string[]>>;
    setPokemon : React.Dispatch<React.SetStateAction<string>>;
}
export default function History({history, setHistory, setPokemon}:Props) {
    const clearHistory = () => {
    setHistory([]);
    setPokemon("");
  };
    return(    
        <div>
          <p>{history.join(", ")}</p>
          <button onClick={clearHistory}>Clear history</button>
        </div>
    )
}