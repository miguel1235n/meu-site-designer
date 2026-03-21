import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês atendem apenas localmente ou fazem projetos à distância?",
    a: "Atendemos projetos em todo o Brasil e no exterior por meio de projetos e acompanhamentos online. A tecnologia nos permite realizar reuniões, apresentações e supervisão de forma totalmente digital e eficiente.",
  },
  {
    q: "Quais são os serviços oferecidos pelo escritório?",
    a: "Nossos serviços incluem: Layout para planejamento inicial; Estudo Visual com modelagem 3D e renders realistas; Projeto Completo com executivos detalhados; e Acompanhamento de Obra com supervisão integral.",
  },
  {
    q: "Qual a diferença entre projeto visual e projeto completo?",
    a: "O Estudo Visual foca na inspiração e visualização inicial com 3D e renders. O Projeto Completo inclui todos os executivos detalhados, pronto para execução direta, garantindo fidelidade total ao conceito autoral.",
  },
  {
    q: "Como funciona o processo de criação?",
    a: "Tudo inicia com uma reunião de Briefing, onde captamos seus sonhos, necessidades e orçamento. Avançamos para o conceito e layout, seguido do Projeto Criativo com imagens 3D, e entregamos o Projeto Executivo detalhado.",
  },
];

const FAQSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
          Perguntas Frequentes
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-border bg-background px-6">
              <AccordionTrigger className="font-body text-sm text-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
