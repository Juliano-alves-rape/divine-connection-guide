import { motion } from "framer-motion";
import { Heart, Sun, Sparkles, Brain, BookOpen } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Voltar a sentir Deus", desc: "Reavivar a presença divina no seu dia a dia" },
  { icon: Sun, title: "Ter paz emocional", desc: "Encontrar serenidade mesmo em meio às tempestades" },
  { icon: Sparkles, title: "Clareza espiritual", desc: "Enxergar o propósito que Deus tem para sua vida" },
  { icon: Brain, title: "Reduzir ansiedade", desc: "Entregar suas preocupações e descansar em Deus" },
  { icon: BookOpen, title: "Se reconectar com sua fé", desc: "Construir uma relação íntima e verdadeira" },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm font-body uppercase tracking-[0.2em] mb-4 block">
          O que você vai conquistar
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground">
          Benefícios que vão <span className="italic text-primary">transformar sua vida</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-2xl p-6 text-center shadow-warm border border-border/50 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-rose-light mx-auto mb-4 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
