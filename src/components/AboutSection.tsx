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
            <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Curious mind with a passion for building
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Computer Engineering student at the National University of Singapore, driven by a fascination for how technology can solve meaningful problems. My journey has evolved from mastering core Data Structures and Algorithms to engineering high-availability platforms that serve over 10,000 users.
              </p>
              <p>
                What drives me is the intersection of AI and real-world impact. I thrive on taking complex technical challenges and breaking them down into scalable, high-performance solutions. Whether I am developing production-ready APIs with FastAPI, automating CI/CD pipelines, or designing intuitive interfaces in Figma, I am always focused on delivering an impactful outcome.
              </p>
              <p>
                Beyond coding, I am a firm believer in continuous learning and community growth. I have mentored software development teams through the full development lifecycle and led outreach initiatives as the External Relations Lead for Women in Tech @ NUS Computing to promote career development in the field. The tech world moves fast, and I am committed to keeping pace—and helping others do the same.
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
                  <item.icon className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />
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
