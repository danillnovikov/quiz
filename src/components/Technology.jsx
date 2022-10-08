import Game from './Game';
import Result from './Result';
import { questions } from '../questions';
import { setStep } from '../redux/actions/stepAction';
import { setCorrect } from '../redux/actions/correctAction';
import { useDispatch, useSelector } from 'react-redux';

const Technology = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((store) => store);
  const { correct } = useSelector((store) => store);

  const [, pathname] = window.location.pathname.split('/');

  const ques = questions.find(
    (item) => item.technology.toLowerCase() === pathname
  ).properties;

  const question = ques[step];

  const onClickVariant = (index) => {
    dispatch(setStep(step + 1));
    if (index === question.correct) {
      dispatch(setCorrect(correct + 1));
    }
  };
  return (
    <>
      {step !== ques.length ? (
        <Game question={question} onClickVariant={onClickVariant} ques={ques} />
      ) : (
        <Result ques={ques} />
      )}
    </>
  );
};

export default Technology;
