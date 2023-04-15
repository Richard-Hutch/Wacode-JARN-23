import React, { useState, useEffect, useRef } from "react";
import DailyInputForm from "./DailyInputForm";
import MenuIcon from "@mui/icons-material/Menu";

const MainPage = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button onClick={handleMenuClick}>
          <MenuIcon
            className="absolute top-5 left-5 hover:bg-gray-100 hover:rounded-2xl"
            fontSize="large"
          />
      </button>

      {isMenuOpen === true && (
        <div
          className={`absolute top-14 left-5 bg-slate-600`}
        >
          fsdfadfldskf;jskldf
        </div>
      )}
      <DailyInputForm />
    </div>
  );
};

export default MainPage;
