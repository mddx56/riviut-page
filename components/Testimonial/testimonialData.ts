import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mario López",
    designation: "Paciente",
    image: image1,
    content:
      "El diagnóstico temprano que recibí aquí marcó la diferencia. Estoy agradecida por su profesionalismo y el apoyo durante todo el proceso.",
  },
  {
    id: 2,
    name: "Carlos Hernández",
    designation: "Paciente",
    image: image2,
    content:
      "Gracias a Clínica Reviut, recuperé mi calidad de vida. Su equipo me ayudó a controlar mi insuficiencia renal con un tratamiento eficaz y un trato humano excepcional.",
  },
  {
    id: 3,
    name: "Devid Martínez",
    designation: "Paciente",
    image: image1,
    content:
      "La atención en Reviut es increíble. No solo me explicaron todo con claridad, sino que siempre me sentí acompañado en mi tratamiento.",
  },
  {
    id: 4,
    name: "Jhon Aguilar",
    designation: "Paciente",
    image: image2,
    content:
      "Después de años de problemas renales, finalmente encontré en Clínica Reviut un lugar donde me escucharon y me ofrecieron soluciones efectivas.",
  },
];
