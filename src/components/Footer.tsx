const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alex Chen. Built with passion and lots of coffee.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
