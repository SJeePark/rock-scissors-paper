import { useState } from 'react';
import './App.css';
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

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice));
    setCounter(counterresult(choice[userChoice], computerChoice));
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
  const getUserColor = (result) => {
    if (result === "win") {
      return "green";
    } else if (result === "lose") {
      return "red";
    } else {
      return "purple";
    }
  }

  // Computer Border
  const getComColor = (counter) => {
    if (counter === "win") {
      return "green";
    } else if (counter === "lose") {
      return "red";
    } else {
      return "purple";
    }
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);  //Object.keys: 객체 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length);  //Math.floor: 소수점이하를 버리고 정수만 남기는 함수
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
    <div className = "main">
        <Box title = "You" item={userSelect} result = {result} borderColor={getUserColor(result)}/>
        <Box title = "Computer" item={computerSelect} result = {counter} borderColor={getComColor(counter)}/>
    </div>
    <div className="main">
      <button onClick={()=>play("scissors")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
