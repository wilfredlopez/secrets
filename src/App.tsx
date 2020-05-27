import React from "react";
import "./styles/App.css";
import AppRoutes from "AppRoutes";
import { Header } from "components";
import "./styles/normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="app-root">
        <Header />
        <main id="main-content">
          <AppRoutes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
