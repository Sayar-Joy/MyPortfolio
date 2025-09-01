import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Information Technology",
    institution: "Thanlyin Technological University",
    location: "Thanlyin, Myanmar",
    period: "2019 - 2027",
    description:
      "Comprehensive study in Information Technology covering software development, database management, networking, and system analysis. Active participant in programming competitions and tech events.",
    achievements: [
      "Class Leader - Demonstrated leadership and communication skills",
      "Project Leader - Led multiple team-based development projects",
    ],
  },
  {
    degree: "Certificate of Professional Web Developer",
    institution: "Fairway Technology",
    location: "Myanmar",
    period: "2024",
    description:
      "Intensive professional certification program focusing on modern web development technologies, best practices, and industry standards.",
    achievements: [
      "Completed comprehensive web development curriculum",
      "Hands-on experience with real-world projects",
    ],
  },
  {
    degree: "Full-stack Mobile App Development",
    institution: "Brighter Myanmar",
    location: "Myanmar",
    period: "2025",
    description:
      "Advanced certification in mobile application development covering Flutter, backend integration, database design, and app deployment strategies.",
    achievements: [
      "Specialized in Flutter and Dart programming",
      "Mobile app architecture and design patterns",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Education & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology and
            software development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-300 shadow-imperial">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center glow-blue">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl text-primary font-semibold mb-4">
                        {edu.institution}
                      </h4>

                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-foreground">
                          Key Highlights:
                        </h5>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
