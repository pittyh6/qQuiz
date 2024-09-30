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

  const test2 = DataQuestions.filter((ans) => ans.id === currentQ);
  console.log("test 2 - queston: ", test2[0].question);
  console.log("test 2 - crrectAnswer: ", test2[0].answerCorrect);
  console.log("test 2 - answers: ", test2[0].answers);

  return (
    <div>
      <section className="section-question">
        <h2>{DataQuestions[currentQ].question}</h2>
      </section>
      <section className="section-answers">
        {/* Criar um map() */}
        {test2.map((test2Op) => {
          return (
            <p key={test2Op.id}>
              <input type="radio" name="answer" id="answer-one" />
              {test2Op.answers}
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
