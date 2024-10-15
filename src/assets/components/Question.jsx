import React, { useState } from "react";
import DataQuestions from "../../utils/dataQuestion";
import Result from "../components/Result";

function Question() {
  const [currentQ, setCurrentQ] = useState(0);
  const [resultQ, setResultQ] = useState(0);
  const [questionResult, setQuestionResult] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  function nextQuestion() {
    if (currentQ < DataQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      console.log("Questions Done!");
      setQuizFinished(true);
    }
  }
  function getAnswer(e) {
    setQuestionResult(e.target.value);
  }
  function handleAnswer() {
    if (questionResult === DataQuestions[currentQ].answerCorrect) {
      setResultQ((resultQ) => resultQ + 1);
    } else {
      console.log("wrong: ", DataQuestions[currentQ].answerCorrect);
    }
  }

  return (
    <>
      {quizFinished ? (
        <Result resultQ={resultQ} />
      ) : (
        <div id="qt-box">
          <section className="section-question">
            <h2>{DataQuestions[currentQ].question}</h2>
          </section>
          <section className="section-answers">
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
            onClick={function (event) {
              handleAnswer();
              nextQuestion();
            }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Question;
