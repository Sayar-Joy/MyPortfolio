import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Star, Award } from "lucide-react";

const achievements = [
  {
    title: "Science Festival HackAtom 2024 – 2nd Runner-up",
    event: "Yangon Technological University with ROSATOM",
    location: "Yangon, Myanmar",
    date: "2024",
    description:
      "Competed in a prestigious hackathon focused on atomic science and technology solutions. Developed innovative software solutions and demonstrated exceptional problem-solving skills.",
    icon: Trophy,
    color: "text-yellow-400",
    position: "2nd Runner-up",
  },
  {
    title: "Engineering Festival Hackathon 2025 – 1st Runner-up",
    event:
      "Naypyitaw State Polytechnic University, 100th Anniversary of Myanmar Engineering Education",
    location: "Naypyitaw, Myanmar",
    date: "2025",
    description:
      "Achieved first runner-up position in a major engineering hackathon celebrating 100 years of Myanmar engineering education. Showcased advanced technical skills and innovative thinking.",
    icon: Award,
    color: "text-silver-400",
    position: "1st Runner-up",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notable accomplishments and competitive successes that demonstrate
            my technical expertise and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 border-border hover:bg-card/70 transition-all duration-300 shadow-imperial group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center glow-blue">
                        <IconComponent
                          className={`w-8 h-8 ${achievement.color}`}
                        />
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-lg font-bold ${achievement.color}`}
                        >
                          {achievement.position}
                        </div>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">Winner</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>

                    <p className="text-primary font-semibold mb-4">
                      {achievement.event}
                    </p>

                    <div className="flex flex-col gap-2 mb-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{achievement.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{achievement.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm flex-1">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 gradient-space border-primary/20">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">
                    Major Hackathon Wins
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100+
                  </div>
                  <div className="text-muted-foreground">
                    Competitors Outperformed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">
                    Years of Competition
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
