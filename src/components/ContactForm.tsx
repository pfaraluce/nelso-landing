import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'form:submit' && event.origin === 'https://tally.so') {
        console.log('Formulario enviado con éxito');
        navigate('/success');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container mx-auto max-w-2xl px-2 sm:px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacta con Nosotros</h2>
        <div ref={formContainerRef} className="glass p-3 sm:p-8 rounded-xl min-h-[500px]">
          {isFormLoaded ? (
            <iframe
              src="https://tally.so/embed/3x9N1o?alignLeft=1&hideTitle=1&transparentBackground=1&redirectUrl=https://convocatoria2024.nelsoformacion.com/success"
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