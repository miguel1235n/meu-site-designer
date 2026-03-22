import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="py-24 bg-foreground">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-xs letter-spaced text-primary-foreground/60 uppercase mb-4">Contato</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-primary-foreground mb-6">
          Vamos criar juntos?
        </h2>
        <p className="font-body text-sm text-primary-foreground/60 max-w-md mx-auto mb-12">
          Entre em contato e transforme seu espaço em um cenário único.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
          <div className="flex items-center gap-3 text-primary-foreground/70">
            <Phone size={16} strokeWidth={1} />
            <span className="font-body text-sm">+55 (85) 99446-7887</span>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/70">
            <Mail size={16} strokeWidth={1} />
            <span className="font-body text-sm">migueldefreitasrebelo@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/70">
            <MapPin size={16} strokeWidth={1} />
            <span className="font-body text-sm">Fortaleza, Brasil</span>
          </div>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5585994467887&text=Olá, gostaria de um orçamento para o meu projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-xs letter-spaced-sm border border-primary-foreground/50 text-primary-foreground px-10 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
        >
          FALAR NO WHATSAPP
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
