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
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"

export default function HeaderLogged(){

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

        <div className="w-auto h-auto flex items-center justify-between bg-white px-30 py-10">
                <div className="h-10 w-auto bg-blue-400 flex items-center justify-center">
                    <div>
                        Logo
                    </div>
                    
                </div>
                <div className="w-auto h-10 flex items-center justify-center rounded-2xl">
                        <NavigationMenu className="pr-20">
                            <NavigationMenuList className="w-auto flex justify-between">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:font-bold active:bg-purple-950 focus:bg-purple-950 active:text-white focus:text-white hover:text-purple-900  text-xl text-black " href="/analysis">Análises</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:font-bold active:bg-purple-950 focus:bg-purple-950 active:text-white focus:text-white hover:text-purple-900  text-xl text-black " href="/detection">Detecção</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem >
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:font-bold active:bg-purple-950 focus:bg-purple-950 active:text-white focus:text-white hover:text-purple-900  text-xl text-black " href="/about">Sobre</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className="flex flex-row">
                            <div className="pr-10 flex items-center justify-center">
                                <Moon className=" bg-white size-7 hover:size-8 cursor-pointer text-purple-950 border-purple-950" />
                            </div>
                            <div>
                                <LogOut onClick={handleLogout} className=" bg-white hover:font-bold cursor-pointer size-7 hover:size-8 text-purple-950 border-purple-950"/>
                            </div>
                        </div>
                </div>
        </div>

     )
}