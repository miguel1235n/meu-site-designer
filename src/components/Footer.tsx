const Footer = () => (
  <footer className="py-8 bg-foreground border-t border-primary-foreground/10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-heading text-lg text-primary-foreground/60">Miguel Designer</p>
      <p className="font-body text-xs text-primary-foreground/30 mt-2">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
