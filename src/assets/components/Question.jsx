import React, { useState } from "react";
import DataQuestions from "../../utils/dataQuestion";

console.log("DataQuestions.length: ", DataQuestions.length);

function Question() {
  const [currentQ, setCurrentQ] = useState(0);
  const [resultQ, setResultQ] = useState(0);
  const [questionResult, setQuestionResult] = useState("");

  function nextQuestion() {
    if (currentQ < DataQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      console.log("currentQ: ", currentQ);
    } else {
      console.log("Questions Done!");
    }
  }
  function getAnswer(e) {
    setQuestionResult(e.target.value);
    // const answer = e.target.value;
    // console.log("answer: ", answer);
    // return answer;
  }
  function handleAnswer() {
    console.log("Entrou");
    console.log(questionResult);
    if (questionResult == DataQuestions[currentQ].answerCorrect) {
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
                onClick={getAnswer}
                value={answer}
              >
                {answer}
              </button>
              <br />
            </p>
          );
        })}
      </section>
      <button
        className="btn btn-next"
        onClick={handleAnswer}
        //onClick={nextQuestion}
      >
        Next
      </button>
    </div>
  );
}

export default Question;
