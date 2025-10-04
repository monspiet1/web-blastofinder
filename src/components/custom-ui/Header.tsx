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
        <div className="w-full z-50 bg-purple-800 flex items-center justify-between px-20 py-5 fixed top-0 right-0">
            <div className="w-10 h-10 bg-red-300 flex items-center justify-center rounded-md">
                Logo
            </div>
            <div className="w-auto h-10 flex items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList className="w-120 flex justify-between">
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
                            <NavigationMenuLink className="px-6 py-1 rounded-4xl hover:bg-purple-900 hover:text-bold hover:text-bold text-xl text-white font-bold" href="../../app/pages/login">Sair</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}