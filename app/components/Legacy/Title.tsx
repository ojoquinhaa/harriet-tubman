import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function Title() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade necessária para acionar a animação
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={variants}
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="lg:max-w-lg"
    >
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
        Legado
      </h1>
      <p className="mt-6 text-xl leading-8 text-gray-500">
        Lembrar a história de Harriet Tubman — a Minty ou a Black Moises — é
        mais do que necessário. Isso porque tal resgate biográfico nos faz
        recuperar a coragem, a perseverança e a força dessa grande
        abolicionista. Além disso, auxilia-nos a melhor compreender — mas não a
        aceitar — algumas ações que comportam desigualdade em relação às
        mulheres.
      </p>
    </motion.div>
  );
}
