import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Cómo prepararse para las pruebas FEAST
          </h1>
          <p className="text-gray-500 mb-8">15 de marzo de 2024</p>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Las pruebas FEAST (First European Air Traffic Controller Selection Test) son una parte crucial del proceso de selección para convertirse en controlador aéreo. En este artículo, te explicamos cómo prepararte adecuadamente para superarlas con éxito.
            </p>
            
            <h2>¿Qué son las pruebas FEAST?</h2>
            <p>
              FEAST es una batería de pruebas diseñada específicamente para evaluar las capacidades y aptitudes necesarias para la profesión de controlador de tránsito aéreo. Estas pruebas miden diferentes aspectos como:
            </p>
            <ul>
              <li>Capacidad de multitarea</li>
              <li>Memoria a corto plazo</li>
              <li>Razonamiento espacial</li>
              <li>Atención dividida</li>
              <li>Toma de decisiones bajo presión</li>
            </ul>

            <h2>Consejos para la preparación</h2>
            <p>
              La preparación adecuada es fundamental para superar estas pruebas. Algunos consejos clave incluyen:
            </p>
            <ol>
              <li>Practicar regularmente con ejercicios específicos</li>
              <li>Mantener un horario de estudio constante</li>
              <li>Familiarizarse con el formato de las pruebas</li>
              <li>Trabajar en la gestión del tiempo</li>
              <li>Mantener la calma durante las pruebas</li>
            </ol>

            <p>
              En Nelso Formación te ayudamos a prepararte de manera integral para estas pruebas, con un programa específicamente diseñado y probado con éxito por numerosos alumnos.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;