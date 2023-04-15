import './App.css';
import LoginMenu from './components/LoginMenu/LoginMenu';
import MainPage from './components/MainPage';
import DailyInputForm from './components/DailyInputForm';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div className="App-backgroundMain">
      <div className="loginInfoContainer">
          <LoginMenu/>
      </div>
    </div>
  );
}

export default App;
