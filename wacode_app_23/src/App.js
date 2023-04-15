import './App.css';
import MainPage from './components/MainPage';
import DailyInputForm from './components/DailyInputForm';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
        <MenuIcon className="absolute top-5 left-5"/>
        <DailyInputForm />
    </div>
  );
}

export default App;
