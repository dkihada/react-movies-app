import React from 'react';
import {Header} from './layout/header/Header'
import {Footer} from './layout/footer/Footer'
import {Main} from './layout/main/Main'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
