import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto pb-32">
      <h2 className="mb-12 text-center text-3xl lg:text-4xl">Contact Us</h2>

      <div className="flex flex-col gap-16 text-center">
        {CONTACT.map((contact) => (
          <div
            key={contact.key}
            className="border-b-2 border-dotted border-zinc-600/40 pb-3"
          >
            <p>{contact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
