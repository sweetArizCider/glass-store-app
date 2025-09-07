import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar fluid>
      <NavbarToggle />
      <NavbarBrand as={Link} href="/" className={"md:pl-4 duration-200"}>
        <img
          src="/glass-store.svg"
          className="mr-8 h-7 md:h-9 duration-200"
          alt="Glass Store Logo"
        />
      </NavbarBrand>
      <div className="flex md:order-2 bg-transparent"></div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Contacto
        </NavbarLink>
        <NavbarLink href="#" active>
          Productos
        </NavbarLink>
        <NavbarLink href="#" active>
          Agendar Cita
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
