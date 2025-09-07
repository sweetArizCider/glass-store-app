"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Modal,
  ModalBody,
  ModalHeader,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import Link from "next/link";
import { type ComponentProps, type FC, useState } from "react";
import { TypographyComponent } from "src/app/components/typography/TypographyComponent";

const iconsSize: "inherit" | "small" | "medium" | "large" = "large";
const iconsColor = "text-white";

export const LinkBarComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  // TODO - Replace with auth logic
  const [isLogged, setIsLogged] = useState<boolean>(true);

  const handleDrawerClose = () => setIsDrawerOpen(false);
  const handleModalClose = () => setOpenModal(false);

  return (
    <>
      <div
        className={
          "h-12 bg-blue-450 flex flex-row justify-center items-center pl-4 pr-4 md:pl-8 md:pr-8 relative duration-200"
        }
      >
        <section
          className={
            "flex md:flex-grow md:justify-start items-center sm:gap-8 gap-4 duration-200"
          }
        >
          <Link href={"https://web.whatsapp.com/"}>
            <WhatsAppIcon fontSize={iconsSize} className={iconsColor} />
          </Link>
          <Link href={"https://facebook.com/"}>
            <FacebookIcon fontSize={iconsSize} className={iconsColor} />
          </Link>
          <Link href={"https://instagram.com/"}>
            <InstagramIcon fontSize={iconsSize} className={iconsColor} />
          </Link>
        </section>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden absolute right-4 hover:cursor-pointer duration-200"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MoreVertOutlinedIcon fontSize={iconsSize} className={iconsColor} />
        </button>

        <section
          className={
            "hidden md:flex md:flex-grow md:justify-end md:items-center md:gap-4 duration-200"
          }
        >
          <Link href={"/productos"}>
            <SearchIcon fontSize={iconsSize} className={iconsColor} />
          </Link>
          <FavoriteBorderIcon
            onClick={() => setOpenModal(true)}
            fontSize={iconsSize}
            className={`${iconsColor} hover:cursor-pointer duration-200`}
          />

          {isLogged ? (
            <Dropdown
              label=""
              renderTrigger={() => (
                <PersonIcon
                  fontSize={iconsSize}
                  className={`${iconsColor} hover:cursor-pointer`}
                />
              )}
            >
              <DropdownHeader>
                <span className="block text-sm">¡Bienvenido/a, Brenda!</span>
                <span className="block truncate text-sm font-medium">
                  Glass Store TRC
                </span>
              </DropdownHeader>
              <DropdownDivider />
              <DropdownItem>Perfil de Usuario</DropdownItem>
              <DropdownDivider />
              <DropdownItem>Cerrar Sesión</DropdownItem>
            </Dropdown>
          ) : (
            <Dropdown
              label=""
              renderTrigger={() => (
                <PersonOutlinedIcon
                  fontSize={iconsSize}
                  className={`${iconsColor} hover:cursor-pointer`}
                />
              )}
            >
              <DropdownHeader>
                <span className="block text-sm">¡Bienvenido/a!</span>
                <span className="block truncate text-sm font-medium">
                  Glass Store TRC
                </span>
              </DropdownHeader>
              <DropdownDivider />
              <DropdownItem>Registrarse</DropdownItem>
              <DropdownItem>Iniciar Sesion</DropdownItem>
            </Dropdown>
          )}
        </section>

        <Drawer
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          position={"right"}
        >
          <DrawerHeader
            title={"Buen dia, Brenda!"}
            titleIcon={PersonIcon as FC<ComponentProps<"svg">>}
          />
          <DrawerItems>
            <Sidebar
              aria-label="Menu de Usuario"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <section className="flex h-full flex-col justify-between py-2">
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/">Productos</SidebarItem>
                    <SidebarItem href="/e-commerce/products">
                      Favoritos
                    </SidebarItem>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    {isLogged ? (
                      <>
                        <SidebarItem href="/perfil">
                          Perfil de Usuario
                        </SidebarItem>
                        <SidebarItem onClick={() => setIsLogged(false)}>
                          {" "}
                          {/* TODO - Replace with auth logic */}
                          Cerrar Sesión
                        </SidebarItem>
                      </>
                    ) : (
                      <>
                        <SidebarItem href="/registrarse">
                          Registrarse
                        </SidebarItem>
                        <SidebarItem href="/iniciarSesion">
                          Iniciar Sesion
                        </SidebarItem>
                      </>
                    )}
                  </SidebarItemGroup>
                </SidebarItems>
              </section>
            </Sidebar>
          </DrawerItems>
        </Drawer>
      </div>

      <Modal
        className={"duration-200"}
        show={openModal}
        position={"center"}
        onClose={handleModalClose}
      >
        <ModalHeader className={"pl-10"}>
          <TypographyComponent color={"gray"} body={"h3"}>
            Favoritos
          </TypographyComponent>
        </ModalHeader>
        <ModalBody>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Aqui iran los favoritos que vayas agregando.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              etc, etc, etc...
            </p>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
