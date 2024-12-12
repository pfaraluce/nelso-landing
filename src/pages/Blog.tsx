import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Blog</h1>
          <div className="grid gap-6">
            {isLoading ? (
              <p>Cargando artículos...</p>
            ) : posts && posts.length > 0 ? (
              posts.map((post) => (
                <Card key={post.id} className="hover-lift">
                  <CardHeader>
                    {post.cover_image && (
                      <img 
                        src={post.cover_image} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                      />
                    )}
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      {new Date(post.created_at).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{post.excerpt}</p>
                    <Button asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Leer más <ChevronRight className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No hay artículos publicados todavía.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;