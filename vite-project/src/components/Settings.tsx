import { useEffect, useRef } from "react";

type Props = {
        isSettingsOpen : boolean;
        limit : number;
        changeLimit : (value:number) => void;
        toggleSettings : () => void;
        closeSettings : () => void;
}

export default function Settings({ isSettingsOpen, limit, changeLimit, toggleSettings, closeSettings }: Props) {
    const inputref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isSettingsOpen) {
            inputref.current?.focus();
        }
    }, [isSettingsOpen]);

    return (
        <div>
        <button onClick={toggleSettings}>Settings</button>

      {/* Settings */}
      {isSettingsOpen && (
        <div>
          <span>Load Pokémon up to#</span>
          <input
            ref={inputref}
            type="number"
            value={limit}
            onChange={(e) => changeLimit(Number(e.target.value))}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    closeSettings();
                }
            }}
          />
          <button onClick={closeSettings}>Save</button>
        </div>
        )}
        </div>
    )
    
}