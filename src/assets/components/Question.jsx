import React, { useState } from "react";
import DataQuestions from "../../utils/dataQuestion";

console.log("DataQuestions.length: ", DataQuestions.length);

function Question() {
  const [currentQ, setCurrentQ] = useState(0);
  const [resultQ, setResultQ] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  function nextQuestion() {
    if (currentQ < DataQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      console.log("currentQ: ", currentQ);
    } else {
      console.log("Questions Done!");
    }
  }
  function handleAnswer(e) {
    console.log(e.target.value);
    if (e.target.value == DataQuestions[currentQ].answerCorrect) {
      console.log("Answer is correct: ", DataQuestions[currentQ].answerCorrect);
    } else {
      console.log("wrong: ", DataQuestions[currentQ].answerCorrect);
    }
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
              <button
                className="btn btn-answers"
                onClick={handleAnswer}
                value={answer}
              >
                {answer}
              </button>
              <br />
            </p>
          );
        })}
      </section>
      <button className="btn btn-next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Question;
