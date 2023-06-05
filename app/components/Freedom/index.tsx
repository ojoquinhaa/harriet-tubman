import { Image } from "@nextui-org/react";
import Title from "./Title";
import ListItem from "../ListItem";

export default function Freedom() {
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="freedom"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <Title />
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image src="/underground.jpg" alt="Undergrund" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="space-y-8 text-gray-600">
                <ListItem
                  title="Fuga: "
                  text="Para que isso fosse possível, as pessoas forneciam abrigos secretos para que os escravos pudessem realizar a sua jornada com sucesso. Por meio dessa rede secreta, Harriet Tubman conseguiu chegar à Filadélfia, local onde passou a sobreviver realizando serviços domésticos. Cerca de um ano depois de se estabelecer em segurança, Harriet tomou uma decisão que mudou sua vida."
                />
                <ListItem
                  title="Resgate a família: "
                  text="Ela decidiu retornar a Maryland para resgatar sua família da escravidão e conduzi-los à liberdade. Com isso, ela se tornou uma guia na Underground Railroad e atuou no deslocamento de escravos em fuga até os locais onde eles conseguiriam ser livres. Essa atividade era muito perigosa e colocava em jogo a segurança da própria Harriet, pois ela pagaria com a vida se fosse capturada."
                />
                <ListItem
                  title="Underground Railroad: "
                  text="Apesar dos riscos, ela se tornou uma das melhores guias na Underground Railroad. Realizou dezenas de viagens ao longo da década de 1850, libertando dezenas de escravos (algumas fontes falam em centenas) e garantindo a liberdade de sua família. Os familiares de Tubman se estabeleceram primeiro no Canadá e depois na casa de Harriet em Auburn."
                />
              </ul>
              <p className="mt-8 text-white">
                A fama de Harriet como guia na Underground Railroad se tornou
                enorme e ela passou a ser temida por senhores de escravos.
                Harriet ficou conhecida como Black Moses (Moisés Negro), em uma
                analogia a Moisés, personagem bíblico que libertou os hebreus da
                escravidão no Egito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
