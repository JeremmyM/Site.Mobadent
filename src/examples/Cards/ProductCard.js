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
      }}
    >
      <MKBox
        component="img"
        src={image}
        alt={name}
        borderRadius="lg"
        width="100%"
        sx={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <MKBox pt={2}>
        <MKTypography variant="h5" color="dark" fontWeight="bold">
          {name}
        </MKTypography>
        <MKTypography variant="body2" color="text" my={1}>
          {description}
        </MKTypography>
        {/* Aquí puedes mostrar otra información si lo deseas, como la categoría o la marca */}
        {/* <MKTypography variant="h6" color="primary" fontWeight="bold">
          Marca: {vendor}
        </MKTypography> */}
        <MKButton variant="gradient" color="primary" sx={{ mt: 2 }} onClick={onAddToCart}>
          Ver Detalles 👁️
        </MKButton>
      </MKBox>
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