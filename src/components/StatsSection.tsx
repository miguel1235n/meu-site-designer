import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 100, suffix: "%", label: "Aprovação de clientes" },
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 12, suffix: "+", label: "Estados atendidos" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl font-light text-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <Counter target={stat.value} suffix={stat.suffix} />
            <span className="font-body text-xs letter-spaced-sm text-muted-foreground uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
