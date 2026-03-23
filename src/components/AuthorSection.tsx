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
              alt="Sara Rapá - Autora do ebook À Mesa"
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
            Sara Rapá
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
            <p>
              Sara Rapá cresceu em um lar missionário e desde cedo respondeu ao chamado de Jesus com devoção. 
              Serviu desde a adolescência, ensinou na Escola Bíblica Dominical e, ao lado do esposo Juliano, 
              liderou o ministério de jovens até serem separados para o pastorado em 2017.
            </p>
            <p>
              Atualmente, pastoreiam na <strong className="text-foreground">Doxa Global Church</strong> com 
              foco no aconselhamento, discipulado e formação de líderes. Também atua na área de administração 
              e produção acadêmica, unindo fé e excelência.
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
