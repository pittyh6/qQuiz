import React from "react";
import questions from "../../utils/dataQuestion";

export default function Question() {
  return (
    <div>
      <section className="section-question">
        <h2>{questions[0].question}</h2>
      </section>

      <section className="section-answers">
        <p>
          <input type="radio" name="answer" id="answer-one" />
          {questions[0].answerCorrect}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" />
          {questions[0].answerWrongOne}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" />
          {questions[0].answerWrongTwo}
        </p>
      </section>
    </div>
  );
}
