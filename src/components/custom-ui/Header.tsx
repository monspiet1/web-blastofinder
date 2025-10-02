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

export default function Header(){
    return(
        <div className="w-full h-20 bg-purple-800 flex items-center justify-between px-20" >
            <div className="w-20 h-20 bg-red-300 flex items-center justify-center rounded-md">
                Logo
            </div>
            <div className="w-auto h-10 flex items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList className="w-120 flex justify-between">
                        <NavigationMenuItem>
                            <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold"><a href="../../app/pages/login" className="text-xl text-white">Início</a></NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-white"><a href="../../app/pages/login" className="text-xl text-white">Sobre</a></NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-white"><a href="../../app/pages/login" className="text-xl text-white">Ajuda</a></NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-white"><a href="../../app/pages/login" className="text-xl text-white">Detecção</a></NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}