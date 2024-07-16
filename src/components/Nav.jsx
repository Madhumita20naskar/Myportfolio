import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import Dark from "./Dark";

const Navbarmenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Skill", "Project"];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="space-x-2">
            <Image
              src="img.jpeg"
              alt="image"
              height={30}
              width={40}
              className="border-3 border-purple-600  rounded-full "
            />
            <p className="font-bold text-xl text-purple-600">
              Madhumita Naskar
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-9" justify="center">
          <NavbarItem>
            <Link className="font-medium text-xl" color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="font-medium text-xl"
              href="/skill"
              color="foreground"
            >
              Skill
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="font-medium text-xl"
              color="foreground"
              href="/project"
            >
              Project
            </Link>
          </NavbarItem>
          <Dark />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={index === 2 ? "/project" : index === 1 ? "/skill" : "/"}
                className="w-full"
                // href="/"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Navbarmenu;
