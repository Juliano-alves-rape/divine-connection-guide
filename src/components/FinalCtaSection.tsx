import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA_URL = "https://pay.kiwify.com.br/PRbZLf7";

const FinalCtaSection = () => (
  <section className="py-20 md:py-28 bg-gradient-warm relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-rose rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6 leading-tight">
          Você não precisa continuar <span className="italic text-primary">sentindo esse vazio</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
          Deus preparou um lugar à mesa para você. Tudo o que você precisa fazer é sentar.
          Esse ebook é o seu convite.
        </p>
        <Button variant="cta" size="xl" className="text-lg px-12" asChild>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
            ✨ Quero sair desse vazio agora
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
