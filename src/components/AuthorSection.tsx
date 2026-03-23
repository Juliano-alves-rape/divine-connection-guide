import { motion } from "framer-motion";
import autoraImg from "@/assets/autora.jpg";

const AuthorSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold-light/30 to-rose-light/40 rounded-full blur-2xl" />
            <img
              src={autoraImg}
              alt="Pastora Sara - Autora do ebook À Mesa"
              loading="lazy"
              width={800}
              height={1000}
              className="relative w-64 sm:w-72 md:w-80 rounded-2xl shadow-warm object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-gold text-sm font-body uppercase tracking-[0.2em] mb-4 block">
            Sobre a autora
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-6">
            Pastora Sara
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
            <p>
              Mulher de Deus, esposa, mãe e pastora. Alguém que já esteve no mesmo lugar que você — 
              sentindo o vazio, a culpa, a distância. Mas que encontrou o caminho de volta à mesa do Pai.
            </p>
            <p>
              <strong className="text-foreground">"À Mesa"</strong> nasceu do desejo de compartilhar 
              essa jornada de restauração e de ajudar outras mulheres a encontrarem o mesmo acolhimento 
              que Deus ofereceu a ela.
            </p>
            <p className="italic text-foreground font-display text-lg">
              "Eu escrevi esse livro com o coração. Cada página carrega uma oração por você."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AuthorSection;
