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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Importa tu componente de Marcas
import Brands from "./Brands";

// Images (No es necesario importar estas imágenes si solo vas a usar tu componente Brands)
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Con la confianza de</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            cientos de odontólogos y clínicas
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Nuestra reputación se ha construido sobre la base de un servicio de calidad y productos
            que cumplen con los más altos estándares del sector dental.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Dr. Juan Pérez"
              date="hace 1 día"
              review="Este es un producto excelente, la documentación es muy clara y me ha ayudado a ser más eficiente en mi trabajo."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Dra. María Zambrano"
              date="hace 1 semana"
              review="En Mobadent encontré la solución a todas mis necesidades. ¡Su servicio al cliente es increíblemente amable y los precios son muy accesibles para mi clínica!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Odontólogo David Torres"
              date="hace 3 semanas"
              review="Excelente producto. Me ayudó a reducir el tiempo de compra de mis insumos. Recomiendo a Mobadent para todos los profesionales que desean concentrarse en sus pacientes."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        {/* Se elimina la sección de logos duplicada */}
        <Brands />
      </Container>
    </MKBox>
  );
}

export default Information;
