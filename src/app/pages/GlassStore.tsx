import { BannerComponent } from "src/app/components/banner/BannerComponent";
import { FooterComponent } from "src/app/components/footer/FooterComponent";
import { LinkBarComponent } from "src/app/components/linkBar/LinkBarComponent";
import { NavbarComponent } from "src/app/components/navbar/NavbarComponent";

export default function GlassStore() {
  return (
    <>
      <LinkBarComponent />
      <NavbarComponent />
      <BannerComponent />
      <FooterComponent />
    </>
  );
}
