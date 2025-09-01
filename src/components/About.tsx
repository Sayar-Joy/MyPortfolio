import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users, Award } from "lucide-react";

const stats = [
  { icon: Code, label: "Projects Completed", value: "10+" },
  { icon: Zap, label: "Years Learning", value: "3+" },
  { icon: Users, label: "Team Projects Led", value: "5+" },
  { icon: Award, label: "Hackathon Wins", value: "2" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            About the <span className="text-primary">Developer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A motivated student developer with strong leadership skills and a
            passion for innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a motivated Information Technology student at Thanlyin
                Technological University, I've discovered my passion for mobile
                app development and backend systems. My journey began with
                curiosity and has evolved into expertise.
              </p>
              <p>
                With leadership experience as both a class leader and project
                leader, I excel in teamwork, communication, and problem-solving.
                I specialize in Flutter for mobile development and Node.js for
                robust backend solutions.
              </p>
              <p>
                I'm passionate about building efficient, user-friendly
                applications that solve real-world problems. Every project is an
                opportunity to learn, innovate, and push the boundaries of
                what's possible in the digital realm.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-imperial transition-shadow duration-300">
                  <CardContent className="p-0">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 gradient-space border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                "Code with purpose, lead with vision"
              </h3>
              <p className="text-lg text-muted-foreground italic">
                My development philosophy combines technical excellence with
                strong leadership. I believe in writing clean, maintainable code
                while fostering collaboration and innovation in every project I
                undertake.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
