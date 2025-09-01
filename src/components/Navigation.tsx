import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Mail, Linkedin } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiDart,
  SiPhp,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiGit,
  SiTelegram,
} from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const rotatingLogos: Array<{ Icon: IconType; name: string }> = [
  // Programming languages
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiDart, name: "Dart" },
  { Icon: SiPhp, name: "PHP" },
  // Frameworks / Runtimes
  { Icon: SiFlutter, name: "Flutter" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express.js" },
  // Databases
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiMysql, name: "MySQL" },
  // Backend frameworks
  { Icon: SiLaravel, name: "Laravel" },
  // Web fundamentals
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiCss3, name: "CSS" },
  // Tools / Design
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiGit, name: "Git" },
];

const brandColors: Record<string, string> = {
  JavaScript: "#F7DF1E",
  Dart: "#0175C2",
  PHP: "#777BB4",
  Flutter: "#02569B",
  "Node.js": "#339933",
  "Express.js": "#828282",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Laravel: "#FF2D20",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Figma: "#F24E1E",
  Git: "#F05032",
};

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setLogoIndex((i) => (i + 1) % rotatingLogos.length);
    }, 1000); // change every second
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#home")}
            aria-label={rotatingLogos[logoIndex].name}
            title={rotatingLogos[logoIndex].name}
          >
            {(() => {
              const { Icon, name } = rotatingLogos[logoIndex];
              const color = brandColors[name] ?? "currentColor";
              return (
                <Icon
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  style={{ color, filter: `drop-shadow(0 0 6px ${color})` }}
                />
              );
            })()}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="imperial" size="sm">
                  Hire Me
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Hire Me</DialogTitle>
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
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="imperial" className="w-full">
                      Hire Me
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Hire Me</DialogTitle>
                      <DialogDescription>
                        Choose how you'd like to get in touch.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 gap-3">
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
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
