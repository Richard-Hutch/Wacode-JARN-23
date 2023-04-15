import './App.css';
import LoginMenu from './components/LoginMenu/LoginMenu';
import MainPage from './components/MainPage';
import DailyInputForm from './components/DailyInputForm';
import MenuIcon from '@mui/icons-material/Menu';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
        <MenuIcon className="absolute top-5 left-5"/>
        <CreateAccount />
    </div>
  );
}

export default App;
