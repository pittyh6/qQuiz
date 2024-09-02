import React from "react";
import DataQuestions from "../../utils/dataQuestion";

export default function Question() {
  const count = 0;
  const qt = DataQuestions.map((qt, index) => {
    // console.log({ qt });
    // console.log(qt.id);
  });
  const qts = DataQuestions.find((question) => {
    return question.id === 1;
  });
  console.log(qts.question);
  console.log(qts.answerCorrect);

  return (
    <div>
      <section className="section-question">
        <h2>{qts.question}</h2>
      </section>
      <section className="section-answers">
        <p>
          <input type="radio" name="answer" id="answer-one" />
          {qts.answerCorrect}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" />
          {qts.answerWrongOne}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" />
          {qts.answerWrongTwo}
        </p>
      </section>
    </div>
  );
}
