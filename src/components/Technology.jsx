import Game from './Game';
import Result from './Result';
import { questions } from '../questions';
import { useState } from 'react';

const Technology = () => {
  const [, pathname] = window.location.pathname.split('/');
  console.log(pathname);
  const ques = questions.find(
    (item) => item.technology.toLowerCase() === pathname
  ).properties;

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = ques[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <>
      {step !== ques.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          ques={ques}
        />
      ) : (
        <Result correct={correct} ques={ques} />
      )}
    </>
  );
};

export default Technology;
