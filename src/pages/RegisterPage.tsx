
import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Layout from "../components/layout/Layout";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 bg-slate-50">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default RegisterPage;
