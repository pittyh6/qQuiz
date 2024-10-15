import React from "react";

export default function Result({ resultQ }) {
  return (
    <>
      <section className="result-page">
        <h2>You did!!!!</h2>
        <p>Your total is: {resultQ}</p>
      </section>
      <button className="btn btn-next" onClick={() => window.location.reload()}>
        New Game
      </button>
    </>
  );
}
