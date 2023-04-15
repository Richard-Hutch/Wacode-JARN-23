import "./App.css";
import LoginMenu from "./components/LoginMenu/LoginMenu";
import MainPage from "./components/MainPage";
import Page404 from "./components/Page404"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404/>} />
          <Route path="/" element={ <MainPage/>}>
          <Route path="/login" element={<LoginMenu/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
