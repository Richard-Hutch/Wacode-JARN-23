import React, { useState, useEffect } from "react";
import Menu from "./MainDropMenu"

const SustainabilityPage = (props) => {


    return(
    <div className="flex flex-col items-center">
        <Menu className="absolute top-5 left-5" />
        <div className= "bg-sky-50 w-3/4  rounded-xl mt-14 mb-10">
            <p className="font-bold text-xl underline drop-shadow-lg min-h-[75px]">Sustainability Tips</p>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
        <div className="bg-sky-50 w-3/4 rounded-xl">
            <p className="font-bold text-xl underline drop-shadow-lg min-h-[75px]">Sea Level Rise Facts</p>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>

    </div>);
}

export default SustainabilityPage