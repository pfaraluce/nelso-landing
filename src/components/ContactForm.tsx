const ContactForm = () => {
  return (
    <section id="contacto" className="section-padding bg-muted">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Contacta con Nosotros</h2>
        <div className="glass p-8 rounded-xl">
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;