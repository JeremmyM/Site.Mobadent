// footer.routes.js

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import mobadentLogo from "assets/images/favicon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Mobadent",
    image: mobadentLogo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/tu_pagina_mobadent",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/tu_usuario_mobadent",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/tu_perfil_mobadent",
    },
    {
      icon: <WhatsAppIcon />,
      link: "https://wa.me/593960044111",
    },
  ],
  menus: [
    {
      name: "",
      items: [
        { name: "", href: "" },
        { name: "", href: "" },
        { name: "", href: "" },
      ],
    },
    {
      name: "Compañía",
      items: [
        { name: "Quiénes Somos", href: "/pages/landing-pages/about-us" },
        { name: "Catálogo", href: "/pages/productos?categoria=Todos" }, // ¡AQUÍ ESTÁ LA CORRECCIÓN!
        // { name: "Nuestro Blog", href: "/blog" },
        { name: "Contacto", href: "/pages/landing-pages/contact-us" },
      ],
    },
    {
      name: "Productos",
      items: [
        {
          name: "Cementos",
          href: "/pages/productos?categoria=Cementos",
        },
        { name: "Composites", href: "/pages/productos?categoria=Composites" },
        { name: "Endodoncia", href: "/pages/productos?categoria=Endodoncia" },
        { name: "Blanqueamientos", href: "/pages/productos?categoria=Blanqueamientos" },
      ],
    },
    {
      name: "",
      items: [
        { name: "", href: "" },
        { name: "", href: "" },
        { name: "", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados. Copyright &copy; {date} Mobadent por{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Mobadent
      </MKTypography>
      .
    </MKTypography>
  ),
};
