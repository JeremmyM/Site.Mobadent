// src/examples/Cards/ProductCard.js

import React from "react";
import PropTypes from "prop-types";

// Importa los componentes de Material Kit
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function ProductCard({ image, name, description, onAddToCart }) {
  return (
    <MKBox
      borderRadius="xl"
      shadow="xl"
      p={2}
      mb={3}
      sx={{
        overflow: "hidden",
        backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "450px",
        justifyContent: "space-between",
      }}
    >
      <MKBox
        sx={{
          width: "100%",
          height: "200px", // Altura fija para el contenedor de la imagen
          mb: 2,
          display: "flex", // Para centrar la imagen
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MKBox
          component="img"
          src={image}
          alt={name}
          borderRadius="lg"
          sx={{
            width: "100%",
            maxHeight: "100%",
            // **** CAMBIO CLAVE AQUI ****
            objectFit: "contain",
          }}
        />
      </MKBox>
      <MKBox
        sx={{
          height: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <MKTypography
          variant="h5"
          color="dark"
          fontWeight="bold"
          mb={1}
          sx={{
            minHeight: "40px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant="body2"
          color="text"
          my={1}
          sx={{
            minHeight: "60px",
            maxHeight: "90px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </MKTypography>
      </MKBox>
      <MKButton variant="gradient" color="primary" sx={{ mt: "auto" }} onClick={onAddToCart}>
        Ver Detalles 👁️
      </MKButton>
    </MKBox>
  );
}

// Validación de las propiedades (props) del componente
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
