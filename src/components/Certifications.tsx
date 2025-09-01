import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, Calendar, Shield } from "lucide-react";

const certifications = [
  {
    title: "Professional Web Developer",
    issuer: "Fairway Technology",
    date: "2024",
    // image should be placed in public/certs/fairway-2024.png
    image: "/certs/fairway-2024.png",
    description:
      "Intensive professional certification covering modern web development, including HTML, CSS, JavaScript, and deployment best practices.",
    icon: Award,
    color: "text-primary",
    verified: true,
  },
];

export default function Certifications() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };
    if (openImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openImage]);
  return (
    <section
      id="certifications"
      className="py-20 px-4 relative overflow-hidden"
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
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My formal recognitions and credentials earned throughout my journey
            in the galactic tech universe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 border-border hover:bg-card/70 transition-all duration-300 shadow-imperial group cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-${
                          cert.color.includes("primary") ? "primary" : "accent"
                        }/20 flex items-center justify-center glow-blue`}
                      >
                        <IconComponent className={`w-6 h-6 ${cert.color}`} />
                      </div>
                      {cert.verified && (
                        <div className="flex items-center gap-1 text-green-400 text-sm">
                          <Shield className="w-4 h-4" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-primary font-semibold mb-2">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Issued {cert.date}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {cert.description}
                    </p>

                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-all duration-200 text-sm"
                        aria-label={`See certification for ${cert.title}`}
                        onClick={() => cert.image && setOpenImage(cert.image)}
                      >
                        <ExternalLink className="w-4 h-4" />
                        See Certification
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {/* Modal for certification image */}
        {openImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenImage(null)}
          >
            <div
              className="max-w-[90%] max-h-[90%] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenImage(null)}
                className="mb-2 text-sm text-white bg-black/40 px-3 py-1 rounded"
                aria-label="Close certificate"
              >
                Close
              </button>

              <img
                src={openImage}
                alt="Certification"
                className="block max-w-full max-h-[80vh] rounded shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
