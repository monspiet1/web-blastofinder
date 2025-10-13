
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

import { Moon } from "lucide-react"

export default function HeaderNoLogged(){
     return(
        <div className="w-auto h-auto flex items-center justify-between bg-white px-20 py-10">
                <div className="h-10 w-10 bg-blue-400 flex items-center justify-center">
                    Logo
                </div>
                <div className="w-auto h-10 flex items-center justify-center rounded-2xl">

                        <NavigationMenu className="pr-10">
                            <NavigationMenuList className="w-auto flex justify-between">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:font-bold active:bg-purple-950 focus:bg-purple-950 active:text-white focus:text-white hover:text-purple-900  text-lg text-black" href="/">Home</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:font-bold active:bg-purple-950 focus:bg-purple-950 active:text-white focus:text-white hover:text-purple-900  text-lg text-black"href="/about">Sobre</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:font-bold active:bg-purple-950 focus:bg-purple-950 active:text-white focus:text-white hover:text-purple-900  text-lg text-black " href="/suggestions">Sugestões</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div >
                            <Moon className=" bg-white size-7 hover:size-8 cursor-pointer text-purple-950 border-purple-950" />
                        </div>
                </div>
        </div>
        
        
     )
}