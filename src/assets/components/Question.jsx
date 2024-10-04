import React, { useState } from "react";
import DataQuestions from "../../utils/dataQuestion";

console.log(DataQuestions[0].question);

function Question() {
  const [currentQ, setCurrentQ] = useState(0);
  const [resultQ, setResultQ] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  function nextQuestion() {
    console.log(currentQ);
    setCurrentQ(currentQ + 1);
  }

  return (
    <div>
      <section className="section-question">
        <h2>{DataQuestions[currentQ].question}</h2>
      </section>
      <section className="section-answers">
        {/* Criar um map() */}
        {DataQuestions[currentQ].answers.map(function (answer, index) {
          return (
            <p key={index}>
              <input type="radio" name="answer" id={`answer-${index}`} />
              {answer};
              <br />
            </p>
          );
        })}
      </section>
      <button className="btn" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Question;
