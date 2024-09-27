function Question() {
  return (
    <div>
      <section className="section-question">
        <h2>What is the question</h2>
      </section>
      <section className="section-answers">
        <p>
          <input type="radio" name="answer" id="answer-one" />
          First Answer
        </p>
        <p>
          <input type="radio" name="answer" id="answer-two" />
          Second Answer
        </p>
        <p>
          <input type="radio" name="answer" id="answer-three" />
          Third Answer
        </p>
      </section>
    </div>
  );
}

export default Question;
