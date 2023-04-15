import  React from 'react';
import { useState, useEffect } from 'react';
import Face6Icon from '@mui/icons-material/Face6';
import EmailIcon from '@mui/icons-material/Email';
import Menu from "./MainDropMenu"

function ProfilePage() {
    return (
      <div className="flex flex-col items-center">
        <Menu className="absolute top-5 left-5" />
        <p className="mt-14 text-2xl font-bold">PROFILE</p>
        <div className="mt-4 bg-cyan-50 w-1/4 flex flex-col rounded-lg drop-shadow-xl">
            <div className = "flex flex-row mt-2 mb-4 ml-2">
                <Face6Icon className="mr-4"/>
                <p>UserName</p>
            </div>    
            <div className = "flex flex-row mb-2 ml-2">
                <EmailIcon className="mr-4"/>
                <p className="">Email</p>
            </div>   
        </div>
        {/* HISTORY */}
        <div className="mt-20 w-1/4">
            <p className="font-semibold">HISTORY</p>
            <div className="bg-cyan-50  flex flex-col rounded-lg drop-shadow-xl">
              <ul className= "space-y-4">
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
              </ul>
            </div>

        </div>
      </div>
    );
  }
  
  export default ProfilePage;