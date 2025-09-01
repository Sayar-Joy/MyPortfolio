import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-glow opacity-30"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1
            className="mobile-hero-text font-bold mb-6 text-glow whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hlyan <span className="text-primary">Paing Aung</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mobile App / Web Developer
          </motion.h2>

          <motion.p
            className="mobile-text text-muted-foreground mb-8 sm:mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Motivated developer with leadership experience, specializing in
            Flutter mobile apps and Node.js backends. Building efficient,
            user-friendly applications for the modern web.
          </motion.p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Download CV */}
            <a
              href="/cv/Hlyan-Paing-Aung-CV.pdf"
              download="Hlyan-Paing-Aung-CV.pdf"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              <span>Download CV</span>
            </a>

            {/* View Projects */}
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              View Projects
            </Button>
          </div>

          {/* Social links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary"
            >
              <a
                href="https://github.com/Sayar-Joy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary"
            >
              <a
                href="http://linkedin.com/in/hlyan-paing-aung-a3035a379"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary"
            >
              <a href="mailto:epctoy@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Scene */}
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
