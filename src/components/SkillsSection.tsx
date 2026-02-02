const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "SVM", "Neural Networks", "Data Analysis", "Model Optimization", "Scikit-learn"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "REST APIs", "PostgreSQL", "MongoDB", "Linux"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "System Design", "Product Thinking", "Technical Writing", "Team Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Technologies & Expertise
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A snapshot of the tools and technologies I work with to build intelligent, scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
