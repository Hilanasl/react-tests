import React, { useState } from "react";

function ResultDisplayer({ getNewResult }) {
  const [showResult, setShowResult] = useState(null);

  function handleClick() {
    setShowResult(!showResult);
  }

  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      {showResult && <span id="result">{getNewResult()}</span>}
    </div>
  );
}

export default ResultDisplayer;
