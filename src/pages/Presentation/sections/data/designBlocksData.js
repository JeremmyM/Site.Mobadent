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
        name: "Blanquemientos",
        count: 10,
        // CAMBIO: Añadir el parámetro de consulta a la ruta
        route: "/pages/productos?categoria=Blanqueamientos",
      },
      {
        image: collectionImage2,
        name: "Cementos",
        count: 14,
        // CAMBIO: Añadir el parámetro de consulta a la ruta
        route: "/pages/productos?categoria=Cementos",
      },
      {
        image: collectionImage3,
        name: "Grabado y Adhesion",
        count: 8,
        pro: false,
        // CAMBIO: Añadir el parámetro de consulta a la ruta
        route: "/pages/productos?categoria=Grabado y Adhesion",
      },
      {
        image: collectionImage4,
        name: "Endodoncia",
        count: 1,
        pro: false,
        // CAMBIO: Añadir el parámetro de consulta a la ruta
        route: "/pages/productos?categoria=Endodoncia",
      },
      {
        image: collectionImage5,
        name: "Manejo de Tejidos",
        count: 11,
        pro: false,
        // CAMBIO: Añadir el parámetro de consulta a la ruta
        route: "/pages/productos?categoria=Manejo de tejidos",
      },
      {
        image: collectionImage6,
        name: "Composites",
        count: 11,
        pro: false,
        // CAMBIO: Añadir el parámetro de consulta a la ruta
        route: "/pages/productos?categoria=Composites",
      },
    ],
  },
];
