import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
// import Navbar from './component/navbar';
import Home from './container/home';
import Navbar from './component/navbar';
import QRGenerator from './container/qrcode';



function App(props) {
  // let location = useLocation();

  console.log(props)
  // const {location} = props.
  return (
    // <div>
      <Router>
        <Navbar/>
        {/* <navbar/> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:pathname" component={QRGenerator}/>

        </Switch>
      </Router>

    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
