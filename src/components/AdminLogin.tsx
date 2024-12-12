import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En un entorno real, esto se validaría contra un backend
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      onLogin();
      toast({
        title: "Inicio de sesión exitoso",
        description: "Bienvenido al panel de administración",
      });
    } else {
      toast({
        title: "Error de autenticación",
        description: "Credenciales incorrectas",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Panel de Administración</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;