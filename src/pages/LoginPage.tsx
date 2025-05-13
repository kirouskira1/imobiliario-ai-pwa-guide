
import React from "react";
import LoginForm from "../components/auth/LoginForm";
import Layout from "../components/layout/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 bg-slate-50">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
