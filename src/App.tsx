import React from 'react';
import Nav from './components/navbar';
import Menubar from './components/menubar';
import Main from './components/pageBody';
import GlobalStyle from './styles/global';



function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Menubar />
      <Main />
    </>
  );
}

export default App;
