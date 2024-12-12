import { useState, useEffect } from "react";
import AdminLogin from "@/components/AdminLogin";
import BlogEditor from "@/components/BlogEditor";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    setIsAuthenticated(isAdmin);
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <button
            onClick={() => {
              localStorage.removeItem("isAdmin");
              setIsAuthenticated(false);
            }}
            className="text-red-600 hover:text-red-800"
          >
            Cerrar Sesión
          </button>
        </div>
        <BlogEditor />
      </div>
    </div>
  );
};

export default Admin;