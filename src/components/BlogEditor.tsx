import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const { toast } = useToast();
  
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Comienza a escribir tu artículo aquí...</p>',
  });

  const handleSave = () => {
    if (!title || !editor?.getHTML()) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    // En un entorno real, esto se enviaría a un backend
    console.log({
      title,
      content: editor.getHTML(),
      date: new Date().toISOString(),
    });

    toast({
      title: "Éxito",
      description: "Artículo guardado correctamente",
    });
  };

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
        <div className="border rounded-lg p-4">
          <EditorContent editor={editor} />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => editor?.commands.clearContent()}>
          Limpiar
        </Button>
        <Button onClick={handleSave}>
          Guardar Artículo
        </Button>
      </div>
    </div>
  );
};

export default BlogEditor;