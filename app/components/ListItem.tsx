import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function ListItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade necessária para acionar a animação
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.li
      variants={variants}
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="flex gap-x-3"
    >
      <span className="text-white">
        <strong className="font-semibold text-purple-300">{title}</strong>
        {text}
      </span>
    </motion.li>
  );
}
