export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const uploadCoverImage = async (coverImage: File, supabase: any) => {
  const fileExt = coverImage.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  
  const { error: uploadError, data } = await supabase.storage
    .from('blog-images')
    .upload(fileName, coverImage);

  if (uploadError) throw uploadError;
  
  const { data: { publicUrl } } = supabase.storage
    .from('blog-images')
    .getPublicUrl(fileName);
    
  return publicUrl;
};