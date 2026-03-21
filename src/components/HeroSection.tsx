import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Design de Interiores Exclusivo",
    title: "Criamos o cenário\nda sua história",
    desc: "Projetos que unem estética, conforto e identidade.",
  },
  {
    image: hero2,
    subtitle: "Excelência em Cada Detalhe",
    title: "Espaços que\ninspiram viver",
    desc: "Transformamos seu espaço com um projeto completo.",
  },
  {
    image: hero3,
    subtitle: "Bem-vindo ao Estúdio Miguel Designer",
    title: "Onde a arte\nencontra o lar",
    desc: "Em qualquer lugar do Brasil.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-xs letter-spaced text-primary-foreground/80 mb-6 uppercase"
        >
          {slides[current].subtitle}
        </motion.p>
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground whitespace-pre-line leading-tight"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-sm text-primary-foreground/70 mt-6 max-w-md"
        >
          {slides[current].desc}
        </motion.p>
        <motion.a
          key={`cta-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          href="#projetos"
          className="mt-10 font-body text-xs letter-spaced-sm border border-primary-foreground/50 text-primary-foreground px-10 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
        >
          CONHEÇA NOSSOS PROJETOS
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-0.5 transition-all duration-500 ${
              i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
