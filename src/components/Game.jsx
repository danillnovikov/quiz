import { useSelector } from 'react-redux';

const Game = ({ question, onClickVariant, ques }) => {
  const { step } = useSelector((store) => store);
  const percentage = Math.round((step / ques.length) * 100);

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
