import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { image: project1, title: "Escritório Moderno", category: "Corporativo", desc: "Otimização de layout para escritório com funcionalidade e identidade visual." },
  { image: project2, title: "Living Contemporâneo", category: "Residencial", desc: "Living minimalista onde madeira quente encontra equilíbrio perfeito." },
  { image: project3, title: "Restaurante Elegante", category: "Comercial", desc: "Espaço gastronômico com natureza como inspiração principal." },
  { image: project4, title: "Penthouse Panorâmico", category: "Residencial", desc: "Duplex que reescreve a intimidade urbana com toques sutis de madeira." },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs letter-spaced text-muted-foreground uppercase mb-4">Portfólio</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
          Projetos em destaque
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
            </div>
            <div className="mt-5">
              <p className="font-body text-[10px] letter-spaced text-muted-foreground uppercase">
                {project.category}
              </p>
              <h3 className="font-heading text-2xl text-foreground mt-1">{project.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
