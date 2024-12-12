import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface EditorToolbarProps {
  isSubmitting: boolean;
  onClear: () => void;
  onSave: () => void;
  isEditing: boolean;
}

const EditorToolbar = ({ isSubmitting, onClear, onSave, isEditing }: EditorToolbarProps) => {
  return (
    <div className="flex justify-end space-x-4">
      <Button variant="outline" onClick={onClear}>
        Limpiar
      </Button>
      <Button onClick={onSave} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {isEditing ? 'Actualizando...' : 'Guardando...'}
          </>
        ) : (
          isEditing ? 'Actualizar Artículo' : 'Guardar Artículo'
        )}
      </Button>
    </div>
  );
};

export default EditorToolbar;