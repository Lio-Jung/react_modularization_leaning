type Props = {
    history : string[];
    onClear : () => void;
}
export default function History({history, onClear}:Props) {
    return(
        <div>
          <p>{history.join(", ")}</p>
          <button onClick={onClear}>Clear history</button>
        </div>
    )
}