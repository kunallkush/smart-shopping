import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layout from "./layout/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Layout>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Layout>
);
