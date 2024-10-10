import React from "react";

export default function Result() {
  console.log("entrou no Result.jsx");
  const questionBox = document.getElementById("qt-box");
  console.log(questionBox.innerHTML);
  questionBox.innerHTML = "Your total is: " + resultQ;
  return (
    <main>
      <section className="result-page">
        <h2>Well Done</h2>
        <p>Your total is:</p>
      </section>
      <button className="btn btn-restart">New Game</button>
    </main>
  );
}
