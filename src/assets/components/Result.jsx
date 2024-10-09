import React from "react";

export default function Result() {
  console.log("entrou no Result.jsx");
  return (
    <div>
      <section className="result-page">
        <h2>Well Done</h2>
        <p>Your total is:</p>
      </section>
      <button className="btn btn-restart">New Game</button>
    </div>
  );
}
