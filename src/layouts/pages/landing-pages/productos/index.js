// src/layouts/pages/productos/index.js

// Importa los componentes de Material Kit
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid"; // Importamos Grid para la organización

// Importa los componentes del menú y pie de página
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Importa el nuevo componente ProductCard
import ProductCard from "examples/Cards/ProductCard";

// Importa las rutas
import routes from "routes";
import footerRoutes from "footer.routes";

// Importa la imagen de fondo
import bgImage from "assets/images/bg-about-us.jpg";

// Importa tus datos de productos
import productsData from "data/products";

// Función para obtener la imagen correcta
function getProductImage(imagePath) {
  try {
    const images = require.context("assets/images/main", true);
    return images(imagePath.replace("/products/main/", "./"));
  } catch (error) {
    console.error("No se pudo cargar la imagen:", imagePath, error);
    return "https://via.placeholder.com/400";
  }
}

// Función de prueba para el botón "Ver Detalles"
const handleViewDetails = (productName) => {
  alert(`Ver detalles del producto: "${productName}"`);
};

function Productos() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/authentication/sign-in",
          label: "Iniciar Sesión",
          color: "default",
        }}
        transparent
        light
      />

      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MKBox sx={{ mx: "auto", textAlign: "center" }}>
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Nuestros Productos
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            Aquí puedes encontrar una selección de nuestros mejores productos.
          </MKTypography>
        </MKBox>
      </MKBox>

      <MKBox component="section" my={6} pt={6}>
        <Grid container spacing={3} justifyContent="center" sx={{ px: { xs: 2, lg: 8 } }}>
          {productsData.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                image={getProductImage(product.image)}
                name={product.name}
                description={product.description}
                onAddToCart={() => handleViewDetails(product.name)}
              />
            </Grid>
          ))}
        </Grid>
      </MKBox>

      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Productos;