import React, { component } from 'react';
import Firstcom from './components/firstcom';

class App extends React.Component {
  test_function(){
    console.log("Test");
  };
  render() { 
    return (
    <div>
      <button
      onClick={this.test_function}
      className="btn btn-sm btn-primary"
      >test
      </button>
      <Firstcom/>
    </div>
    );
  }
}
 
export default App;