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
        Últimos anos
      </h1>
      <p className="mt-6 text-xl leading-8 text-gray-500">
        Harriet Tubman também ficou marcada na história norte-americana por seu
        envolvimento na Guerra Civil Americana ou Guerra de Secessão, conflito
        que se estendeu de 1861 a 1865. Ela enxergou no conflito um grande
        potencial para acabar com a escravidão nos Estados Unidos e, por isso,
        alinhou-se com as tropas da União, que representavam o norte dos EUA.
      </p>
    </motion.div>
  );
}
