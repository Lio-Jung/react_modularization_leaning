export const saveHistoryToLocalStorage = (history : string[]) => {
    localStorage.setItem("savedHistory", JSON.stringify(history));
}

export const loadHistoryFromLocalStorage = (): string[] => {
    const saved = localStorage.getItem("savedHistory");
    return saved ? JSON.parse(saved) : [];
}