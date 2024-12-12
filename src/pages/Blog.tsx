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

  const featuredPost = posts?.[0];
  const gridPosts = posts?.slice(1);

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      
      {isLoading ? (
        <div className="pt-32 pb-16 container mx-auto px-4">
          <p>Cargando artículos...</p>
        </div>
      ) : posts && posts.length > 0 ? (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <div className="relative h-[70vh] w-full mt-16">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${featuredPost.cover_image || '/placeholder.svg'})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                      {featuredPost.title}
                    </h1>
                    <p className="text-xl mb-6 max-w-2xl mx-auto">
                      {featuredPost.excerpt}
                    </p>
                    <Button asChild size="lg" variant="secondary" className="animate-fade-in">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Leer más <ChevronRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid Posts */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Artículos recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts?.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    {post.cover_image && (
                      <img 
                        src={post.cover_image} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                      />
                    )}
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription>
                      {new Date(post.created_at).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button asChild variant="secondary">
                      <Link to={`/blog/${post.slug}`}>
                        Leer más <ChevronRight className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="pt-32 pb-16 container mx-auto px-4">
          <p>No hay artículos publicados todavía.</p>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Blog;