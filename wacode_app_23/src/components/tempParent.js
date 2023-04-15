import LoginMenu from "./LoginMenu/LoginMenu";
import LifeStyleForm from "./LifeStyleForm";
import Page404 from "./Page404"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function TempParent() {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
        <MenuIcon className="absolute top-5 left-5"/>
        <LifeStyleForm />
  </div>
  );
}

export default TempParent;
