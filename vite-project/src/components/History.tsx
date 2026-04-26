type Props = {
    history : string[];
    clearHistory : () => void;
}
export default function History({history, clearHistory}:Props) {

    return(    
        <div>
          <p>{history.join(", ")}</p>
          <button onClick={clearHistory}>Clear history</button>
        </div>
    )
}