import { motion } from "framer-motion";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-juliete.png";
import testimonial2 from "@/assets/testimonial-anne.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4];

const TestimonialsSection = () => (
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
          Depoimentos reais
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
          Vidas <span className="italic text-primary">transformadas</span>
        </h2>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-muted-foreground font-body text-sm">
          Centenas de mulheres já foram tocadas por esse livro
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-warm border border-border/50"
          >
            <img
              src={img}
              alt={`Depoimento ${i + 1} sobre o ebook À Mesa`}
              loading="lazy"
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
