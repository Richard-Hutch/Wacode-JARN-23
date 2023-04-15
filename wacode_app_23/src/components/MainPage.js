import React from "react";
import DailyInputForm from "./DailyInputForm";
import MenuIcon from '@mui/icons-material/Menu';

// Create a functional component
const MainPage = (props) => {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
      <MenuIcon className="absolute top-5 left-5"/>
      <DailyInputForm />
    </div>
  );
};

// Export the component
export default MainPage;
