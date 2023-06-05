import { Image } from "@nextui-org/react";
import Title from "./Title";
import ListItem from "../ListItem";

export default function Legacy() {
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="legacy"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <Title />
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image src="/dolar.jpeg" alt="Dolar" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="space-y-8 text-gray-600">
                <ListItem
                  title="Dólar: "
                  text="Sua coragem, determinação e luta em prol das causas abolicionista, sufragista e feminista renderam a reprodução de sua imagem na nota de 20 dólares, em razão da comemoração do centenário, em 2020, do voto feminino."
                />
                <ListItem
                  title="Quebra de Estigmas: "
                  text="Harriet Tubman também desafiou os estereótipos de gênero de sua época. Como mulher, ela assumiu papéis tradicionalmente associados aos homens, como espiã e líder militar. Ela rompeu as barreiras impostas às mulheres negras, reafirmando sua capacidade de ser uma líder poderosa e influente."
                />
                <ListItem
                  title="O que nós deixou? "
                  text="Harriet Tubman deixou um legado de resiliência, empatia e justiça social. Ela continua a inspirar pessoas de todas as origens e gerações, mostrando que é possível criar mudanças significativas, mesmo nas circunstâncias mais desafiadoras. Harriet Tubman é um farol de esperança para aqueles que enfrentam a opressão e uma lembrança poderosa de que a coragem e a determinação podem transcender as limitações impostas por sociedade. Seu legado nos lembra que todos temos o poder de lutar por nossa liberdade e pelos direitos humanos, independentemente das circunstâncias em que nascemos."
                />
              </ul>
              <p className="mt-8 text-white">
                Destá forma Harriet Tubman, Minty ou até mesmo o Moisés Negro, é
                um símbolo de luta e coragem. Harriet durante toda sua vida,
                mesmo sendo uma mulher preta e escravizada, nunca permitiu que
                sua condição a definisse. Ela desafiou as barreiras impostas
                pelo sistema escravocrata e dedicou-se incansavelmente à
                libertação dos outros, mostrando que a força e a determinação
                podem superar qualquer adversidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
