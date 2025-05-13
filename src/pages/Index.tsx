
import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import FeaturedProperties from "../components/home/FeaturedProperties";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <FeaturedProperties />
    </Layout>
  );
};

export default Index;
