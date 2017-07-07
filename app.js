import React from 'react';

const details = {
  headerTitle: 'React Application',
  footerTitle: 'Footer Title Using Constant'
};

class App extends React.Component {
  render() {
    return(
      <div>
        <h2>{details.headerTitle}</h2>
      </div>
    );
  }
};

export default App;
