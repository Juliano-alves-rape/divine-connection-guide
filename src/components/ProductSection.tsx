import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";

const CTA_URL = "https://pay.kiwify.com.br/PRbZLf7";

const features = [
  {
    icon: BookOpen,
    title: "Guia prático e espiritual",
    desc: "Leituras diárias que te guiam em uma jornada real de reconexão com Deus.",
  },
  {
    icon: Heart,
    title: "Feito para o coração feminino",
    desc: "Escrito com sensibilidade, para mulheres que buscam paz e propósito.",
  },
  {
    icon: Sparkles,
    title: "Transformação profunda",
    desc: "Cada página te convida a um encontro íntimo e verdadeiro com o Criador.",
  },
];

const ProductSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="text-gold text-sm font-body uppercase tracking-[0.2em] mb-4 block">
          Conheça o ebook
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground leading-tight">
          À Mesa —{" "}
          <span className="italic text-primary">Um encontro real com Deus</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-light/30 to-rose-light/30 rounded-3xl blur-2xl" />
            <img
              src={ebookMockup}
              alt="Ebook À Mesa - Um encontro real com Deus"
              loading="lazy"
              width={800}
              height={1024}
              className="relative w-64 sm:w-72 md:w-80 drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8">
            <strong className="text-foreground">"À Mesa"</strong> é mais do que um ebook. É um
            guia espiritual prático e transformador, criado para te ajudar a restaurar
            sua conexão com Deus de forma simples, profunda e diária. É o seu convite
            para sentar à mesa com o Pai e redescobrir o amor que nunca te abandonou.
          </p>

          <div className="space-y-6 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="cta" size="xl" asChild>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
              ✨ Quero meu exemplar agora
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProductSection;
