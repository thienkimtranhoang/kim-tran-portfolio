import { Briefcase, Award, Users, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    type: "Internship",
    title: "Software Engineering Intern",
    organization: "Tech Startup Co.",
    period: "Summer 2024",
    description: "Developed backend APIs and improved database query performance by 40%. Collaborated with senior engineers on feature development and participated in code reviews.",
    highlights: ["Built REST APIs", "Optimized SQL queries", "Agile methodology"],
  },
  {
    icon: Award,
    type: "Hackathon",
    title: "1st Place Winner",
    organization: "University Hackathon 2024",
    period: "March 2024",
    description: "Led a team of 4 to build an AI-powered accessibility tool for visually impaired users. Pitched to judges and secured first place among 50+ teams.",
    highlights: ["Team leadership", "AI integration", "Product pitching"],
  },
  {
    icon: Users,
    type: "Leadership",
    title: "President",
    organization: "Computer Science Society",
    period: "2023 - Present",
    description: "Organized workshops, hackathons, and speaker events for 200+ members. Built partnerships with tech companies for student mentorship programs.",
    highlights: ["Event management", "Community building", "Industry networking"],
  },
  {
    icon: GraduationCap,
    type: "Program",
    title: "ML Research Assistant",
    organization: "University AI Lab",
    period: "Fall 2023",
    description: "Assisted in research on natural language processing for medical text classification. Contributed to a paper submission and implemented baseline models.",
    highlights: ["NLP research", "Academic writing", "Model implementation"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Journey & Impact
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Key experiences that have shaped my skills and perspective in tech.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-elevated p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-md font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
