import { motion } from "framer-motion";
import { Gift, BookOpen, PenTool } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Conteúdo Extra Espiritual",
    desc: "Meditações e reflexões adicionais para aprofundar sua caminhada com Deus.",
  },
  {
    icon: PenTool,
    title: "Exercícios Práticos",
    desc: "Atividades diárias para fortalecer sua fé e criar hábitos espirituais.",
  },
  {
    icon: Gift,
    title: "Guia Complementar",
    desc: "Material exclusivo com orações e versículos para cada momento do dia.",
  },
];

const BonusSection = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm font-body uppercase tracking-[0.2em] mb-4 block">
          🎁 Bônus exclusivos
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground">
          E você ainda leva <span className="italic text-primary">3 presentes especiais</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 text-center shadow-warm border border-gold/20"
          >
            <div className="w-14 h-14 rounded-full bg-gold-light/30 mx-auto mb-4 flex items-center justify-center">
              <b.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
