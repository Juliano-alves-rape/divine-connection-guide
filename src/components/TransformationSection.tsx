import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const before = ["Vazio", "Confusão", "Ansiedade", "Distância de Deus"];
const after = ["Paz", "Clareza", "Conexão", "Presença espiritual"];

const TransformationSection = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground">
          De onde você está… <span className="italic text-primary">para onde Deus quer te levar</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 border border-destructive/20"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            Antes ❌
          </h3>
          <div className="space-y-4">
            {before.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground font-body">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 border border-gold/30 shadow-warm"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            Depois ✨
          </h3>
          <div className="space-y-4">
            {after.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground font-body">
                <div className="w-8 h-8 rounded-full bg-gold-light/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TransformationSection;
