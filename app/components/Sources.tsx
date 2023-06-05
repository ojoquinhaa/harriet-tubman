import { Avatar, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Example() {
  return (
    <div className="overflow-hidden py-24 sm:py-32" id="sources">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl">
                Fonte
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Sites que foram utilizados para a construção do conteúdo.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-purple-300">
                    História Do Mundo:
                  </dt>{" "}
                  <Link
                    className="inline text-white"
                    href="https://www.historiadomundo.com.br/idade-contemporanea/harriet-tubman.htm"
                  >
                    https://www.historiadomundo.com.br/idade-contemporanea/harriet-tubman.htm
                  </Link>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-purple-300">
                    Carta Capital:
                  </dt>{" "}
                  <Link
                    className="inline text-white"
                    href="https://www.cartacapital.com.br/blogs/zumbido-justica-antirracista/o-legado-de-harriet-tubman-inspira-a-luta-das-mulheres-por-liberdade/"
                  >
                    https://www.cartacapital.com.br/blogs/zumbido-justica-antirracista/o-legado-de-harriet-tubman-inspira-a-luta-das-mulheres-por-liberdade/
                  </Link>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-purple-300">
                    O Globo:
                  </dt>{" "}
                  <Link
                    className="inline text-white"
                    href="https://oglobo.globo.com/celina/imagem-da-ativista-negra-harriet-tubman-vai-substituir-ex-presidente-americano-na-nota-de-20-dolares-24854840"
                  >
                    https://oglobo.globo.com/celina/imagem-da-ativista-negra-harriet-tubman-vai-substituir-ex-presidente-americano-na-nota-de-20-dolares-24854840
                  </Link>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-purple-300">
                    Justiça de Saia:
                  </dt>{" "}
                  <Link
                    className="inline text-white"
                    href="https://www.justicadesaia.com.br/o-legado-de-harriet-tubman-inspira-a-luta-das-mulheres-por-liberdade/"
                  >
                    https://www.justicadesaia.com.br/o-legado-de-harriet-tubman-inspira-a-luta-das-mulheres-por-liberdade/
                  </Link>
                </div>
              </dl>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl">
                Autor
              </p>
              <div className="w-full flex justify-center mt-6">
                <Link
                  href="https://github.com/ojoquinhaa"
                  style={{ cursor: "pointer" }}
                >
                  <Avatar
                    style={{ width: 200, height: 200 }}
                    src="https://avatars.githubusercontent.com/u/67061136?v=4"
                  />
                </Link>
              </div>
              <p className="text-xl mt-3">João Luiz Prado Neiva</p>
              <small className="text-purple-300">@ojoquinhaa</small>
              <p>
                Um entusiasta do desenvolvimento de softwares dês dos 12 anos de
                idade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
