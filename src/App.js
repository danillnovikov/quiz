import './index.scss';
import React from 'react';
import { useState } from 'react';

const questions = [
  {
    title: 'React - это ...? ',
    aswers: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    aswers: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    aswers: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);

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
        {question.aswers.map((text, index) => {
          return (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
}

// function Result() {
//   return (
//     <div className="result">
//       {/* <img src={'https://cdn-icons-png.flaticon.com/512/2278/2278992.png'} /> */}
//       <h2>Вы отгадали 3 ответа из 10</h2>
//       <button>Попробовать снова</button>
//     </div>
//   );
// }

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
  };

  return (
    <div className="App">
      <Game step={step} question={question} onClickVariant={onClickVariant} />
      {/* <Result /> */}
    </div>
  );
}

export default App;
