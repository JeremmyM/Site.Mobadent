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
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.7} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              suffix="%"
              title="Productos de calidad"
              description="Cada uno de nuestros productos está certificado y cumple con los estándares del mercado dental."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              title="Clientes satisfechos"
              description="Servimos a una gran comunidad de profesionales que confían en nuestros productos y servicios."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Soporte y asesoría"
              description="Nuestro equipo está siempre disponible para ayudarte a encontrar las mejores soluciones para tu práctica."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
