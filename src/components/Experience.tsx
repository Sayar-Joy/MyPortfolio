import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

const experiences = [
  {
    title: "Freelance Web Developer & Designer",
    company: "Independent Contractor",
    location: "Myanmar",
    period: "2024 - Present",
    description:
      "Designed and developed comprehensive web solutions including frontend, backend, and database architecture for various clients, specializing in media and entertainment platforms.",
    achievements: [
      "Built a complete web platform for a recap movie channel with custom CMS",
      "Implemented responsive design ensuring optimal viewing across all devices",
      "Developed robust backend APIs for content management and user interactions",
      "Integrated secure database solutions for data persistence and retrieval",
      "Delivered projects on time while maintaining high code quality standards",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in building real-world applications and solving complex
            technical challenges.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background glow-blue hidden lg:block"></div>

                <Card className="lg:ml-16 bg-card/50 border-border hover:bg-card/70 transition-all duration-300 shadow-imperial">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center glow-blue">
                          <Briefcase className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-primary font-semibold mb-4">
                          {exp.company}
                        </h4>

                        <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {exp.description}
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Star className="w-4 h-4 text-primary" />
                              Key Achievements:
                            </h5>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-semibold text-foreground mb-3">
                              Technologies:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
