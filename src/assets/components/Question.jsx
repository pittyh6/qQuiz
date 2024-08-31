import React from "react";
import DataQuestions from "../../utils/dataQuestion";

export default function Question() {
  const count = 0;
  return (
    <div>
      <section className="section-question">
        {Object.values(DataQuestions[count]).map((qt, index) => {
          return <p key={index}>{qt}</p>;
        })}
        <h2>{DataQuestions[0].question}</h2>
      </section>
      <section className="section-answers">
        <p>
          <input type="radio" name="answer" id="answer-one" />
          {DataQuestions[0].answerCorrect}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" />
          {DataQuestions[0].answerWrongOne}
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" />
          {DataQuestions[0].answerWrongTwo}
        </p>
      </section>
    </div>
  );
}
