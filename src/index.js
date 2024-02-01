import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './app/app.jsx';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@components/thems/default";
import { StrictMode } from "react";





const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
  
);


