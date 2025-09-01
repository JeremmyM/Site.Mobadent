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

// Importa tus logos de marcas (asegúrate de que estas rutas sean correctas)
import logo3m from "assets/images/brands/3m.jpg";
import logoKerr from "assets/images/brands/Kerr.jpg";
import logoColtene from "assets/images/brands/Coltene.jpg";
import logoUltradent from "assets/images/brands/Ultradent.jpg";
import logoVOCO from "assets/images/brands/VOCO.jpg";
import logoZhermack from "assets/images/brands/Zhermack.jpg";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        {/* Sección de logos de marcas */}
        <Grid container spacing={3} sx={{ mb: 12, alignItems: "center" }}>
          {" "}
          {/* Alinea los elementos verticalmente */}
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
            <MKBox
              component="img"
              src={logo3m}
              alt="3M"
              sx={{ maxWidth: "80px", height: "auto", opacity: 0.7 }} // Ajusta el tamaño aquí
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
            <MKBox
              component="img"
              src={logoKerr}
              alt="Kerr"
              sx={{ maxWidth: "80px", height: "auto", opacity: 0.7 }} // Ajusta el tamaño aquí
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
            <MKBox
              component="img"
              src={logoColtene}
              alt="Coltene"
              sx={{ maxWidth: "80px", height: "auto", opacity: 0.7 }} // Ajusta el tamaño aquí
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
            <MKBox
              component="img"
              src={logoUltradent}
              alt="Ultradent"
              sx={{ maxWidth: "80px", height: "auto", opacity: 0.7 }} // Ajusta el tamaño aquí
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
            <MKBox
              component="img"
              src={logoVOCO}
              alt="VOCO"
              sx={{ maxWidth: "80px", height: "auto", opacity: 0.7 }} // Ajusta el tamaño aquí
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
            <MKBox
              component="img"
              src={logoZhermack}
              alt="Zhermack"
              sx={{ maxWidth: "80px", height: "auto", opacity: 0.7 }} // Ajusta el tamaño aquí
            />
          </Grid>
        </Grid>
        {/* Sección de contadores */}
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
