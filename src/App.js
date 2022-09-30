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

function Game({ question, onClickVariant }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>

      <h1>{question.title} </h1>

      <ul>
        {question.aswers.map((text) => {
          return (
            <li onClick={onClickVariant} key={text}>
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Result() {
  return (
    <div className="result">
      <img src={'https://cdn-icons-png.flaticon.com/512/2278/2278992.png'} />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
  };

  return (
    <div className="App">
      <Game question={question} onClickVariant={onClickVariant} />
      {/* <Result /> */}
    </div>
  );
}

export default App;
