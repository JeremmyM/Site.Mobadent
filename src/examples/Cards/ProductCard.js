// src/examples/Cards/ProductCard.js

// Importa los componentes de Material Kit y PropTypes
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

function ProductCard({ image, name, description, onAddToCart }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={image}
        title={name}
        sx={{
          height: 200,
          // Cambiamos 'cover' a 'contain' para que la imagen no se recorte
          objectFit: "contain",
          borderTopLeftRadius: ({ borders }) => borders.borderRadius.lg,
          borderTopRightRadius: ({ borders }) => borders.borderRadius.lg,
        }}
      />
      <MKBox p={2} sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <MKTypography variant="h5" fontWeight="bold" textTransform="capitalize" gutterBottom>
          {name}
        </MKTypography>
        <MKTypography
          variant="body2"
          color="text"
          sx={{
            flexGrow: 1,
            display: "block",
            lineHeight: "1.5",
          }}
        >
          {description}
        </MKTypography>
        <Divider sx={{ my: 1.5 }} />
        <MKButton variant="gradient" color="info" onClick={onAddToCart} fullWidth>
          Ver Detalles
        </MKButton>
      </MKBox>
    </Card>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
