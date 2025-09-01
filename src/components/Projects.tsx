import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { SiFigma } from "react-icons/si";

const projects = [
    {
    title: "EcoKyats Backend Server",
    description:
      "Backend server for EcoKyats mobile app. Handles user authentication, data storage, and business logic.",
    image: "/projects/ecoKyatsServer.png",
    technologies: ["Node.js", "Express", "MongoDB", "Google Cloud"],
    features: ["RESTful API", "User authentication", "Data management"],
    github: "https://github.com/Sayar-Joy",
    live: "https://demo.com",
    featured: false,
  },
  {
    title: "EcoKyats's Figma Design",
    description:
      "The Figma Design for EcoKyats, a mobile application that promotes points reward system when you throw plastic, glass, and other recyclable materials.",
    // public/ is served at the site root in Vite — use an absolute public path
    image: "/projects/ecoKyatsFigma.png",
    technologies: ["Figma", "UI/UX"],
    features: [
      "User-friendly design",
      "Users' side",
      "Admin side",
      "Clean layout",
    ],
    github: "https://github.com/Sayar-Joy",
    live: "https://demo.com",
    featured: true,
  },
  {
    title: "EcoKyats Mobile App for iOS and Android",
    description:
      "Mobile application that promotes a points reward system for recycling. Users can track their recycling habits and earn rewards.",
    image: "/projects/ecoKyatsApp.png",
    technologies: ["Flutter", "Dart"],
    features: [
      "User authentication",
      "Real-time tracking",
      "Push notifications",
    ],
    github: "https://github.com/Sayar-Joy/EcoKyats",
    live: "https://demo.com",
    featured: true,
  },

  {
    title: "YGNTV Website",
    description:
      "A website for YGNTV, a platform that provides news and entertainment content. Features a modern design and user-friendly interface.",
    image: "/projects/YGNTV.png",
    technologies: ["HTML", "CSS", "Vanilla JavaScript", "PHP"],
    features: ["Responsive design", "Dynamic content", "SEO optimization"],
    github: "https://github.com/Sayar-Joy",
    live: "https://demo.com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of applications that demonstrate my skills across the
            technological spectrum
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ecoOnlyCodeTitles = [
              "EcoKyats Mobile App for iOS and Android",
              "EcoKyats Backend Server",
            ];
            const showOnlyCode = ecoOnlyCodeTitles.includes(project.title);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-imperial transition-all duration-300 hover:-translate-y-2 ${
                    project.featured ? "border-primary/50" : ""
                  }`}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-6xl opacity-20">🚀</div>
                        </div>
                      )}

                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-3 text-primary">
                      {project.title}
                    </CardTitle>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      {showOnlyCode ? (
                        // For specific EcoKyats projects show only the Code button
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      ) : project.technologies.includes("Figma") ? (
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on Figma`}
                          >
                            <SiFigma className="w-4 h-4 mr-1 inline-block" />
                            View on Figma
                          </a>
                        </Button>
                      ) : (
                        <>
                          <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="flex-1"
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="rebel" size="lg">
            <a
              href="https://github.com/Sayar-Joy"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
