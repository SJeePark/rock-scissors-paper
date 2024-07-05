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
  rock:{
    name: "Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfwCYFRl_6ibJyaFBkESLGH8YYfuRM50eJA&s",
  },
  scissors:{
    name:"Scissors",
    img: "https://blackbearwow.github.io/image/rockPaperScissors/scissors.png",
  },
  paper:{
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
  const [loseCount, setLoseCount ] = useState(0);


  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    // setResult(judgement(choice[userChoice], computerChoice));
    const result = judgement(choice[userChoice], computerChoice);
    setResult(result);
    const result2 = counterresult(choice[userChoice], computerChoice)
    setCounter(result2)
    if (result === "win") {
      setWinCount(winCount + 1);  // 승리 시 winCount 증가
    }else if( result === 'lose'){   //패배 시 loseCount 증가
      setLoseCount(loseCount + 1);
    }
  }

  // user 승패 판단 
  const judgement = (user, computer) => {
      if(user.name === computer.name){
        return "tie"
      }else if(user.name ==="Rock") return computer.name==="Scissors"?"win":"lose"
      else if(user.name ==="Scissors") return computer.name === "Paper"?"win":"lose"
      else if(user.name === "Paper") return computer.name === "Rock"?"win":"lose"
  }

  // computer 승패 판단
  const counterresult = (user, computer) => {
    if(user.name === computer.name){
      return "tie"
    }else if(user.name ==="Rock") return computer.name==="Scissors"?"lose":"win"
    else if(user.name ==="Scissors") return computer.name === "Paper"?"lose":"win"
    else if(user.name === "Paper") return computer.name === "Rock"?"lose":"win"
  }

  // user Border
  const getUserColor = (result) => result === "win" ? "green" : result === "lose" ? "red" : "gray";
  // Computer Border 
  const getComColor = (result) => result === "win" ? "green" : result === "lose" ? "red" : "gray";



  const randomChoice=()=>{
    let itemArray = Object.keys(choice);  //Object.keys: 객체 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length);  //Math.floor: 소수점이하를 버리고 정수만 남기는 함수
    let final = itemArray[randomItem]
    return choice[final]
  }


  return (
    <body className = 'background'>
    <header className='App-header'>가위바위보 게임을 시작하지</header>
    <p className='sub-title'>5판 3선이닷!!!</p>
    <div className = "main">
        <Box className='title' title = "You" item={userSelect} result = {result} borderColor={getUserColor(result)}/>
        <div className="insert">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
        </div>
        <Box className='title' title = "Computer" item={computerSelect} result = {counter} borderColor={getComColor(counter)}/>
    </div>
    <div className="count"><h2>승리 횟수: {winCount}</h2></div>
    <div className="count"><h2>패배 횟수: {loseCount}</h2></div>
    <button id='reset'>Reset 아직 구현 못함ㅠㅠ<br></br>주일에 추가로 더 하겠습니다,,</button>
    </body>
  );
}

export default App;
