import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const BlogEditor = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Comienza a escribir tu artículo aquí...</p>',
  });

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      if (!slug) return null;
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (post && editor) {
      setTitle(post.title);
      setExcerpt(post.excerpt || '');
      setCoverImagePreview(post.cover_image || '');
      editor.commands.setContent(post.content);
    }
  }, [post, editor]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleSave = async () => {
    if (!title || !editor?.getHTML()) {
      toast({
        title: "Error",
        description: "Por favor, completa el título y el contenido del artículo",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("No user found");
      }

      let coverImageUrl = post?.cover_image || null;
      if (coverImage) {
        const fileExt = coverImage.name.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const { error: uploadError, data } = await supabase.storage
          .from('blog-images')
          .upload(fileName, coverImage);

        if (uploadError) throw uploadError;
        
        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(fileName);
          
        coverImageUrl = publicUrl;
      }

      const newSlug = generateSlug(title);
      const postData = {
        title,
        slug: newSlug,
        excerpt,
        content: editor.getHTML(),
        cover_image: coverImageUrl,
        author_id: user.id,
        updated_at: new Date().toISOString(),
      };

      if (post) {
        // Update existing post
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', post.id);

        if (error) throw error;

        toast({
          title: "Éxito",
          description: "Artículo actualizado correctamente",
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('posts')
          .insert(postData);

        if (error) throw error;

        toast({
          title: "Éxito",
          description: "Artículo guardado correctamente",
        });
      }

      navigate('/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: "Error al guardar el artículo",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-96">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Título del artículo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl font-bold"
        />
        
        <Textarea
          placeholder="Entradilla del artículo"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="h-24"
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Imagen de portada
          </label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="cursor-pointer"
          />
          {coverImagePreview && (
            <img
              src={coverImagePreview}
              alt="Vista previa"
              className="mt-2 max-h-48 rounded-lg object-cover"
            />
          )}
        </div>

        <div className="border rounded-lg p-4">
          <EditorContent editor={editor} />
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          onClick={() => {
            editor?.commands.clearContent();
            setTitle("");
            setExcerpt("");
            setCoverImage(null);
            setCoverImagePreview("");
          }}
        >
          Limpiar
        </Button>
        <Button 
          onClick={handleSave}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {post ? 'Actualizando...' : 'Guardando...'}
            </>
          ) : (
            post ? 'Actualizar Artículo' : 'Guardar Artículo'
          )}
        </Button>
      </div>
    </div>
  );
};

export default BlogEditor;