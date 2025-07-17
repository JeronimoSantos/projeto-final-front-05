"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

interface  ImagemCuriosidadeProps {
  src: string;
  alt: string;
  description: string;
  url: string;
}

const imagensCuriosidades: ImagemCuriosidadeProps[] = [
  { src: "/imgCuriosidades/car-pcd.png", alt: "Imagem 1", description: " Inovações tecnológicas nos carros PCD: o futuro é agora", url: "https://www.tecmundo.com.br/internet/237736-tecnologia-ferramenta-inclusao-pcd.htm"},
  { src: "/imgCuriosidades/rights-car.png", alt: "Imagem 2", description: "O que é PCD? Entenda a sigla e quem tem direitos a benefícios", url: "https://educacao.uol.com.br/noticias/2024/09/10/o-que-e-pcd-entenda-a-sigla-e-quem-tem-direito-a-beneficios.htm"},
  { src: "/imgCuriosidades/solutions-pcd.png", alt: "Imagem 3", description: "A tecnologia assistiva e inovações estão transformando a vida de pessoas com deficiência.", url: "https://guiaderodas.com/tecnologia-assistiva-e-inovacoes-revolucionando-a-vida/"},
  { src: "/imgCuriosidades/inclution-pcd.png", alt: "Imagem 4", description: "Cota PcD: o que é e como calcular nas empresas", url: "https://www.gupy.io/blog/cotas-para-deficientes-nas-empresas"},
  { src: "/imgCuriosidades/oportunidis-pcd.png", alt: "Imagem 5", description: "Acessibilidade e automação: O futuro dos carros PCD", url: "https://pcdcarros.com.br/acessibilidade-e-automacao-o-futuro-dos-carros-pcd/"},
  { src: "/imgCuriosidades/reader-pcd.png", alt: "Imagem 6", description: " Projeto F123: leitor de tela portátil que amplia inclusão digital", url:"https://pt.wikipedia.org/wiki/Projeto_F123"}
]

export function CarouselCuriosidades() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {imagensCuriosidades.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-gray-500 dark:bg-gray-800">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold ">
                    <img
                    src={img.src}
                    alt={img.alt}
                    title={img.description}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  </span>
                  <p className="mt-3 text-center">{img.description}</p>
                  <Link href={img.url} target="_blank" rel="noopener noreferrer" className="hover:bg-emerald-500 hover:underline  bg-emerald-600 dark:bg-blue-600 dark:hover:bg-blue-500 p-2 rounded-2xl text-center mt-2.5 ease-in-out duration-300">Saiba mais</Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
