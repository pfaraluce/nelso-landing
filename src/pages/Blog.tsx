import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Cómo prepararse para las pruebas FEAST",
      description: "Guía completa para superar con éxito las pruebas de selección de controladores aéreos",
      date: "2024-03-15",
      slug: "como-prepararse-pruebas-feast"
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Blog</h1>
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover-lift">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.description}</p>
                  <Button asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Leer más <ChevronRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;