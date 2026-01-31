import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Globe, BarChart3, Server } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Orbital: Advanced Level Project",
    description: "Developed a full-stack web application from scratch, featuring high-fidelity Figma mockups and a robust CI/CD pipeline. Integrated RESTful APIs with PostgreSQL and Docker to ensure high availability and streamlined deployment.",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    github: "https://github.com/LeThiHongMinh/Orbital", // Replace with your actual link from your resume 
    demo: "https://nustudyseeker.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Featured Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in AI, web development, and system design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-elevated p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
