import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Star,
  Zap,
  Code,
  Coffee,
} from "lucide-react";
import { SiTelegram } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sayar-Joy", label: "GitHub" },
    {
      icon: Linkedin,
      href: "http://linkedin.com/in/hlyan-paing-aung-a3035a379",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:epctoy@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
  ];

  const services = [
    "Full-Stack Development",
    "Flutter & Dart",
    "Node.js & APIs",
    "Figma",
    "PHP & Laravel",
    "Web Hosting",
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/50 to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto mobile-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-glow mb-4">
                  Hlyan <span className="text-primary">Paing Aung</span>
                </h3>
                <p className="text-muted-foreground mobile-text">
                  "Full‑stack developer turning product ideas into production‑ready, scalable software."
                </p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Yangon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:epctoy@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    epctoy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+959 957814423</span>
                </div>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors mobile-text group flex items-center gap-2"
                    >
                      <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Expertise
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground mobile-text flex items-center gap-2"
                  >
                    <Code className="w-3 h-3 text-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter/CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Let's Connect
              </h4>
              <p className="text-muted-foreground mobile-text mb-6">
                Ready to embark on your next digital journey? Let's build
                something amazing together.
              </p>

              <div className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Start a Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Start a Project</DialogTitle>
                      <DialogDescription>
                        Choose how you'd like to get in touch.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button asChild className="w-full">
                        <a
                          href="https://t.me/Joyy969"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiTelegram className="w-4 h-4 mr-2" /> Telegram
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href="http://linkedin.com/in/hlyan-paing-aung-a3035a379"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                        </a>
                      </Button>
                      <Button asChild variant="secondary" className="w-full">
                        <a href="mailto:epctoy@gmail.com">
                          <Mail className="w-4 h-4 mr-2" /> Email
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          social.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200 glow-blue hover:shadow-imperial"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border bg-card/30">
          <div className="container mx-auto mobile-padding py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-muted-foreground mobile-text"
              >
                <span>© {currentYear} Hlyan Paing Aung. Built with</span>
                <Heart className="w-4 h-4 text-accent animate-pulse" />
                <Coffee className="w-4 h-4 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Made with React & Tailwind</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
