import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLogin from "@/components/AdminLogin";
import BlogEditor from "@/components/BlogEditor";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { slug } = useParams();

  const { data: posts } = useQuery({
    queryKey: ['admin-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      return data;
    },
    enabled: isAuthenticated,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed in Admin:', event, session);
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("isAdmin");
    setIsAuthenticated(false);
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
    navigate("/");
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {slug ? 'Editar Artículo' : 'Nuevo Artículo'}
          </h1>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800"
          >
            Cerrar Sesión
          </button>
        </div>

        {!slug && posts && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Artículos existentes</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                  <div>
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate(`/admin/edit/${post.slug}`)}
                    variant="outline"
                  >
                    Editar
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <BlogEditor />
      </div>
    </div>
  );
};

export default Admin;