import { motion } from "framer-motion";
import { Ruler, Palette, PenTool, HardHat } from "lucide-react";

const services = [
  { icon: Ruler, title: "Layout", desc: "O ponto de partida. Focado na inteligência do espaço, definindo a melhor distribuição dos móveis e fluxos através de plantas baixas estratégicas." },
  { icon: Palette, title: "Estudo Visual", desc: "Definição estética completa com imagens 3D realistas, guia de iluminação e sugestão de compras para quem busca identidade." },
  { icon: PenTool, title: "Projeto Autoral", desc: "Um dossiê técnico completo que inclui detalhamento civil, marcenaria sob medida e todas as especificações para execução da obra." },
  { icon: HardHat, title: "Gerenciamento de Obra", desc: "Acompanhamos orçamentos, fornecedores e visitas à obra, garantindo que o resultado final seja fiel ao projeto aprovado." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs letter-spaced text-muted-foreground uppercase mb-4">O que fazemos</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">Serviços</h2>
        <p className="font-body text-sm text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
          Desenvolvemos uma metodologia própria que se adapta à necessidade específica do seu projeto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-8 bg-background border border-border hover:shadow-lg transition-shadow duration-500 text-center group"
          >
            <service.icon className="w-8 h-8 mx-auto mb-6 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1} />
            <h3 className="font-heading text-2xl text-foreground mb-4">{service.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
