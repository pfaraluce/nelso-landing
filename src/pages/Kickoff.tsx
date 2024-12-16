import Footer from "@/components/Footer";

const Kickoff = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Imagen destacada */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <img
              src="/lovable-uploads/cf4bb134-3703-4655-b6aa-32db67a234fc.png"
              alt="Kick-off ENAIRE 2024"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Contenido principal */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold text-primary">
              🛫 Comienza el camino hacia ENAIRE 2024 con paso decidido
            </h1>

            <p className="text-lg">
              Este jueves 19 de diciembre a las 10:00, te invitamos a la reunión clave 
              donde presentaremos nuestra hoja de ruta de preparación para la 
              convocatoria de ENAIRE 2024:
            </p>

            <ul className="space-y-4 text-left max-w-xl mx-auto">
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Descubre el plan paso a paso para afrontar cada fase.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Resuelve tus dudas sobre las novedades de esta convocatoria.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔️</span>
                <span>Prepárate con una estrategia clara y adaptada al nuevo proceso.</span>
              </li>
            </ul>
          </div>

          {/* Formulario de Tally */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://tally.so/embed/3x9N1o?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulario de registro Kick-off ENAIRE 2024"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kickoff;