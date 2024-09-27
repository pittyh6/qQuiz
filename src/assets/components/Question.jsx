import React, { useState } from "react";
import DataQuestions from "../../utils/dataQuestion";

console.log(DataQuestions[0].question);

function Question() {
  const [question, setQuestion] = useState(0);
  const [resultQ, setResultQ] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  return (
    <div>
      <section className="section-question">
        <h2>{DataQuestions[0].question}</h2>
      </section>
      <section className="section-answers">
        {/* Criar um map() */}
        <p>
          <input type="radio" name="answer" id="answer-one" />
          {DataQuestions[0].answers[0]}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" />
          {DataQuestions[0].answers[1]}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" />
          {DataQuestions[0].answers[2]}
        </p>
      </section>
    </div>
  );
}

export default Question;
