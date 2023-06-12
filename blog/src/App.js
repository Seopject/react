// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

// 서버에서 받아온 데이터라고 가정
const posts = '강남 고기 맛집'
function tempFunc() {
  return 100
}

function App() {

  const [a,b] = useState('이런 글을 불러옵시다')

  return (
    <div className="App">
      <div className='black-nav'>
      <h3>Seopject 개발 블로그</h3>
      </div>
      <div style={ { color : 'blue', fontSize : '30px'} }>
        <h4>{  posts }</h4>
        {/* 정의된 함수 동적으로 사용 */}
        <h4> { tempFunc() } </h4>
        {/* <img src={ logo }/> */}
      </div>

      <div className='list'>
        <h3>{ posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
