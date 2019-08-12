import React, {Component} from 'react';
import Nav from './components/Header'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Nav></Nav>  
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
