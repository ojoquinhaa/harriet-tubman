import { Image } from "@nextui-org/react";
import Title from "./Title";
import ListItem from "../ListItem";

export default function War() {
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="war"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <Title />
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image src="/war.png" alt="War" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="space-y-8 text-gray-600">
                <ListItem
                  title="Guerra Civil Americana: "
                  text="Durante o conflito, ela atuou como espiã, obtendo informações das tropas e instalações dos confederados no sul. O grande momento dela no conflito aconteceu em 1863, quando liderou uma tropa de afro-americanos em um ataque contra fazendas de confederados na Carolina do Sul. Esse ataque libertou mais de 700 escravos."
                />
              </ul>
              <p className="mt-8 text-white">
                Depois da guerra, ela ainda se engajou em causas que buscavam
                garantir a melhoria de vida dos afro-americanos. Defendeu também
                a causa sufragista do movimento feminista e liderou obras de
                caridade. Passou os últimos anos de sua vida em Auburn, local
                onde faleceu no dia 10 de março de 1913. O funeral de Harriet
                contou com honrarias militares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
