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
      <div class="h-screen w-screen flex items-center justify-center">
        <MenuIcon className="absolute top-5 left-5"/>
        <DailyInputForm />
      </div>
    </div>
  );
}

export default App;
