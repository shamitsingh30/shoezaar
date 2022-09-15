import './App.css';
import Header from './components/header';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/users/sign-in' element={< SignIn />}></Route>
          <Route exact path='/users/sign-up' element={< SignUp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
