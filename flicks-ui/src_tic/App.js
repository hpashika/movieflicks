import './App.css';
import { useEffect, useState } from 'react';

const [p1, p2] = ['X', 'O'];
const players = { p1: 'Player X', p2: 'Player O' };
const Block = ({ buttons, position, updateBoard, buttonStatus }) => {
  let tile = buttons[position] + 'tile' + buttonStatus;
  console.log(buttons);
  return (
    <button
      className={tile}
      name="bts"
      value={buttons[position]}
      onClick={() => {
        updateBoard(position);
      }}
    >
      {buttons[position]}
    </button>
  );
};

const defaultButtons = ['', '', '', '', '', '', '', '', ''];
const App = () => {
  const [buttons, setButtons] = useState(defaultButtons);
  const [player, setPlayer] = useState('p1');
  const [message, setMessage] = useState(players['p1'] + ' Turn');
  const [buttonStatus, setButtonStatus] = useState('Enabled');

  const checkWinner = (buttons) => {
    if (buttons[0] === buttons[1] && buttons[1] === buttons[2]) {
      if (buttons[0] === p1) {
        console.log('1p1 wins');
        gameOver('p1');
      }
      if (buttons[0] === p2) {
        console.log('1p2 wins');
        gameOver('p2');
      }
    }
    if (buttons[3] === buttons[4] && buttons[4] === buttons[5]) {
      if (buttons[3] === p1) {
        console.log('2p1 wins');
        gameOver('p1');
      }
      if (buttons[3] === p2) {
        console.log('2p2 wins');
        gameOver('p2');
      }
    }
    if (buttons[6] === buttons[7] && buttons[7] === buttons[8]) {
      if (buttons[6] === p1) {
        console.log('3p1 wins');
        gameOver('p1');
      }
      if (buttons[6] === p2) {
        console.log('3p2 wins');
        gameOver('p2');
      }
    }
    if (buttons[0] === buttons[3] && buttons[3] === buttons[6]) {
      if (buttons[0] === p1) {
        console.log('4p1 wins');
        gameOver('p1');
      }
      if (buttons[0] === p2) {
        console.log('4p2 wins');
        gameOver('p2');
      }
    }
    if (buttons[1] === buttons[4] && buttons[4] === buttons[7]) {
      if (buttons[1] === p1) {
        console.log('p1 wins');
        gameOver('5p1');
      }
      if (buttons[1] === p2) {
        console.log('p2 wins');
        gameOver('5p2');
      }
    }
    if (buttons[2] === buttons[5] && buttons[5] === buttons[8]) {
      if (buttons[2] === p1) {
        console.log('6p1 wins');
        gameOver('p1');
      }
      if (buttons[2] === p2) {
        console.log('6p2 wins');
        gameOver('p2');
      }
    }
    if (buttons[0] === buttons[4] && buttons[4] === buttons[8]) {
      if (buttons[0] === p1) {
        console.log('7p1 wins');
        gameOver('p1');
      }
      if (buttons[0] === p2) {
        console.log('7p2 wins');
        gameOver('p2');
      }
    }
    if (buttons[2] === buttons[4] && buttons[4] === buttons[6]) {
      if (buttons[2] === p1) {
        console.log('8p1 wins');
        gameOver('p1');
      }
      if (buttons[2] === p2) {
        console.log('8p2 wins');
        gameOver('p2');
      }
    }
  };

  useEffect(() => {
    console.log('in useEffect');
    console.log(buttons);
  }, [buttons]);

  const updateBoard = (position) => {
    if (buttons[position] === '') {
      if (player === 'p1') {
        buttons[position] = p1;
        setPlayer('p2');
        setMessage(players['p2'] + ' Turn');
      } else {
        buttons[position] = p2;
        setPlayer('p1');
        setMessage(players['p1'] + ' Turn');
      }
    }
    setButtons(buttons);
    checkWinner(buttons);
  };

  const gameOver = (winner) => {
    setMessage(players[winner] + ' WINS!!!');
    setButtonStatus('Disabled');
  };

  const resetGame = () => {
    console.log('Game Reset');
    setButtons(['', '', '', '', '', '', '', '', '']);
    setPlayer('p1');
    setMessage(players['p1'] + ' Turn');
    setButtonStatus('Enabled');
  };

  return (
    <div>
      <div className="MainPage">
        Welcome to the game of Tic-Tac-Toe
        <p />
        <h2>{message}</h2>
        <div className="matrix">
          {buttons.map((button, index) => {
            return (
              <Block
                key={index}
                position={index}
                updateBoard={updateBoard}
                buttons={buttons}
                buttonStatus={buttonStatus}
              />
            );
          })}
        </div>
        <button className="reset" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default App;
