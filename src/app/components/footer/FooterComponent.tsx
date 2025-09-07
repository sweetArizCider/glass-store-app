"use client";

import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import {
  GITHUB_DEVELOPERS_LINKS,
  GLASS_STORE_LINKS,
} from "src/app/utils/constants";

export function FooterComponent() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="Glass Store TRC" />
            <FooterLinkGroup col>
              <FooterLink href={GLASS_STORE_LINKS.ubication}>
                Torreón Coahuila, México
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="nosotros" />
            <FooterLinkGroup col>
              <span>
                En Glass Store, nos especializamos en ofrecer soluciones de alta
                calidad para la decoración y renovación de hogares y negocios.
                Con años de experiencia en el sector, nuestro objetivo es
                transformar espacios con productos innovadores y elegantes como
                vidrio templado, persianas, papel tapiz y herrajes.
              </span>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="contacto" />
            <FooterLinkGroup col>
              <FooterLink href={GLASS_STORE_LINKS.whatsapp}>
                +52 123 4564 456
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="desarrolladores" />
            <FooterLinkGroup col>
              <FooterLink href={GITHUB_DEVELOPERS_LINKS.pamela}>
                Pamela Robledo Pinto
              </FooterLink>
              <FooterLink href={GITHUB_DEVELOPERS_LINKS.arizpe}>
                Carlos Arizpe Hernandez
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href={GLASS_STORE_LINKS.whatsapp}
            by="Glass Store"
            year={2025}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href={GLASS_STORE_LINKS.facebook} icon={BsFacebook} />
            <FooterIcon href={GLASS_STORE_LINKS.instagram} icon={BsInstagram} />
            <FooterIcon href={GLASS_STORE_LINKS.whatsapp} icon={BsWhatsapp} />
            <FooterIcon href={GLASS_STORE_LINKS.github} icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
