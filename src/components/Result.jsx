import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Result = ({ ques }) => {
  const { correct } = useSelector((store) => store);

  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="img"
      />
      <h2>
        Вы отгадали {correct} из {ques.length}
      </h2>
      <Link to="/react">
        <button>Смотреть результаты</button>
      </Link>
    </div>
  );
};

export default Result;
