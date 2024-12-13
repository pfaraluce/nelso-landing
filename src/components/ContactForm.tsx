import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  englishLevel: z.enum(["B1", "B2", "C1", "C2"], {
    required_error: "Por favor, selecciona tu nivel de inglés",
  }),
  educationLevel: z.enum(["ESO", "Bachillerato", "Diplomatura", "Licenciatura"], {
    required_error: "Por favor, selecciona tu nivel de estudios",
  }),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comments: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Submitting form:", values);

      // Save to database
      const { error: dbError } = await supabase
        .from('contact_forms')
        .insert({
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone,
          message: `Nivel de inglés: ${values.englishLevel}\nNivel de estudios: ${values.educationLevel}\nComentarios: ${values.comments || 'No hay comentarios'}`,
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
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Contacta con Nosotros</h2>
        <div className="glass p-8 rounded-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Apellidos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Teléfono" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="englishLevel"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Nivel de inglés" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="B1">B1</SelectItem>
                        <SelectItem value="B2">B2</SelectItem>
                        <SelectItem value="C1">C1</SelectItem>
                        <SelectItem value="C2">C2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="educationLevel"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Nivel de estudios" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ESO">ESO</SelectItem>
                        <SelectItem value="Bachillerato">Bachillerato</SelectItem>
                        <SelectItem value="Diplomatura">Diplomatura</SelectItem>
                        <SelectItem value="Licenciatura">Licenciatura</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Comentarios (opcional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;