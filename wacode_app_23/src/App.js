import "./App.css";
import LoginMenu from "./components/LoginMenu/LoginMenu";
import Page404 from "./components/Page404"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LifeStyleForm from "./components/LifeStyleForm";

function App() {
  return (
    <div className="App font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404/>} />
          <Route path="/" element={<LoginMenu/>} />
          <Route path="/tool" element={ <LifeStyleForm/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
