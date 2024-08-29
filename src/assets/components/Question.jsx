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
          <input type="radio" name="answer" id="answer-one" /> Answer One
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" /> Answer One
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" /> Answer One
        </p>
      </section>
    </div>
  );
}
