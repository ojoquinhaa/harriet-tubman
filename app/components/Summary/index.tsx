import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Point from "./Point";
export default function Summarry() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade necessária para acionar a animação
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.section
      className="Summary"
      id="summary"
      variants={variants}
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-3xl font-semibold text-purple-600">Resumo</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                Harriet Tubman: Liberdade além dos limites
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <Point
                title="Nascimento"
                time="1822"
                desc="Harriet Tubman nasce em Maryland, Estados Unidos, como escrava."
              />
              <Point
                title="Escravidão"
                time="Década de 1840"
                desc="Harriet experimenta os horrores da escravidão, incluindo violência física e separação de sua família."
              />
              <Point
                title="Fuga"
                time="1849"
                desc="Tubman decide fugir da escravidão, deixando para trás sua família. Ela escapa para a liberdade na Pensilvânia, um estado livre."
              />
              <Point
                title="Underground Railroad"
                time="Início dos anos 1850"
                desc="Harriet Tubman se torna uma condutora do Underground Railroad, um sistema secreto de rotas e abrigos que ajudava escravos fugitivos a alcançarem a liberdade."
              />
              <Point
                title="Retornando ao Sul"
                time="Durante a década de 1850"
                desc="Tubman retorna ao sul várias vezes para resgatar outros escravos, arriscando sua própria vida em cada missão. Estima-se que tenha conduzido cerca de 70 pessoas à liberdade."
              />
              <Point
                title="Guerra Civil Americana"
                time="1861-1865"
                desc="Harriet Tubman trabalha como espiã, enfermeira e cozinheira para as tropas da União. Ela também atua como ativista e advogada pelos direitos dos afro-americanos e pela emancipação dos escravos."
              />
              <Point
                title="Batalha de Combahee Ferry"
                time="1863"
                desc="Tubman auxilia na libertação de aproximadamente 750 escravos durante a Batalha de Combahee Ferry, uma operação militar liderada por ela."
              />
              <Point
                title="Ativismo"
                time="Depois da guerra"
                desc="Harriet Tubman continua sua luta pelos direitos civis e pela igualdade. Ela se associa a líderes abolicionistas e se engaja em atividades de sufrágio feminino."
              />
              <Point
                title="Morte"
                time="1913"
                desc="Harriet Tubman falece em Auburn, Nova York, deixando um legado duradouro de coragem, resistência e dedicação à liberdade."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
