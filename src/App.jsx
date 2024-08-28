import { useState } from "react";
import Question from "./assets/components/Question";

function App() {
  return (
    <>
      <main>
        <h1>
          <i class="fa-regular fa-circle-question"></i> Questions
        </h1>
        <Question />
      </main>
    </>
  );
}

export default App;
