import { useState } from "react";

export function useSettings() {   
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [limit, setLimit] = useState(20);

    const toggleSettings = () => setIsSettingsOpen((prev) => !prev);
    const closeSettings = () => setIsSettingsOpen(false);
    const changeLimit = (value : number) => setLimit(value);

    return {
        isSettingsOpen, limit, toggleSettings, closeSettings, changeLimit
    };
}