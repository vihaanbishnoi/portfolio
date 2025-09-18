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

import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-between w-full py-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white font-bold text-xl">
                
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <div className="flex space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink href="#hero" className="text-white hover:text-purple-400">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="text-white hover:text-purple-400">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className="text-white hover:text-purple-400">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="text-white hover:text-purple-400">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

export default Navbar
