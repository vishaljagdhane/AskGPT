import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import {CommonStateContext} from './Application/Commoncomponet/CommonStateProvider';
import AuthLogin from './Application/Auth/AuthLogin';

function App() {
  // console.log("process.env.REACT_TEST_VARIALE",process.env.REACT_TEST_VARIALE);
  console.log(process.env.REACT_TEST_VARIALE)
  const { userName } = useContext(CommonStateContext);
  return (
 <>
 {/* Teted commonContext and ENV variable  <h1>Hello World {userName} </h1>
 <h1>Hello {process.env.REACT_APP_TEST_VARIABLE}</h1> */}
<AuthLogin/>
 </>
  );
}

export default App;
