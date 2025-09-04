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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images (usando las imágenes preexistentes y repitiéndolas)
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Nuestro Equipo
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Somos un grupo de profesionales apasionados y comprometidos con la excelencia, listos
              para servir a la comunidad dental.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1} // Reutilizamos team1
                name="Ing. Jeremmy"
                position={{ color: "info", label: "Director de Tecnología" }}
                description="Impulsando la visión tecnológica de Mobadent para asegurar que nuestras soluciones dentales estén siempre a la vanguardia del mercado."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2} // Reutilizamos team2
                name="Dr. Michael"
                position={{ color: "info", label: "Gerente Comercial y Financiero" }}
                description="Estrategias de crecimiento, gestión financiera y optimización de recursos para llevar a Mobadent a un futuro de éxito."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3} // Reutilizamos team3
                name="Dra. Monica"
                position={{ color: "info", label: "Fundadora y Gerente General" }}
                description="Liderando con una visión de excelencia, construyendo los cimientos de nuestra marca y asegurando la calidad de cada solución que ofrecemos."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4} // Reutilizamos team4
                name="Dr. Eduardo"
                position={{ color: "info", label: "Gerente de Operaciones y Logística" }}
                description="Optimizando la cadena de suministro para garantizar que cada producto llegue a su destino con la máxima precisión y en el menor tiempo posible."
              />
            </MKBox>
          </Grid>
          {/* Agrega a Gabriel y Gabriela, reutilizando las imágenes existentes */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team1} // Reutilizamos team1
                name="Msc. Gabriel"
                position={{
                  color: "info",
                  label: "Director de Ingeniería Biomédica",
                }}
                description="Con su experiencia técnica, lidera la supervisión del servicio técnico y garantiza el rendimiento óptimo de cada equipo."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2} // Reutilizamos team2
                name="Dra. Gabriela"
                position={{ color: "info", label: "Gerente de Marketing Digital" }}
                description="Conectando a nuestra marca con la comunidad profesional a través de estrategias digitales innovadoras y de valor."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
