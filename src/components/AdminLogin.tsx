import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "./ui/use-toast";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session);
      
      if (event === 'SIGNED_IN' && session) {
        console.log('User signed in successfully:', session.user);
        localStorage.setItem("isAdmin", "true");
        onLogin();
        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido al panel de administración",
        });
      }

      if (event === 'SIGNED_OUT') {
        console.log('User signed out');
        localStorage.removeItem("isAdmin");
        navigate('/');
      }

      if (event === 'USER_UPDATED') {
        console.log('User updated:', session?.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [onLogin, toast, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Panel de Administración</h2>
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#000000',
                  brandAccent: '#333333',
                }
              }
            }
          }}
          providers={[]}
          theme="light"
          onError={(error) => {
            console.error('Auth error:', error);
            toast({
              title: "Error de autenticación",
              description: "Credenciales inválidas. Por favor, intente nuevamente.",
              variant: "destructive",
            });
          }}
        />
      </div>
    </div>
  );
};

export default AdminLogin;