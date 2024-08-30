import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyles'; //정성적 공통 속성
import './styles/10000hours.css'; //페이지 특징적 속성 & 정량적 속성

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;