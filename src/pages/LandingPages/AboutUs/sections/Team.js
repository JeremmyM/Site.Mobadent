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
                position={{ color: "info", label: "Fundador y Director General" }}
                description="Liderando la visión de Mobadent para ofrecer las mejores soluciones en el mercado dental."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2} // Reutilizamos team2
                name="Dr. Michael"
                position={{ color: "info", label: "Jefe de Operaciones" }}
                description="Asegurando que cada pedido se procese y se entregue con la máxima eficiencia y precisión."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3} // Reutilizamos team3
                name="Dra. Monica"
                position={{ color: "info", label: "Gerente de Marketing" }}
                description="Conectando nuestra marca con la comunidad y mostrando el valor de nuestros productos."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4} // Reutilizamos team4
                name="Dr. Eduardo"
                position={{ color: "info", label: "Asesor Comercial" }}
                description="Ofreciendo soporte y asesoría personalizada para ayudarte a encontrar los productos ideales."
              />
            </MKBox>
          </Grid>
          {/* Agrega a Gabriel y Gabriela, reutilizando las imágenes existentes */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team1} // Reutilizamos team1
                name="Msc. Gabriel"
                position={{ color: "info", label: "Especialista en Logística" }}
                description="La voz amable detrás de Mobadent, siempre lista para resolver tus dudas y asistirte."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2} // Reutilizamos team2
                name="Dra. Gabriela"
                position={{ color: "info", label: "Atención al Cliente" }}
                description="La voz amable detrás de Mobadent, siempre lista para resolver tus dudas y asistirte."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
