import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como recebo o ebook?",
    a: "Assim que o pagamento for confirmado, você receberá o acesso imediato por e-mail. O ebook é digital, em formato PDF, e você pode ler no celular, tablet ou computador.",
  },
  {
    q: "Esse livro funciona pra mim?",
    a: "Se você sente que está distante de Deus, emocionalmente cansada ou buscando reavivar sua fé, esse livro foi escrito para você. Ele é um guia prático e acolhedor para qualquer mulher que deseja se reconectar com Deus.",
  },
  {
    q: "Preciso ter experiência espiritual?",
    a: "Não! O livro é perfeito tanto para quem está começando sua caminhada com Deus quanto para quem já tem anos de fé mas precisa de renovação. A linguagem é simples, amorosa e acessível.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que o livro não é para você, basta pedir o reembolso e devolvemos 100% do valor. Sem perguntas.",
  },
  {
    q: "Posso parcelar o pagamento?",
    a: "Sim! Você pode pagar via PIX, cartão de crédito ou boleto. O valor é único de R$ 19,90 — sem mensalidades ou cobranças extras.",
  },
];

const FaqSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground">
          Perguntas <span className="italic text-primary">frequentes</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
            >
              <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-base leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
