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
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Importa el icono de WhatsApp

function ProductCard({ image, name, description }) {
  // Variables para el enlace de WhatsApp
  const phoneNumber = "593960044111"; // Tu número de teléfono
  const message = `¡Hola! Estoy interesado en el producto "${name}" que vi en el catálogo de Mobadent. ¿Me pueden dar más información, por favor?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={image}
        title={name}
        sx={{
          height: 200,
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
        <MKButton
          variant="gradient"
          color="info"
          component="a" // Cambia a "a" para que actúe como un enlace
          href={whatsappUrl} // Usamos la URL de WhatsApp
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noreferrer" // Medida de seguridad
          fullWidth
          startIcon={<WhatsAppIcon />}
        >
          Comprar por WhatsApp
        </MKButton>
      </MKBox>
    </Card>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
