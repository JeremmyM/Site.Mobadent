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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

// React hooks para manejar el estado
import { useState } from "react";

function ContactUs() {
  // Usar el estado de React para guardar los valores de los inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log("¡La función de envío se está ejecutando!"); // ✨ Línea de prueba agregada

    // Construir el mensaje para WhatsApp
    const phoneNumber = "593960044111"; // Reemplaza con el número de teléfono deseado
    const { fullName, email, message } = formData;
    const whatsappMessage = `
¡Hola! Me gustaría contactarte.

Mi nombre es: ${fullName}
Mi correo es: ${email}
Mi consulta es la siguiente:
${message}
    `.trim(); // .trim() elimina espacios en blanco al inicio y final

    // Codificar el mensaje para que se pueda usar en una URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construir la URL completa de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirigir al usuario a la URL de WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://wa.me/593960044111",
            label: "contactanos",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
              textAlign="center"
            >
              <MKTypography variant="h3" color="white">
                Contáctanos
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Para preguntas sobre productos, pedidos o cualquier consulta comercial, por favor
                llena el siguiente formulario. Nos pondremos en contacto contigo a la brevedad.
              </MKTypography>
              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
                onSubmit={handleFormSubmit}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Nombre Completo"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Correo Electrónico"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="¿En qué podemos ayudarte?"
                      placeholder="Describe tu consulta o problema..."
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Enviar Mensaje
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
