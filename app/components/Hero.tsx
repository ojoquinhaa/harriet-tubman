import { Image } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
  const [heroRef, inViewHero] = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade necessária para acionar a animação
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="Hero">
      <div className="container flex flex-col justify-center items-center p-6 mx-auto mt-7 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-purple-800">
            <TypeWritter
              options={{
                loop: true,
              }}
              onInit={(typewritter) =>
                typewritter
                  .typeString("Harriet Tubman")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Moisés Negro")
                  .pauseFor(500)
                  .start()
              }
            />
          </h1>
          <motion.p
            ref={heroRef}
            className="mt-6 mb-8 text-lg sm:mb-12"
            initial="hidden"
            animate={inViewHero ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            Nos olhos de Harriet Tubman, vislumbramos a chama incandescente da
            liberdade. Uma mulher corajosa, destemida, que ousou desafiar as
            correntes da escravidão e abrir caminhos para os oprimidos. Em cada
            passo que ela dava, a esperança se multiplicava e o medo se
            dissipava.
          </motion.p>
          <motion.p
            className="mt-6 mb-8 text-lg sm:mb-12"
            initial="hidden"
            animate={inViewHero ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            Harriet era uma condutora da liberdade, guiando aqueles que ousavam
            sonhar com uma vida além das correntes e do sofrimento. Sob o manto
            escuro da noite, ela caminhava pelas trilhas perigosas, enfrentando
            perigos inimagináveis para levar seus irmãos e irmãs rumo à
            emancipação.
          </motion.p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image src="/Harriet.png" alt="Imagem de Harriet Tubman" />
        </div>
      </div>
    </section>
  );
}
