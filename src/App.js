import React from "react";
import Layout from "./pages/layout/Layout";
import Main from "./pages/main/Main"; 
import Badge from "./components/Badge"
import NewBadge from "./pages/NewBadge/NewBadge.jsx";

function App() {
  return (
    <React.Fragment>
        <Layout>
          <NewBadge></NewBadge>
        </Layout>
    </React.Fragment>
  );
}

export default App;