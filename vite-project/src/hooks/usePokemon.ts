import { useState, useEffect } from "react";
import { saveHistoryToLocalStorage, loadHistoryFromLocalStorage } from "../services/storage";
import { fetchPokemons } from "../services/api";

export function usePokemon(limit : number) {
    const [pokemon, setPokemon] = useState("");
    const [history, setHistory] = useState<string[]>(loadHistoryFromLocalStorage());

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
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

    // reset history
    const clearHistory = () => {
    setHistory([]);
    setPokemon("");
    };

    return{
        pokemon, history, loading, error, rollPokemon, clearHistory
    };
}