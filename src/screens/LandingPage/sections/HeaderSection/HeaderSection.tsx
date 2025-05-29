import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "Explore", href: "#" },
    { label: "Articles", href: "#" },
    { label: "Sign In", href: "#" },
  ];

  return (
    <header className="flex w-full items-center justify-between px-20 py-2 fixed top-0 left-0 z-10 backdrop-blur-md bg-rose-900/30">
      {/* Brand logo/text */}
      <div className="font-heading-5 font-[number:var(--heading-5-font-weight)] text-neutral-100 text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
        chhichhore
      </div>

      {/* Navigation and buttons */}
      <div className="flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="px-2 py-3 font-button-m font-[number:var(--button-m-font-weight)] text-white text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)]"
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
          className="px-4 py-3 rounded-[5px] border-2 border-solid border-white bg-transparent text-white font-button-m font-[number:var(--button-m-font-weight)] text-[length:var(--button-m-font-size)] tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)]"
        >
          Join Now
        </Button>
      </div>
    </header>
  );
};
