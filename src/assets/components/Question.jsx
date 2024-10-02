import React, { useState } from "react";
import DataQuestions from "../../utils/dataQuestion";

console.log(DataQuestions[0].question);

function Question() {
  const [currentQ, setCurrentQ] = useState(0);
  const [resultQ, setResultQ] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const test = DataQuestions.map((answer) => {
    console.log("test: ", answer);
  });

  return (
    <div>
      <section className="section-question">
        <h2>{DataQuestions[currentQ].question}</h2>
      </section>
      <section className="section-answers">
        {/* Criar um map() */}
        {DataQuestions.map(function (dataAnswer) {
          return (
            <p key={dataAnswer.id}>
              {dataAnswer.answers.map(function (answer) {
                return (
                  <>
                    <input type="radio" name="answer" id="answer-one" />
                    {answer};
                    <br />
                  </>
                );
              })}
            </p>
          );
        })}
        {/* <p>
          <input type="radio" name="answer" id="answer-one" />
          {DataQuestions[currentQ].answers[0]}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" />
          {DataQuestions[currentQ].answers[1]}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" />
          {DataQuestions[currentQ].answers[2]}
        </p> */}
      </section>
    </div>
  );
}

export default Question;
