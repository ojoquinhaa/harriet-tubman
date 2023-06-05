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
        Anos de Escravidão
      </h1>
      <p className="mt-6 text-xl leading-8 text-gray-500">
        Durante seus anos como escrava, o trabalho a que Harriet melhor se
        adaptou foi o relacionado com a lenharia. Era serviço pesado, incluindo
        a retirada de lenha da floresta e o transporte dessa lenha para diversos
        locais. Por ser um trabalho que exigia grande resistência física,
        Harriet ficou muito forte e resistente fisicamente.
      </p>
    </motion.div>
  );
}
