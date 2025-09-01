// src/pages/Presentation/sections/Brands.js
import React from "react";

// @mui material components
import MuiContainer from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Importa tus logos. Asegúrate de que la ruta sea "./Categorias/"
import logo3m from "assets/images/brands/3m.jpg";
import logoKerr from "assets/images/brands/Kerr.jpg";
import logoColtene from "assets/images/brands/Coltene.jpg";
import logoUltradent from "assets/images/brands/Ultradent.jpg";
import logoVOCO from "assets/images/brands/VOCO.jpg";
import logoZhermack from "assets/images/brands/Zhermack.jpg";

const Brands = () => {
  // Array de objetos con la información de los logos
  const brandLogos = [
    // Usa las variables importadas en el array.
    { src: logo3m, alt: "Logo de 3M" },
    { src: logoKerr, alt: "Logo de Kerr Dental" },
    { src: logoColtene, alt: "Logo de Coltene" },
    { src: logoUltradent, alt: "Logo de Ultradent" },
    { src: logoVOCO, alt: "Logo de VOCO" },
    { src: logoZhermack, alt: "Logo de Zhermack" },
  ];

  return (
    <MKBox component="section" my={3} py={0}>
      <MuiContainer>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Descubre Nuestras Marcas Asociadas
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2} px={{ xs: 0, sm: 8, md: 10 }}>
            Trabajamos con las marcas más respetadas de la industria dental para ofrecerte productos
            de la más alta calidad. Explora nuestra página dedicada a las marcas y descubre la
            excelencia que respalda cada uno de nuestros suministros.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {brandLogos.map((brand, index) => (
            <Grid item xs={6} md={4} lg={3} key={index}>
              <MKBox
                component="img"
                src={brand.src}
                alt={brand.alt}
                width="100%"
                opacity={0.7}
                sx={{
                  width: { xs: "80%", md: "150px" },
                  height: "auto",
                  "&:hover": { opacity: 1 },
                  display: "block",
                  mx: "auto",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </MuiContainer>
    </MKBox>
  );
};
export default Brands;
