import { Code2, Brain, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Building clean, scalable code",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Exploring intelligent systems",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Finding elegant solutions",
  },
  {
    icon: Rocket,
    title: "Product Thinking",
    description: "From idea to impact",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Curious mind with a passion for building
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student with a deep fascination for how technology can solve meaningful problems. My journey started with simple scripts and has evolved into building machine learning models and full-stack applications.
              </p>
              <p>
                What drives me is the intersection of AI and real-world impact. I love taking complex problems, breaking them down, and creating solutions that actually work. Whether it's optimizing a prediction model or designing a user-friendly interface, I'm always focused on the outcome.
              </p>
              <p>
                Beyond coding, I'm a firm believer in continuous learning. I spend time exploring new frameworks, contributing to open-source, and staying updated with the latest in AI research. The tech world moves fast, and I love keeping pace with it.
              </p>
            </div>
          </div>

          {/* Skills Snapshot */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elevated p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
