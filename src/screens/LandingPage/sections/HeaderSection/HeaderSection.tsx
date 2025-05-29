import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { label: "Explore", href: "#" },
    { label: "Articles", href: "#" },
    { label: "Sign In", href: "#" },
  ];

  return (
    <header className="flex w-full items-center justify-between px-4 md:px-20 py-2 fixed top-0 left-0 z-50 backdrop-blur-md bg-[#8B1D2C]/30">
      {/* Brand logo/text */}
      <div className="font-heading-5 font-[number:var(--heading-5-font-weight)] text-neutral-100 text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
        chhichhore
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-1 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation and buttons */}
      <div 
        className={`
          fixed md:relative top-full md:top-auto left-0 md:left-auto 
          w-full md:w-auto bg-[#8B1D2C]/95 md:bg-transparent 
          py-4 md:py-0 flex flex-col md:flex-row items-center gap-4
          transition-all duration-300 ease-in-out
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'
          }
        `}
      >
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row items-center gap-2">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-2 py-3 font-button-m font-[number:var(--button-m-font-weight)] text-white text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)] hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Join Now button */}
        <Button
          variant="outline"
          className="px-4 py-3 rounded-[5px] border-2 border-solid border-white bg-transparent text-white font-button-m font-[number:var(--button-m-font-weight)] text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)] hover:bg-white hover:text-[#8B1D2C] transition-colors w-[200px] md:w-auto mx-4 md:mx-0"
        >
          Join Now
        </Button>
      </div>
    </header>
  );
};
