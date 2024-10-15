import React from "react";

export default function Result({ resultQ }) {
  return (
    <main>
      <section className="result-page">
        <h2>Well Done</h2>
        <p>Your total is: {resultQ}</p>
      </section>
      <button
        className="btn btn-restart"
        onClick={() => window.location.reload()}
      >
        New Game
      </button>
    </main>
  );
}
