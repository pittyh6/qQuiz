import { useState } from "react";
import Question from "./assets/components/Question";

function App() {
  return (
    <>
      <main>
        <h1>
          <i className="fa-regular fa-circle-question"></i> Questions
        </h1>
        <section className="question-box">
          <Question />
        </section>
      </main>
    </>
  );
}

export default App;
