import { useRouter } from "next/navigation"
import { signOut } from "@lib/auth_client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"



export default function Logout() {

    const router = useRouter()

    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                router.push("/");
                router.refresh()
                },
            },
        });
    }

    return(
        <Button variant="outline" onClick={handleLogout} type="button" className="bg-purple-800 text-white cursor-pointer">
            Sair <LogOut/>
        </Button>
    )
}