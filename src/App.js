import { useState } from 'react';
import './App.css';
import './back.css';
import Box from './component/Box';

// 1.박스 2개 - 타이틀, 사진, 결과
// 2.가위 바위 보 버튼
// 3.버튼 클릭시 클릭한 값이 박스에 보임
// 4.컴퓨터는 랜덤하게 아이템 선택
// 5. 3, 4의 결과를 갖고 누가 이겼는지 판단
// 6.승패에 따라 테두리 색 변경(승-초록, 지면-빨강, 비기면-검정)


const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfwCYFRl_6ibJyaFBkESLGH8YYfuRM50eJA&s",
  },
  scissors: {
    name: "Scissors",
    img: "https://blackbearwow.github.io/image/rockPaperScissors/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const [counter, setCounter] = useState("")
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [gameOver, setGameOver] = useState(false); 


  const play = (userChoice) => {
    if (gameOver) return; // 게임이 종료 후 실행x

    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)

    const result = judgement(choice[userChoice], computerChoice);
    setResult(result);
    const result2 = counterresult(choice[userChoice], computerChoice)
    setCounter(result2)

    if (result === "win") {
      setWinCount(winCount + 1);
      if (winCount + 1 === 3) {
        setGameOver(true);
        alert("You Win!");
      }
    } else if (result === 'lose') {
      setLoseCount(loseCount + 1);
      if (loseCount + 1 === 3) {
        setGameOver(true);
        alert("Computer Win!");
      }
    }
  }

  // user 승패 판단
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  }

  // computer 승패 판단
  const counterresult = (user, computer) => {
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "lose" : "win"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "lose" : "win"
    else if (user.name === "Paper") return computer.name === "Rock" ? "lose" : "win"
  }

  // user border
  const getUserColor = (result) => result === "win" ? "green" : result === "lose" ? "red" : "gray";
  // com border
  const getComColor = (result) => result === "win" ? "green" : result === "lose" ? "red" : "gray";

  const randomChoice = () => {
    let itemArray = Object.keys(choice);  // Object.keys: 객체 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);  // Math.floor: 소수점 이하를 버리고 정수만 남기는 함수
    let final = itemArray[randomItem]
    return choice[final]
  }

  // 게임 초기화
  const resetGame = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
    setCounter("");
    setWinCount(0);
    setLoseCount(0);
    setGameOver(false);
  }

  return (
    <div className='background'>
      <header className='App-header'>가위바위보 게임을 시작하지</header>
      <p className='sub-title'>5판 3선이닷!!!</p>
      <div className="main">
        <Box className='title' title="You" item={userSelect} result={result} borderColor={getUserColor(result)} />
        <div className="insert">
          <button onClick={() => play("scissors")} disabled={gameOver}>가위</button>
          <button onClick={() => play("rock")} disabled={gameOver}>바위</button>
          <button onClick={() => play("paper")} disabled={gameOver}>보</button>
        </div>
        <Box className='title' title="Computer" item={computerSelect} result={counter} borderColor={getComColor(counter)} />
      </div>
      <div className="count"><h2>승리 횟수: {winCount}</h2></div>
      <div className="count"><h2>패배 횟수: {loseCount}</h2></div>
      {gameOver && <h2 className='count'>{winCount === 3 ? "You Win!" : "Computer Win!"}</h2>}
      <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
