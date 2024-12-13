import * as z from "zod";

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;