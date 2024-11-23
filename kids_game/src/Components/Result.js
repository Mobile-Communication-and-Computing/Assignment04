import React from "react";

export default function Result({ result, onPlayAgain }) {
  return (
    <div>
      {result && <h3>{result}</h3>}
      <button onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}