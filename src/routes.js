/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
//import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

const routes = [
  {
    name: "Páginas",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Información",
        collapse: [
          {
            name: "Quiénes Somos",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Contáctanos",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Nuestro Equipo",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "Autenticación",
        collapse: [
          {
            name: "Iniciar Sesión",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "Soporte",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Preguntas Frecuentes",
        description: "Encuentra respuestas a las preguntas más comunes sobre nuestros productos.",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/", // Reemplaza con tu enlace de FAQs
      },
      {
        name: "Nuestras Marcas",
        description: "Conoce las marcas de alta calidad que distribuimos.",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/", // Reemplaza con tu enlace de marcas
      },
      {
        name: "Políticas de Envío",
        description: "Información detallada sobre nuestros envíos y entregas.",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/", // Reemplaza con tu enlace de envíos
      },
      {
        name: "Nuestra Visión",
        description: "Conoce más sobre la misión de nuestra empresa.",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/", // Reemplaza con tu enlace de visión
      },
    ],
  },
  /*
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react", // Puedes cambiar este enlace a tu propio repositorio
  },
*/
];

export default routes;
