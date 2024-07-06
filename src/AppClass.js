import React, { Component } from 'react';
import './App.css';
import './back.css';
import BoxClass from './component/BoxClass';

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
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      counter: "",
      winCount: 0,
      loseCount: 0
    };
  }

//   play = (userChoice) => {
//     const userSelect = choice[userChoice];
//     const computerChoice = this.randomChoice();
//     const result = this.judgement(userSelect, computerChoice);
//     const counter = this.counterresult(userSelect, computerChoice);

//     this.setState({
//       userSelect,
//       computerSelect,
//       result,
//       counter
//     });


//     if (result === "win") {
//       this.setState(prevState => ({ winCount: prevState.winCount + 1 }));
//     } else if (result === 'lose') {
//       this.setState(prevState => ({ loseCount: prevState.loseCount + 1 }));
//     }
//   };

play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerSelect = this.randomChoice(); // 변수 이름을 computerSelect로 변경
    const result = this.judgement(userSelect, computerSelect); // 변수 이름 변경 반영
    const counter = this.counterresult(userSelect, computerSelect); // 변수 이름 변경 반영

    this.setState({
      userSelect,
      computerSelect, // 상태 업데이트에도 올바른 이름 사용
      result,
      counter
    });

    if (result === "win") {
    this.setState(prevState => ({ winCount: prevState.winCount + 1 }));
    } else if (result === 'lose') {
    this.setState(prevState => ({ loseCount: prevState.loseCount + 1 }));
    };
}


  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };


  counterresult = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "lose" : "win";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "lose" : "win";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "lose" : "win";
    }
  };


  getUserColor = (result) => result === "win" ? "green" : result === "lose" ? "red" : "gray";
  getComColor = (result) => result === "win" ? "green" : result === "lose" ? "red" : "gray";


  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return choice[itemArray[randomItem]];
  };

  render() {
    return (
      <body className='background'>
        <header className='App-header'>가위바위보 게임을 시작하지</header>
        <p className='sub-title'>5판 3선이닷!!!</p>
        <div className="main">
          <BoxClass className='title' title="You" item={this.state.userSelect} result={this.state.result} borderColor={this.getUserColor(this.state.result)} />
          <div className="insert">
            <button onClick={() => this.play("scissors")}>가위</button>
            <button onClick={() => this.play("rock")}>바위</button>
            <button onClick={() => this.play("paper")}>보</button>
          </div>
          <BoxClass className='title' title="Computer" item={this.state.computerSelect} result={this.state.counter} borderColor={this.getComColor(this.state.counter)} />
        </div>
        <div className="count"><h2>승리 횟수: {this.state.winCount}</h2></div>
        <div className="count"><h2>패배 횟수: {this.state.loseCount}</h2></div>
        <button id='reset'>Reset 아직 구현 못함ㅠㅠ<br></br>주일에 추가로 더 하겠습니다,,</button>
      </body>
    );
  }
}
