"use client"
import { useSession } from "@lib/auth_client"
import { useEffect } from "react"


export default function Analysis(){
    
  const data = useSession()

  useEffect(() => {
    console.log("Sessão analisys: ", data)
  }, [data])

  if(!data.isPending){
    return(
        <div className="w-full h-screen flex items-center  justify-center">
            Analises estao aqui
        </div>
    )
  }
}