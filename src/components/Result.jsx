import { Link } from 'react-router-dom';

const Result = ({ correct, ques }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="img"
      />
      <h2>
        Вы отгадали {correct} ответа из {ques.length}
      </h2>
      <Link to="/react">
        <button>На главную</button>
      </Link>
    </div>
  );
};

export default Result;
