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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={12}>
          <MKTypography variant="h3" mb={6}>
            Estamos preparando contenido valioso para ti. Nuestro blog estará disponible muy pronto
            con consejos, noticias y guías sobre materiales dentales. ¡Mantente atento!
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Cómo elegir el instrumental correcto"
              description="Seleccionar el instrumental adecuado es crucial para el éxito de cualquier procedimiento. Aquí te mostramos cómo..."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Proximamente",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Avances en materiales de restauración"
              description="La tecnología avanza rápidamente. Conoce los nuevos materiales que están revolucionando la odontología estética."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Proximamente",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Guía para un consultorio moderno"
              description="Desde equipos hasta software, te ayudamos a equipar tu consultorio para ofrecer un servicio de vanguardia."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Proximamente",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Gestión de inventario para clínicas"
              description="Descubre cómo optimizar la gestión de tus materiales dentales para ahorrar tiempo y reducir costos."
              action={{
                type: "internal",
                route: "",
                label: "Proximamente",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
