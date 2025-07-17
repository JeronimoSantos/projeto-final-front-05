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

interface ImagensNoticiasProps {
    src: string;
    alt: string;
    description: string;
    url: string;
}

const imagensNoticias: ImagensNoticiasProps[] = [
    { src: "/imgNoticias/girl-pcd.png", alt: "Imagem 1", description: "Sem educação inclusiva, inserção no mercado de trabalho não avança.", url: "https://www.correiobraziliense.com.br/opiniao/2024/09/6947965-pcd-sem-educacao-inclusiva-insercao-no-mercado-de-trabalho-nao-avanca.html"},
    { src: "/imgNoticias/autism symbol.png", alt: "Imagem 2", description: "Pessoas com autismo são as que mais emitem CIN entre pessoas os PcD", url: "https://www.correiobraziliense.com.br/brasil/2025/04/7100066-pessoas-com-autismo-sao-as-que-mais-emitem-cin-entre-pcd.html"},
    { src: "/imgNoticias/child-pcd.png", alt: "Imagem 3", description: "10 direitos essenciais das PCD que você precisa conhecer hoje", url: "https://www.mixvale.com.br/2025/07/14/10-direitos-essenciais-das-pcd-que-voce-precisa-conhecer-hoje/"},
    { src: "/imgNoticias/boy-pcd.png", alt: "Imagem 4", description: "PCD enfrenta dificuldades mesmo qualificadas", url: "https://midiamax.uol.com.br/cotidiano/2023/mesmo-qualificadas-pessoas-com-deficiencia-enfrentam-luta-diaria-para-encontrar-empregos/"},
    { src: "/imgNoticias/symbol-pcd.png", alt: "Imagem 5", description: "Símbolos para PcD e de acessibidade: quais são e o que significa?", url: "https://www.opovo.com.br/noticias/curiosidades/2025/06/20/simbolos-para-pcd-e-de-acessibilidade-quais-sao-e-o-que-significa.html"},
    { src: "/imgNoticias/office-pcd.png", alt: "Imagem 6", description: "Empregabilidade de PcDs cresce em Santa Catarina", url:"https://estado.sc.gov.br/noticias/cresce-a-empregabilidade-da-pessoa-com-deficiencia-no-mercado-de-trabalho-formal-em-santa-catarina/"}
]

export function CarouselNoticias() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {imagensNoticias.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-gray-500 dark:bg-gray-800">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <img
                    src={img.src}
                    alt={img.alt}
                    title={img.description}
                    className="w-full h-full object-cover rounded-2xl"
                  /></span>
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
