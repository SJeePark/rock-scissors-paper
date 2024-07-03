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
  const [comImage, setComImage] = useState()

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    console.log(userChoice, "choice")
  }

  const getImage = () =>{
    setComImage(Math.floor(Math.random(choice.img) * choice.length))
    console.log(comImage, "image")
  }

  return (
    <div>
    <div className = "main">
        <Box title = "You" item={userSelect}/>
        <Box title = "Computer" item={comImage}/>
    </div>
    <div className="main">
      <button onClick={()=>play("scissors")&&getImage()}>가위</button>
      <button onClick={()=>play("rock")&&getImage()}>바위</button>
      <button onClick={()=>play("paper")&&getImage()}>보</button>
    </div>
    </div>
  );
}

export default App;

// 컴퓨터 랜덤 알고리즘
// 1. choice 객체에서 사진 갖고 오기
// 2. 버튼 클릭시 랜덤하게 이미지 출력