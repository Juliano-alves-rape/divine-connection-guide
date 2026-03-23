import { motion } from "framer-motion";
import { Heart, BookOpen, Sparkles, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const CTA_URL = "https://pay.kiwify.com.br/PRbZLf7";

const painPoints = [
  { icon: Heart, text: "Ora, mas sente que Deus está em silêncio" },
  { icon: Sun, text: "Se sente emocionalmente cansada" },
  { icon: Sparkles, text: "Carrega culpas e ansiedade" },
  { icon: BookOpen, text: "Está distante espiritualmente" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Mulher em paz lendo a bíblia"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
    </div>

    <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-cream mb-6">
          Você tenta se aproximar de Deus… mas ainda se sente{" "}
          <span className="text-gold-light italic">vazia por dentro?</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-cream/80 font-body leading-relaxed mb-10 max-w-xl">
          Existe um caminho simples e profundo que pode restaurar sua fé, trazer
          paz ao seu coração e te reconectar com Deus — mesmo que hoje você se
          sinta perdida ou cansada.
        </p>

        <div className="space-y-3 mb-10">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <item.icon className="w-5 h-5 text-gold-light flex-shrink-0" />
              <span className="text-cream/90 font-body text-sm sm:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button variant="cta" size="xl" asChild>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
              ✨ Quero voltar a sentir Deus
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
