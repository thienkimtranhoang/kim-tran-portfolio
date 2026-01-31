import { Briefcase, Award, Users, GraduationCap, Globe, Layout, Code } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    type: "Internship",
    title: "Full-stack Development Intern",
    organization: "NUS IT-AI-Know Project",
    period: "Jun 2025 - Dec 2025",
    description: [
  "Engineered and maintained full-stack features for the high-availability AI-Know platform serving 10,000+ users using React, TypeScript, and FastAPI.",
  "Built 12 production-ready backend API endpoints and 5 complete UI interfaces.",
  "Improved system reliability by integrating Azure services and automating CI/CD with GitHub Actions and Azure DevOps.",
  "Automated 50+ API regression tests in Postman, reducing manual QA time by 60% and helping achieve <2% rollback rate.",
  "Collaborated with 20+ engineers on backend integration, UI updates, and API versioning.",
  "Documented workflows and API usage on Confluence to standardize development practices."
  ],
    highlights: ["React & FastAPI", "Azure DevOps", "API Automation"],
  },
  {
    icon: Code,
    type: "Teaching",
    title: "Adviser - Teaching Assistant",
    organization: "Orbital (NUS Independent Software Project)",
    period: "May 2025 - Aug 2025",
    description: ["Mentored 14 development teams through the full software lifecycle."," Provided technical guidance on web development, UI/UX design in Figma, and version control using GitHub."],
    highlights: ["Technical Mentorship", "Software Lifecycle", "UI/UX Guidance"],
  },
  {
    icon: Globe,
    type: "Internship",
    title: "Web App Development - UI/UX Intern",
    organization: "Aunty SG PTE LTD",
    period: "Sep 2024 - Feb 2025",
    description: ["Developed responsive WordPress solutions using HTML, CSS, PHP, and JS. Boosted SEO and website performance by 20% through optimization with Google Analytics and SEMrush."],
    highlights: ["Responsive Design", "SEO Optimization", "User Acceptance Testing"],
  },
  {
    icon: Users,
    type: "Leadership",
    title: "External Relations Lead - EXCO",
    organization: "Women in Tech @ NUS Computing",
    period: "Sep 2023 - Present",
    description: ["Lead and train a team of 20 to organize 15+ networking events. Successfully increased club visibility and membership by 30% through strategic outreach initiatives."],
    highlights: ["Team Leadership", "Strategic Outreach", "Event Management"],
  },
  {
    icon: Layout,
    type: "Design",
    title: "UI/UX Designer",
    organization: "NUS Fintech Society",
    period: "Aug 2024 - Apr 2025",
    description: ["Designed wireframes and high-fidelity mockups in Figma for the Software Development Department. Collaborated closely with engineers to integrate UI components using React and TypeScript."],
    highlights: ["Figma Prototyping", "Fintech UI", "Cross-functional Collaboration"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
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
                    <exp.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-purple-800 uppercase tracking-wider">
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
                  <ul className="text-muted-foreground leading-relaxed mb-4 list-disc list-inside space-y-1">
  {exp.description.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>

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
