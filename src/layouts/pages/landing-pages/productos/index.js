// src/layouts/pages/productos/index.js

// Importamos los hooks de React
import { useState, useEffect } from "react";
// CAMBIO: Importamos el hook useLocation para leer la URL
import { useLocation } from "react-router-dom";

// Importa los componentes de Material Kit
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MKInput from "components/MKInput";
import InputAdornment from "@mui/material/InputAdornment";

// Importa los iconos de Material UI
import SearchIcon from "@mui/icons-material/Search";

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

function Productos() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlCategory = searchParams.get("categoria");

  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "Todos");
  const [selectedVendor, setSelectedVendor] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const [displayCategories, setDisplayCategories] = useState([]);
  const [displayVendors, setDisplayVendors] = useState([]);

  useEffect(() => {
    const productsAfterSearch = productsData.filter((product) => {
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      return (
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery)
      );
    });

    const productsForCategoryOptions =
      selectedVendor !== "Todos"
        ? productsAfterSearch.filter((product) => product.vendor === selectedVendor)
        : productsAfterSearch;
    const newCategories = [
      "Todos",
      ...new Set(productsForCategoryOptions.map((product) => product.category)),
    ];
    setDisplayCategories(newCategories);

    const productsForVendorOptions =
      selectedCategory !== "Todos"
        ? productsAfterSearch.filter((product) => product.category === selectedCategory)
        : productsAfterSearch;
    const newVendors = [
      "Todos",
      ...new Set(productsForVendorOptions.map((product) => product.vendor)),
    ];
    setDisplayVendors(newVendors);

    let finalProducts = productsAfterSearch;

    if (selectedCategory !== "Todos") {
      finalProducts = finalProducts.filter((product) => product.category === selectedCategory);
    }
    if (selectedVendor !== "Todos") {
      finalProducts = finalProducts.filter((product) => product.vendor === selectedVendor);
    }

    finalProducts.sort((a, b) => a.orden - b.orden);

    setFilteredProducts(finalProducts);
  }, [selectedCategory, selectedVendor, searchQuery, location.search]);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "https://wa.me/593960044111",
          label: "Contactanos",
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

      <MKBox component="section" my={1} pt={2}>
        <Grid container spacing={3} justifyContent="center" sx={{ px: { xs: 2, lg: 8 } }}>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              gap={4}
            >
              <MKBox>
                <MKTypography variant="h6" color="text" mb={1} sx={{ textAlign: "left" }}>
                  Categoría
                </MKTypography>
                <FormControl sx={{ minWidth: 200, width: "100%" }} variant="standard">
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {displayCategories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </MKBox>
              <MKBox>
                <MKTypography variant="h6" color="text" mb={1} sx={{ textAlign: "left" }}>
                  Marca
                </MKTypography>
                <FormControl sx={{ minWidth: 200, width: "100%" }} variant="standard">
                  <Select
                    value={selectedVendor}
                    onChange={(e) => setSelectedVendor(e.target.value)}
                  >
                    {displayVendors.map((vendor) => (
                      <MenuItem key={vendor} value={vendor}>
                        {vendor}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </MKBox>
              <MKBox>
                <MKTypography variant="h6" color="text" mb={1} sx={{ textAlign: "left" }}>
                  Buscar
                </MKTypography>
                <MKInput
                  placeholder="Nombre o descripción"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{ minWidth: 300 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </MKBox>
            </MKBox>
          </Grid>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard
                  image={getProductImage(product.image)}
                  name={product.name}
                  description={product.description}
                  vendor={product.vendor}
                />
              </Grid>
            ))
          ) : (
            <MKTypography variant="h5" color="text" mt={5}>
              No se encontraron productos con los filtros seleccionados.
            </MKTypography>
          )}
        </Grid>
      </MKBox>
      <MKBox mt={10}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Productos;
