import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import Home from './components/pages/Home';

const details = {
  headerTitle: 'React Application',
  footerTitle: 'Footer Title Using Constant'
};

class App extends React.Component {
  render() {
    return(
      <div>
        <Header details={details}/>
        <Home num={5234}/>
        <Footer details={details}/>
      </div>
    );
  }
};

export default App;
