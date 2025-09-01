import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "epctoy@gmail.com",
    href: "mailto:epctoy@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+959 957814423",
    href: "tel:+959957814423",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.hlyanpaingaung.me",
    href: "https://www.hlyanpaingaung.me",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Myanmar",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's build something
            amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-imperial transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{info.label}</h4>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={
                            info.label === "Website" ? "_blank" : undefined
                          }
                          rel={
                            info.label === "Website"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="p-6 gradient-space border-primary/20">
              <CardContent className="p-0 text-center">
                <h4 className="text-lg font-bold mb-3 text-primary">
                  "Let's Code the Future Together"
                </h4>
                <p className="text-muted-foreground">
                  I'm always excited to discuss new projects, creative ideas, or
                  opportunities to collaborate. Whether you need a mobile app,
                  web application, or want to explore innovative solutions,
                  let's connect and bring your vision to life.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form removed as requested */}
        </div>
      </div>
    </section>
  );
}
