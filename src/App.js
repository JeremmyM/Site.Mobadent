/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Material Kit 2 React routes
import routes from "routes";

//Wsp bolita
import MKBox from "components/MKBox";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.name} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        {/* Aquí la redirección para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* CÓDIGO DEL BOTÓN DE WHATSAPP FLOTANTE CON MEJOR DISEÑO */}
      <MKBox
        component="a"
        href="https://wa.me/593960044111?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20productos."
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366", // Color oficial de WhatsApp
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <WhatsAppIcon sx={{ color: "white !important", fontSize: "2.5rem" }} />
      </MKBox>
    </ThemeProvider>
  );
}
