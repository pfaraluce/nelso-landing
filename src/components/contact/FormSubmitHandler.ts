import { FormValues } from "./FormSchema";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export const handleFormSubmit = async (values: FormValues) => {
  console.log("Submitting form:", values);

  // Save to database
  const { error: dbError } = await supabase
    .from('contact_forms')
    .insert({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      english_level: values.englishLevel,
      education_level: values.educationLevel,
      comments: values.comments || null,
    });

  if (dbError) throw dbError;

  // Send confirmation email
  const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
    body: values
  });

  if (emailError) throw emailError;

  toast({
    title: "¡Formulario enviado con éxito! 🎉",
    description: "Nos pondremos en contacto contigo muy pronto.",
    className: "bg-primary text-primary-foreground",
  });

  return true;
};