// Los modelos son los datos del componente
export class Project {
  id ?: number; // ?:(operador elvis) es cuando es opcional
  title: string;
  slug: string;
  description ?: string;
  user_id: number;
  created_at ?: string;
  updared_at ?: string;
}
