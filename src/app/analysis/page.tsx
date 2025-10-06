"use client"
import { authClient } from "@lib/auth_client"
import { useEffect } from "react"


export default function Analysis(){
    
    useEffect(() => {
        async function fetchData() {
        // Mesmo sendo importada, isso roda no servidor por trás dos panos
        const data = authClient.useSession()
        console.log("Sessão:", data)
        }
        fetchData()
    }, [])

    return(
        <div className="w-full h-screen flex items-center  justify-center">
            Analises estao aqui
        </div>
    )
}