import { questions } from '../questions';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <nav className="links">
        {questions.map((item) => {
          return (
            <Link
              to={item.technology.toLowerCase()}
              key={item.id}
              className="link"
            >
              {item.technology}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Links;
