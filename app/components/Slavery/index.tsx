import { Image } from "@nextui-org/react";
import Title from "./Title";
import ListItem from "../ListItem";

export default function Slavery() {
  return (
    <div
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="slavery"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <Title />
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image src="/slavery.png" alt="Escravidão" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="space-y-8 text-gray-600">
                <ListItem
                  title="Criança Astuta: "
                  text="Desde
        sua infância, Harriet mostrava ser resistente à escravidão, alimentando
        ideias pela sua liberdade. Essas ideias a fizeram contratar um advogado
        para averiguar a situação de sua mãe enquanto escrava. Esse advogado
        descobriu que a mãe de Harriet deveria ter sido liberta quando
        completasse 45 anos, mas os Brodess ignoraram isso."
                />
                <ListItem
                  title="Casamento: "
                  text="Entre 1844 e 1845, Harriet se casou com um negro livre
                    chamado John Tubman. Nessa época, ela decidiu adotar o nome
                    Harriet Tubman (Harriet vinha do nome de sua mãe, e Tubman,
                    do sobrenome de seu marido). Debate-se qual foi a real
                    intenção dela ao mudar de nome, e alguns acreditam que foi
                    parte de uma estratégia já pensando em sua fuga."
                />
                <ListItem
                  title="Boatos: "
                  text="Nos anos final da década de 1840, Harriet Tubman começou a
                    ouvir alguns boatos de que seria vendida pelos Brodess. Esse
                    boato era um risco, pois ela poderia ser vendida para o sul
                    dos Estados Unidos e, com isso, nunca mais veria sua
                    família. A morte de Edward Brodess só reforçou os boatos da
                    possível venda."
                />
              </ul>
              <p className="mt-8 text-white">
                Com isso, ela decidiu fugir e convenceu Ben e Henry, seus
                irmãos, a acompanhá-la. Ela também compartilhou o seu desejo com
                o marido, mas a resposta dele foi negativa. Ben e Henry
                aceitaram fugir e, assim, eles e Harriet saíram em busca de sua
                liberdade. Essa primeira tentativa fracassou, porque os irmãos
                de Harriet a forçaram a retornar. No entanto, pouco tempo
                depois, ela fugiu novamente, mas sozinha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
