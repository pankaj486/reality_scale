import React, { useState } from "react";
import auto from "../../assets/image/auto.png";
import manual from "../../assets/image/switch.png";
import { useActions } from "../../hooks/use-actions";

export const AutoToggle = () => {
  const [currentMode, setCurrentMode] = useState("Automatic");
  const { AllAction, ModeRequestAction } = useActions();

  const onModeChange = () => {
    if (currentMode === "Automatic") {
      setCurrentMode("Manual");
      AllAction({ mode: "Manual" });
      ModeRequestAction("Manual");
    } else {
      setCurrentMode("Automatic");
      AllAction({ mode: "Automatic" });
      ModeRequestAction("Automatic");
    }
  };

  return (
    <div className="left-sec-footer">
      <div className="switch-Auto-Manual" onClick={() => onModeChange()}>
        {currentMode === "Automatic" ? (
          <>
            <div className="auto-sec-left">
              <p>Auto</p>
            </div>
            <div className="auto-sec-right-img">
              <img src={auto} />
            </div>
          </>
        ) : (
          <>
            <div className="Manual-sec-right-img">
              <img src={manual} />
            </div>
            <div className="Manual-sec-right">
              <p>Manual</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
