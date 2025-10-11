"use client"
import { useSession } from "@lib/auth_client"
import { useEffect } from "react"


export default function Detection(){
    
  const data = useSession()

  if(!data.isPending){
    return(
        <div className="w-full h-screen flex items-center  justify-center">
            Detecção aqui
        </div>
    )
  }
}