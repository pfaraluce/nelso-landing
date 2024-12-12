import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ImageUploadProps {
  initialImage?: string;
  onImageChange: (file: File | null) => void;
}

const ImageUpload = ({ initialImage, onImageChange }: ImageUploadProps) => {
  const [imagePreview, setImagePreview] = useState<string>(initialImage || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
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
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Vista previa"
          className="mt-2 max-h-48 rounded-lg object-cover"
        />
      )}
    </div>
  );
};

export default ImageUpload;