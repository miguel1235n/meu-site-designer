import { motion } from "framer-motion";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutPhoto}
            alt="Miguel Designer"
            className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs letter-spaced text-muted-foreground uppercase mb-4">Sobre</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-8">
            Miguel Designer
          </h2>
          <div className="space-y-5">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Com mais de uma década de atuação em design de interiores, minha trajetória é marcada não apenas pela técnica, mas pela busca incessante pela harmonia.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Apaixonado pela arte e pela arquitetura contemporânea, trago para os meus projetos a mesma precisão de uma sinfonia: acredito que a beleza reside no equilíbrio entre o cheio e o vazio, no ritmo das formas e na atemporalidade dos materiais.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Não crio apenas ambientes para serem vistos, mas espaços para serem sentidos. Encaro cada projeto como uma composição única, onde o design atua como a partitura que rege a vida de quem habita.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-block mt-10 font-body text-xs letter-spaced-sm border border-foreground text-foreground px-10 py-4 hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
          >
            FALAR COM O MIGUEL
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
