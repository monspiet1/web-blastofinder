"use client"

import { useState } from "react";

export default function Header(){

    const [isLogged, setIsLogged] = useState(false)

    return(
        <div className="w-full z-50 bg-purple-800 flex items-center justify-between px-20 py-5 fixed top-0 right-0">
            <div className="w-10 h-10 bg-red-300 flex items-center justify-center rounded-md">
                Logo
            </div>

            <div>
                
            </div>
            
        </div>
    );
}