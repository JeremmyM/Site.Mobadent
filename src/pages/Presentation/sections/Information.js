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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// Se mantienen las imágenes de la plantilla, pero puedes reemplazarlas con las tuyas
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={1} my={1}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Nuestra
                    <br />
                    Propuesta de Valor
                  </>
                }
                description="En Mobadent, nos enfocamos en ofrecer una experiencia de compra fluida y profesional con productos de la más alta calidad."
              />
              <RotatingCardBack
                image={bgBack}
                title="Descubre por qué"
                description="Te ayudamos a optimizar tu tiempo y recursos con nuestra amplia gama de insumos y equipos dentales."
                action={{
                  type: "internal",
                  route: "/pages/contact-us",
                  label: "Contáctanos",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Catálogo en Línea"
                  description="Explora nuestro catálogo completo de productos, con descripciones detalladas para encontrar lo que necesitas rápidamente."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Marcas de Confianza"
                  description="Trabajamos con las marcas líderes del mercado para garantizar la más alta calidad y seguridad en cada producto."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Ahorra Tiempo y Costos"
                  description="Centraliza tus compras en un solo lugar y optimiza tu presupuesto. Enfócate en tu trabajo, nosotros nos encargamos del resto."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Pedidos Flexibles"
                  description="Realiza pedidos desde cualquier dispositivo. Nuestra plataforma es accesible desde tu celular, tablet o computadora."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
