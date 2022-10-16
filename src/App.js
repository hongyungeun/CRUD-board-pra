import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import BoardPage from './pages/BoardPage';
import MyPage from './pages/MyPage';
import BoardChangePage from './pages/BoardChangePage';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>} />
          <Route path='/board-page/:id' element={<BoardPage />}/>
          <Route path='/mypage/:id' element={<MyPage />} />
          <Route path='/board-page/:id/change' element={<BoardChangePage />} />
        </Routes>
      
    </div>
  );
}

export default App;
