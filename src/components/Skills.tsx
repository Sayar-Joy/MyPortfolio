import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      {
        name: "Flutter (Dart)",
        level: 90,
        description: "Cross-platform mobile mastery",
      },
      {
        name: "Mobile UI/UX",
        level: 85,
        description: "User-centric design principles",
      },
      {
        name: "App Store Deployment",
        level: 80,
        description: "Publishing and distribution",
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚡",
    skills: [
      {
        name: "Node.js / Express.js",
        level: 85,
        description: "Server-side JavaScript expertise",
      },
      { name: "MongoDB", level: 80, description: "NoSQL database management" },
      { name: "MySQL", level: 75, description: "Relational database design" },
      {
        name: "Laravel (PHP)",
        level: 70,
        description: "PHP framework development",
      },
    ],
  },
  {
    title: "Frontend & Tools",
    icon: "🌐",
    skills: [
      {
        name: "HTML, CSS, JavaScript",
        level: 85,
        description: "Web fundamentals mastery",
      },
      { name: "Figma", level: 80, description: "Design and prototyping" },
      {
        name: "Git / Version Control",
        level: 85,
        description: "Code versioning expertise",
      },
      {
        name: "Web Hosting",
        level: 75,
        description: "Deployment and server management",
      },
    ],
  },
];

const technologies = [
  "Flutter",
  "Dart",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Laravel",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "Git",
  "Web Hosting",
  "Mobile Development",
  "API Development",
  "Database Design",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The technologies and skills I wield to build exceptional mobile and
            web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-imperial transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-primary">
            Technologies I Master
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
