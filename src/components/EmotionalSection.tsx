import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA_URL = "https://pay.kiwify.com.br/PRbZLf7";

const EmotionalSection = () => (
  <section className="py-20 md:py-28 bg-gradient-warm">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-block mb-6">
          <span className="text-gold text-4xl">✦</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-foreground mb-8 leading-snug">
          Talvez o problema não seja falta de fé…{" "}
          <span className="italic text-primary">mas falta de direção.</span>
        </h2>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-warm border border-border/50 mb-10">
          <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-6">
            Você acorda, tenta orar, mas as palavras parecem não sair. Abre a Bíblia,
            mas não sabe por onde começar. Sente que algo está faltando, que existe um
            vazio que nada preenche.
          </p>
          <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-6">
            Não é que você não acredita. Você acredita — <strong className="text-foreground">e é por isso que dói tanto.</strong>{" "}
            Porque você sabe que Deus existe, mas não consegue senti-Lo perto.
          </p>
          <p className="text-foreground font-body text-lg sm:text-xl font-semibold leading-relaxed">
            E se eu te dissesse que existe um caminho de volta? Um caminho gentil,
            acolhedor e profundo — que foi feito especialmente para mulheres como você?
          </p>
        </div>

        <Button variant="cta" size="xl" asChild>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
            ✨ Quero encontrar esse caminho
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default EmotionalSection;
