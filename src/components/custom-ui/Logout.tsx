import { signOut } from "../../../server/users"
import { Button } from "@/components/ui/button"



export default function Logout() {

    const handleLogout = async () => {
        await signOut()
    }

    return(
        <Button variant="outline" onClick={handleLogout} type="button" className="bg-purple-800 text-white cursor-pointer">
            Sair 
        </Button>
    )
}