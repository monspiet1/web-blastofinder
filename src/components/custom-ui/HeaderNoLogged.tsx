
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

export default function HeaderLogged(){
     return(
        <div className="w-auto h-10 flex items-center justify-center">
                        <NavigationMenu>
                            <NavigationMenuList className="w-120 flex justify-between">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold text-xl text-white font-bold" href="../../app/pages/login">Sugestões</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
        </div>
     )
}