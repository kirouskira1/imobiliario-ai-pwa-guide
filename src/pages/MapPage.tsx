
import React from "react";
import Layout from "../components/layout/Layout";
import PropertyMap from "../components/map/PropertyMap";

const MapPage = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <PropertyMap />
      </div>
    </Layout>
  );
};

export default MapPage;
