import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Let's build something impactful together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and AI. Feel free to reach out!
          </p>

          <Button variant="hero" size="lg" asChild>
            <a href="mailto:alex.chen@email.com">
              <Mail size={20} />
              Say Hello
              <ArrowRight size={16} />
            </a>
          </Button>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="mailto:alex.chen@email.com"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-secondary transition-all group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground">Email</span>
            </a>
            <a
              href="https://github.com/thienkimtranhoang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-secondary transition-all group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thienkimtranhoang/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-secondary transition-all group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
