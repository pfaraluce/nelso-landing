import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="/lovable-uploads/f7c8d160-04c6-4ef8-a88d-4f5dfd77f8f4.png"
          alt="Control aéreo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Cómo prepararse para las pruebas FEAST
            </h1>
            <p className="text-xl text-gray-200">15 de marzo de 2024</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Las pruebas FEAST (First European Air Traffic Controller Selection Test) son una parte crucial del proceso de selección para convertirse en controlador aéreo. En este artículo, te explicamos cómo prepararte adecuadamente para superarlas con éxito.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6">¿Qué son las pruebas FEAST?</h2>
            <p>
              FEAST es una batería de pruebas diseñada específicamente para evaluar las capacidades y aptitudes necesarias para la profesión de controlador de tránsito aéreo. Estas pruebas miden diferentes aspectos como:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Capacidad de multitarea</li>
              <li>Memoria a corto plazo</li>
              <li>Razonamiento espacial</li>
              <li>Atención dividida</li>
              <li>Toma de decisiones bajo presión</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Consejos para la preparación</h2>
            <p>
              La preparación adecuada es fundamental para superar estas pruebas. Algunos consejos clave incluyen:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>Practicar regularmente con ejercicios específicos</li>
              <li>Mantener un horario de estudio constante</li>
              <li>Familiarizarse con el formato de las pruebas</li>
              <li>Trabajar en la gestión del tiempo</li>
              <li>Mantener la calma durante las pruebas</li>
            </ol>

            <p className="mt-8">
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