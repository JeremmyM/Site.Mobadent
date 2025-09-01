/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Importa la imagen local directamente.
import collectionImage from "./Categorias/collection.png";
import collectionImage2 from "./Categorias/collection2.png";
import collectionImage3 from "./Categorias/collection3.png";
import collectionImage4 from "./Categorias/collection4.png";
import collectionImage5 from "./Categorias/collection5.png";
import collectionImage6 from "./Categorias/collection6.png";

//const imagesPrefix =
//  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Categorías de Productos",
    description: "Explora nuestra selección de productos esenciales para tu práctica diaria.",
    items: [
      {
        // Usa la variable importada en lugar de la ruta de la cadena de texto
        image: collectionImage,
        name: "Equipos y Herramientas",
        count: 10,
        route: "/secciones/productos/equipos",
      },
      {
        image: collectionImage2,
        name: "Materiales de Restauración",
        count: 14,
        route: "/secciones/productos/restauracion",
      },
      {
        image: collectionImage3,
        name: "Desinfección y Bioseguridad",
        count: 8,
        pro: false,
      },
      {
        image: collectionImage4,
        name: "Instrumental Quirúrgico",
        count: 1,
        pro: false,
      },
      {
        image: collectionImage5,
        name: "Ortodoncia",
        count: 11,
        pro: false,
      },
      {
        image: collectionImage6,
        name: "Endodoncia",
        count: 11,
        pro: false,
      },
      /*
      {
        image: `${imagesPrefix}/teams.jpg`,
        name: "Insumos Desechables",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/stats.jpg`,
        name: "Rayos X y Diagnóstico",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        name: "Implantes Dentales",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/projects.jpg`,
        name: "Laboratorio Dental",
        count: 6,
        pro: true,
      },
      */
    ],
  },
  /*
  {
    title: "Servicios Especializados",
    description: "Conoce nuestros servicios de valor añadido para tu negocio.",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Soporte Técnico",
        count: 4,
        route: "/secciones/servicios/soporte",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Asesoría de Compra",
        count: 2,
        route: "/secciones/servicios/asesoria",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Entregas a Nivel Nacional",
        count: 3,
        route: "/secciones/servicios/entregas",
      },
    ],
  },
  */
  /*
  {
    title: "Información y Contacto",
    description: "Mantente al día con nuestras novedades y comunícate con nosotros.",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Preguntas Frecuentes",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contacto",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Formulario de Pedido",
        count: 3,
        route: "/secciones/informacion/formulario-pedido",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: "Nuestro Blog",
        count: 6,
        route: "/secciones/informacion/blog",
      },
    ],
  },
  */
];
