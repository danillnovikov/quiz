const Game = ({ question, onClickVariant, step, ques }) => {
  const percentage = Math.round((step / ques.length) * 100);
  // console.log(question);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>

      <h1>{question.title} </h1>

      <ul>
        {question.answers.map((text, index) => {
          return (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Game;
