import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function Point({
  title,
  time,
  desc,
}: {
  title: string;
  time: string;
  desc: string;
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
    <motion.div
      variants={variants}
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400"
    >
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
        {time}
      </time>
      <p className="mt-3">{desc}</p>
    </motion.div>
  );
}
