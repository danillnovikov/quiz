import Game from '../Game';
import Result from '../Result';
import { questions } from '../../questions';
import { useState } from 'react';

const Css = () => {
  const ques = questions.find((item) => item.language === 'CSS').properties;
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

export default Css;
