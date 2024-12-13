import { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isFormLoaded) {
          console.log('Formulario en vista, cargando Tally...');
          setIsFormLoaded(true);
        }
      });
    }, options);

    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }

    return () => {
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
    };
  }, [isFormLoaded]);

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Contacta con Nosotros</h2>
        <div ref={formContainerRef} className="glass p-8 rounded-xl min-h-[500px]">
          {isFormLoaded ? (
            <iframe
              src="https://tally.so/embed/3x9N1o?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulario de contacto Nelso"
              className="w-full"
            />
          ) : (
            <div className="flex items-center justify-center h-[500px]">
              <p className="text-lg text-gray-600">
                Haz clic aquí para cargar el formulario de contacto
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;