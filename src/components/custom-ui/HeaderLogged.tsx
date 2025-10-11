"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
//import {signOut} from "../../../server/users"
import { useRouter } from "next/navigation"
import { signOut } from "@lib/auth_client"

export default function HeaderLogged({ session }: { session: any }){

    const router = useRouter()

    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                router.push("/");
                },
            },
        });
    }



     return(

        <div className="w-auto h-20 flex items-center justify-between bg-purple-900 px-10">
                <div className="h-10 w-10 bg-blue-400 flex items-center justify-center">
                    Logo
                </div>
                <div className="w-auto h-10 flex items-center justify-center">
                        <NavigationMenu>
                            <NavigationMenuList className="w-auto flex justify-between">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold text-xl text-white font-bold" href="../../app/pages/login">Início</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold text-xl text-white font-bold" href="../../app/pages/login">Sobre</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold text-xl text-white font-bold" href="../../app/pages/login">Detecção</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold text-xl text-white font-bold" href="../../app/pages/login" onClick={handleLogout}>Sair</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                </div>
        </div>

     )
}