import React, { useEffect, useRef } from "react";

type Props = {
        isSettingsOpen : boolean;
        limit : number;
        setLimit : React.Dispatch<React.SetStateAction<number>>;
        setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Settings({ isSettingsOpen, limit, setLimit, setIsSettingsOpen }: Props) {
    const inputref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isSettingsOpen) {
            inputref.current?.focus();
        }
    }, [isSettingsOpen]);

    return (
        <div>
        <button onClick={() => setIsSettingsOpen((prev) => !prev)}>Settings</button>

      {/* Settings 화면 */}
      {isSettingsOpen && (
        <div>
          <span>Load Pokémon up to#</span>
          <input
            ref={inputref}
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    setIsSettingsOpen(false);
                }
            }}
          />
          <button onClick={() => setIsSettingsOpen(false)}>Save</button>
        </div>
        )}
        </div>
    )
    
}