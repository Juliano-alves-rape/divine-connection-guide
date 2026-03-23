import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const CTA_URL = "https://pay.kiwify.com.br/PRbZLf7";

const OfferSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="text-gold text-sm font-body uppercase tracking-[0.2em] mb-4 block">
          Oferta especial
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
          Hoje por apenas
        </h2>

        <div className="relative inline-block mb-6">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold-light/30 to-rose-light/30 rounded-3xl blur-xl" />
          <div className="relative bg-card rounded-2xl px-12 py-8 shadow-warm border border-gold/30">
            <span className="text-muted-foreground font-body text-sm line-through block mb-1">
              De R$ 59,90
            </span>
            <span className="text-5xl sm:text-6xl font-display font-bold text-foreground">
              R$ <span className="text-gradient-gold">19,90</span>
            </span>
          </div>
        </div>

        <p className="text-muted-foreground font-body text-lg mb-8 italic">
          "Menos que um café. Mais que uma transformação."
        </p>

        <Button variant="cta" size="xl" className="mb-10 text-lg" asChild>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
            ✨ Quero meu exemplar agora
          </a>
        </Button>

        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-card rounded-2xl p-8 border border-border/50 shadow-warm max-w-md mx-auto"
        >
          <div className="w-14 h-14 rounded-full bg-gold-light/30 mx-auto mb-4 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-gold" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            7 dias de garantia incondicional
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Se por qualquer motivo você sentir que o livro não é para você, devolvemos 100% do seu investimento. 
            Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
