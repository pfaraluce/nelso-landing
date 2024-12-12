import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import ImageUpload from "./blog/ImageUpload";
import EditorToolbar from "./blog/EditorToolbar";
import { generateSlug, uploadCoverImage } from "@/utils/blogUtils";

const BlogEditor = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
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
      console.log('Fetching post with slug:', slug);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        throw error;
      }
      console.log('Fetched post:', data);
      return data;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (post && editor) {
      console.log('Setting editor content:', post);
      setTitle(post.title);
      setExcerpt(post.excerpt || '');
      editor.commands.setContent(post.content);
    }
  }, [post, editor]);

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
    console.log('Starting save process...');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      let coverImageUrl = post?.cover_image || null;
      if (coverImage) {
        coverImageUrl = await uploadCoverImage(coverImage, supabase);
      }

      const postData = {
        title,
        slug: post ? post.slug : generateSlug(title),
        excerpt,
        content: editor.getHTML(),
        cover_image: coverImageUrl,
        author_id: user.id,
        updated_at: new Date().toISOString(),
      };

      console.log('Saving post with data:', postData);

      if (post) {
        console.log('Updating existing post with ID:', post.id);
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', post.id);

        if (error) {
          console.error('Error updating post:', error);
          throw error;
        }
        console.log('Post updated successfully');
        toast({
          title: "Éxito",
          description: "Artículo actualizado correctamente",
        });
      } else {
        const { error } = await supabase
          .from('posts')
          .insert(postData);

        if (error) {
          console.error('Error creating post:', error);
          throw error;
        }
        console.log('New post created successfully');
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

  const handleClear = () => {
    editor?.commands.clearContent();
    setTitle("");
    setExcerpt("");
    setCoverImage(null);
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

        <ImageUpload
          initialImage={post?.cover_image}
          onImageChange={setCoverImage}
        />

        <div className="border rounded-lg p-4">
          <EditorContent editor={editor} />
        </div>
      </div>
      
      <EditorToolbar
        isSubmitting={isSubmitting}
        onClear={handleClear}
        onSave={handleSave}
        isEditing={!!post}
      />
    </div>
  );
};

export default BlogEditor;