import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// class Square extends React.Component {
//     // constructor(props) {
//     //   // constructor의 역할은 무엇인가?
//     //   // 클래스 기반 컴포넌트에서 클래스 인스턴트를 생성하고 초기화
//     //   // 컴포넌트가 마운트 되기 전 내부에서 this.state에 초기값 할당
//     //   super(props)
//     //   // JS 클래스에서 하위 클래스 생성자 정의시
//     //   // 항상 super 호출 필요
//     //   // 모든 React 컴포넌트 클래스는 생성자를 가질 때
//     //   // super(props) 호출 구문부터 작성해야 함
//     //   this.state = {
//     //     value: null,
//     //   }
//     // }

//     render() {
//       // const squareNum = this.props.value

//       return (
//         <button
//         className="square"
//         // onClick={
//         //   function() {
//         //     console.log('click')
//         //   }
//         // }
//         onClick={() => 
//           // JS this 개념 복습하기
//           // console.log(`click ${squareNum}`)
//           // state 설정
//           // this.setState({value: 'X'})
//           this.props.onClick()
//         }
//         >
//           {/* {this.state.value} */}
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  
  // Square을 함수 컴포넌트로 변경
  function Square(props) {
    return (
      <button className='square' onClick={props.onClick}>
      {/* onClick{() => this.props.onClick()}을 축약한 것 */}
        {props.value}
      </button>
    )
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      }
    }

    handleClick(i) {
      const squares = this.state.squares.slice()
      // 승리자가 있거나, 이미 박스가 채워졌다면 클릭 무시
      if (calculateWinner(squares) || squares[i]) {
        return
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O'
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      })
    }

    renderSquare(i) {
      return (
        <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
      )
    }
  
    render() {
      const winner = calculateWinner(this.state.squares)
      let status;
      if(winner) {
        status = 'Winner: ' + winner
      } else {
        status = `Next Player : ${this.state.xIsNext ? 'X' : 'O'}`
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  