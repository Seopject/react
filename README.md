# React 완전 정복기
리액트를 학습해봅시다!

### 리액트 기본
---
#### 터미널 명령어 
- Node.js
- `npm init react-app <프로젝트 이름>` 터미널에 입력해서 프로젝트 생성
    - https://create-react-app.dev/
- `npm start` 라이브 서버 띄우기

#### 각 폴더/파일 역할
- node_modules : 설치 라이브러리
- public : static 파일 보관함
- src : 소스코드 보관함(실질적 코딩하는 위치)
- package.json : 설치 라이브러리 목록

---

### JSX

#### JSX class
- react에선 HTML 대신 JSX 사용
- JSV에선 `<div class='black-nav'>` 같이 class 부여 불가, `<div className='black-nav'>` 이런 형식으로 className을 준다.

#### JSX를 활용한 데이터 바인딩
- `{ 변수명 }`
    - 함수를 정의해서 동적으로 사용 가능
    - 이미지를 불러올 때 상단에서 import 해오고 중괄호로 연결 가능
    ```
    import logo from './logo.svg';
    <img src={ logo }/>
    ```
    - src, id, href 등 속성에서도 { 변수명, 함수 등 } 으로 사용 가능
    - 상상 이상으로 { }를 활용한 변수명 사용 가능
    - className에서도 된다

#### JSX에서 style 속성 지정
- 오브젝트 형식으로 넣어야 함
    - `<div style={ { color : 'blue', fontSize : '30px'} }>`
        - 기존 font-size 사용 시 문법 오류, camelCase 사용
- 할 수 있긴 한데 className이 편하니 알아서

---

### useState
데이터는 변수에 넣거나 state에 저장 가능
state 사용을 위해 { useState } 상단에 첨부
```
import React, { useState } from 'react'
const [a, b] = useState('이런 글을 불러옵시다')
```
`const [a, b] = useState('이런 글을 불러옵시다')` : ES6 destructuring 문법 참고
    - array, object 안에 있던 자료를 변수에 쉽게 담을 수 있음


---
### tic-tac-toe 게임을 활용한 props 연습
#### `tictactoe` 폴더
- 부모와 자식 컴포넌트 이해
- 하나의 부모로 여러 자식 컴포넌트 활용
- `props`를 사용해서 부모 컴포넌트 -> 자식 컴포넌트 데이터 전달
- 이벤트 핸들러를 통해 자식 컴포넌트에서 이벤트 발생 시, 이벤트 핸들러 호출 후, 이벤트 핸들러 내에서 부모 컴포넌트로 데이터 전달

