"use client"

import React, { useState, useRef, useCallback } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Hotel,
  Database,
  Building,
  LogIn,
  LogOut,
  AlertTriangle,
  Workflow,
  Server,
  Maximize2,
  Minimize2,
} from "lucide-react"

interface Slide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  icon?: React.ElementType
  layout?: "default" | "grid" | "split" | "image-left" | "image-right" | "full-text" | "cover"
  image?: {
    url: string
    alt: string
  }
  images?: {
    url: string
    caption: string
  }[]
}

const slides: Slide[] = [
  {
    id: 1,
    title: "SISTEMA PARA LOJA DE EQUIPAMENTOS AGRÍCOLAS",
    subtitle: "ESTUDO DE CASO: SISTEMA DE GERENCIAMENTO COMERCIAL",
    content: [],
    layout: "cover",
    image: {
      url: "https://www.sourcecodester.com/sites/default/files/images/janobe/inventorypssystemfarm.png",
      alt: "Loja de equipamentos agrícolas",
    },
  },
  {
    id: 2,
    title:
      "Como Funciona um Sistema de Gerenciamento Comercial para uma Loja de Equipamentos Agrícolas ?",
    content: [
      "O sistema de gerenciamento comercial para uma loja de equipamentos agrícolas funciona como uma plataforma que gerencia o estoque, facilita as vendas e auxilia na gestão diária do negócio.",
      "• Gerenciamento de estoque de equipamentos agrícolas",
      "• Serviços técnicos",
      "• Atualização automática do sistema",
      "• Seleção de equipamentos",
      "• Processo simplificado de vendas",
    ],
    icon: Hotel,
  },
  {
    id: 3,
    title: "Principais Usuários",
    content: [],
    icon: Building,
    layout: "grid",
    images: [
      {
        url: "https://theenterpriseworld.com/wp-content/uploads/2024/09/2-Top-8-Tips-for-Smart-Agricultural-Equipment-Management.jpg",
        caption: "Fazendeiros - Os clientes que utilizam os serviços da loja",
        content: [
          "Clientes que utilizam os serviços da loja para aquisição e manutenção de equipamentos agrícolas.",
          "Gerenciam seu perfil pessoal no sistema.",
          "Visualizam o histórico de compras e serviços realizados",
        ],
      },
      {
        url: "https://www.unilab.com.br/wp-content/uploads/2018/08/saiba-o-que-um-software-para-controle-de-estoque-precisa-ter-1000x500.jpeg",
        caption: "Funcionários da Loja - Equipe responsável pela operação",
        content: [
          "Administração Geral: Gerencia usuários e permissões do sistema, monitoramento de indicadores de negócio",
          "Gestão de Vendas: Controla o estoque e realiza vendas, gera relatórios de vendas para análise do desempenho comercial.",
          "Serviços Técnicos: Agenda e gerencia serviços de manutenção, controla orçamentos e registra histórico de reparos",
          "Gestão de Estoques: Controla níveis de estoque e pedidos de reposição, realiza inventários físicos para garantir o abastecimento",
          "Contabilidade e Finanças: Administra contas a pagar e receber, realiza cotações, balanços financeiros e gera relatórios detalhados.",
        ],
      },
      {
        url: "https://blog.facilsistemas.com.br/wp-content/uploads/2023/03/Inteligencia-artificial.jpg",
        caption: "Fornecedores - Parceiros que fornecem produtos e serviços",
        content: [
          "Parceiros que fornecem produtos e serviços essenciais para a operação da loja.",
          "Mantêm cadastros atualizados e enviam cotações e orçamentos.",
          "Verificam o status de pedidos e garantem a disponibilidade dos produtos.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Componentes de Hardware",
    content: [
      "Componentes físicos essenciais para o funcionamento do sistema:",
      "",
      "• Servidores: Processam as informações do sistema de estoque e vendas",
      "• Computadores: Utilizados para gerenciamento de estoque e vendas",
      "• Caixas Registradoras: Garantem o processamento rápido de vendas",
      "• Equipamentos de Escopo: Scanners, impressoras, etc., para operações diárias",
    ],
    icon: Server,
    layout: "split",
    images: [
      {
        url: "https://www.landbouwleven.be/sites/default/files/dpistyles_v2/sb_864w/2019/12/02/node_6661/107369/public/2019/12/02/B9721788015Z.1_20191202143712_000+G6LF02EKI.1-0.jpg?itok=0tsfjP0y1575368393",
        caption: "Infraestrutura de Hardware",
      },
    ],
  },
  {
    id: 5,
    title: "Soluções de Software",
    content: [
      "Sistemas essenciais para a gestão de uma loja de equipamentos agrícolas:",
      "",
      "• ERP (Enterprise Resource Planning)",
      "- Sistema integrado que gerencia todas as áreas da empresa",
      "- Inclui vendas, estoque, finanças e recursos humanos",
      "",
      "• Sistema de Gestão de Estoques",
      "- Automatiza o controle e reordenação de produtos",
      "",
      "• Plataforma de E-commerce",
      "- Permite vendas online e gerenciamento de pedidos",
      "",
      "• Sistema de CRM (Customer Relationship Management)",
      "- Auxilia na gestão de relacionamentos com clientes",
    ],
    icon: Database,
    layout: "split",
    images: [
      {
        url: "https://www.sourcecodester.com/sites/default/files/images/janobe/inventorypssystemfarm.png",
        caption: "Sistemas de Software",
      },
    ],
  },
  {
    id: 6,
    title: "Dados Gerenciados",
    content: [
      "• Informações dos fazendeiros",
      "• Detalhes dos equipamentos agrícolas",
      "• Preços e condições de pagamento",
      "• Registros de vendas e manutenção",
      "• Histórico de clientes",
      "• Dados de faturamento",
    ],
    icon: Database,
    layout: "image-left",
    image: {
      url: "https://www.predictiveanalyticstoday.com/wp-content/uploads/2016/10/Forecast-pro-1000x563.jpg",
      alt: "Loja de equipamentos agrícolas",
    },
  },
  {
    id: 7,
    title: "Processos de Negócio",
    content: [
      "Vendas e Serviços: Inclui vendas diretas e serviços técnicos para equipamentos.",
      "Gestão de Estoques: Controle e reordenação de produtos.",
      "Serviços Técnicos: Manutenção e reparo de equipamentos agrícolas.",
      "Finanças e Contabilidade: Gerenciamento de caixa, faturamento e impostos.",
      "Recursos Humanos: Gestão de funcionários, treinamento e desenvolvimento.",
      "Marketing e Promoções: Campanhas para atrair novos clientes e aumentar vendas.",
      "Logística e Distribuição: Gerenciamento de entregas e armazenamento.",
    ],
    icon: Workflow,
    layout: "full-text",
  },
  {
    id: 8,
    title: "Fluxo de Entrada",
    content: [
      "Solicitações de compra dos fazendeiros (loja física ou online).",
      "Cadastro de novos clientes.",
      "Entrada de dados de estoque.",
      "Solicitações de manutenção de equipamentos.",
      "Dados de pagamento dos clientes.",
    ],
    icon: LogIn,
    layout: "image-left",
    image: {
      url: "http://docs.eme4.inf.br/wp-content/uploads/2019/06/NFTriangular001.png",
      alt: "Loja de equipamentos agrícolas",
    },
  },
  {
    id: 9,
    title: "Fluxo de Saída",
    content: [
      "• Entrega de produtos",
      "• Alertas de estoque",
      "• Relatórios financeiros",
      "• Notificações de manutenção",
      "• Emissão de notas fiscais",
    ],
    icon: LogOut,
    layout: "image-left",
    image: {
      url: "https://blog.egestor.com.br/wp-content/uploads/VENDAS-MODELO-DE-PLANILHA-1024x335.png",
      alt: "Equipamento agrícola sendo usado",
    },
  },
  {
    id: 10,
    title: "Desafios e Possíveis Problemas",
    content: [
      "• Riscos de estoque insuficiente",
      "• Integração com plataformas agrícolas",
      "• Proteção de dados sensíveis",
      "• Eficiência na gestão de pedidos",
      "• Otimização do armazenamento de produtos",
      "• Melhoria da experiência do cliente",
    ],
    icon: AlertTriangle,
    layout: "image-left",
    image: {
      url: "https://media.licdn.com/dms/image/D4E12AQHdYA5X_j0r2w/article-cover_image-shrink_600_2000/0/1686242284120?e=2147483647&v=beta&t=KLHFhJpdw-L6hhS54TRqF9qLtZwD9dieAQTlY6XTzic",
      alt: "Campo agrícola com máquinas trabalhando",
    },
  },
]

const WIN95_COLORS = {
  bg: "#c0c0c0",
  primary: "#000080",
  text: "#000000",
  textLight: "#ffffff",
  border: {
    light: "#ffffff",
    dark: "#808080",
    darker: "#404040",
  },
  accent: "#000080",
  warning: "#ff0000",
  success: "#008000",
}

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error("Error attempting to toggle fullscreen:", err)
    }
  }

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement)
  }, [])

  React.useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [handleFullscreenChange])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const renderSlideContent = (slide: (typeof slides)[0]) => {
      const contentItems = slide.content.map((item, index) => (
        <li key={index}>
          <strong>{item}</strong>
        </li>
      ))

    if (slide.layout === "cover") {
      return (
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <img
              src={slide.image?.url || "/placeholder.svg"}
              alt={slide.image?.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <h1 className="text-7xl font-bold font-[Segoe UI] mb-6 drop-shadow-lg tracking-tight">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-2xl font-[Segoe UI] max-w-3xl drop-shadow-lg leading-relaxed">{slide.subtitle}</p>
            )}
          </div>
        </div>
      )
    }

    if (slide.layout === "full-text") {
      return (
        <div className="bg-[#c0c0c0] text-black p-8 border-4 border-outset rounded-lg max-h-[calc(100%-4rem)] overflow-y-auto">
          <div className="space-y-4 font-[Segoe Ui] text-3xl leading-relaxed">
            {slide.content.map((text, index) => (
              <p key={index} className="mb-3 text-3xl">
                {text}
              </p>
            ))}
          </div>
        </div>
      )
    }

    if (slide.layout === "image-left" && slide.image) {
      return (
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="bg-[#c0c0c0] p-3 border-4 border-outset h-full">
              <div className="aspect-[4/3] relative overflow-hidden border-2 border-inset bg-white">
                <img
                  src={slide.image.url || "/placeholder.svg"}
                  alt={slide.image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[#c0c0c0] p-6 border-4 border-outset">
            <div className="space-y-3 font-[Segoe UI] text-3xl">
              {slide.content.map((text, index) => (
                <p key={index} className={`${text.startsWith("•") ? "ml-6 mb-3" : ""} text-3xl leading-relaxed`}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (slide.layout === "grid" && slide.images) {
      return (
        <div className="grid grid-cols-3 gap-6">
          {slide.images.map((image, index) => (
            <div
              key={index}
              className="bg-[#c0c0c0] p-3 border-4 border-outset"
            >
              <div className="aspect-video relative overflow-hidden border-2 border-inset bg-white">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.caption}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-3 text-center text-3xl font-[Segoe UI] font-bold">
                {image.caption.split(" - ")[0]}
              </p>
              <p className="mt-1 text-center text-2xl font-bold font-[Segoe UI] text-gray-700">
                {image.caption.split(" - ")[1]}
              </p>
              {image.content && (
                <ul className="mt-3 text-lg text-gray-800 list-disc list-inside">
                  {image.content.map((item, idx) => (
                    <li key={idx} className="mt-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )
    }

    if (slide.layout === "split" && slide.images) {
      return (
        <div className="flex gap-8 ">
          <div className="flex-1">
            <div className="bg-[#c0c0c0] p-3 border-4 border-outset">
              <div className="aspect-video relative overflow-hidden border-2 border-inset bg-white">
                <img
                  src={slide.images[0].url || "/placeholder.svg"}
                  alt={slide.images[0].caption}
                  className="object-cover w-full h-full text-2xl font-bold"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#c0c0c0] p-6 border-4 border-outset">
            <div className="space-y-3 font-[Segoe UI] text-2xl">
              {slide.content.map((text, index) => (
                <p
                  key={index}
                  className={`${
                    text.startsWith("•") ? "ml-6" : text.startsWith("-") ? "ml-10" : ""
                  } mb-3 text-3xl font-medium leading-relaxed`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-[#c0c0c0] text-black p-8 border-4 border-outset rounded-lg">
        <div className="space-y-4 font-[Segoe UI] text-3xl">
          {slide.content.map((text, index) => (
            <p key={index} className={`${text.startsWith("•") ? "ml-6" : ""} mb-3 text-3xl font-medium leading-relaxed`}>
              {text}
            </p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`${
        isFullscreen
          ? "fixed inset-0 w-full h-full"
          : "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <div
        className={`${
          isFullscreen ? "w-full h-full" : "w-[1024px]"
        } bg-[#c0c0c0] border-t-4 border-l-4 border-white border-b-4 border-r-4 border-gray-800 shadow-xl flex flex-col`}
      >
        {/* Title bar */}
        <div className="bg-[#000080] text-white px-3 py-2 flex items-center justify-between">
          <span className="font-[Segoe UI] text-3xl">
            Sistema de Loja de Equipamentos Agrícolas - PowerPoint
          </span>
          <div className="flex gap-3">
            <button
              onClick={toggleFullscreen}
              className="px-3 py-1 border-2 border-white hover:bg-gray-200 hover:text-black flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-5 h-5" />
                  <span className="font-[Segoe UI]">Sair</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-5 h-5" />
                  <span className="font-[Segoe UI]">Tela Cheia</span>
                </>
              )}
            </button>
            <button className="px-3 py-1 border-2 border-white hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-white">
              ?
            </button>
            <button className="px-3 py-1 border-2 border-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white">
              ×
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-[#c0c0c0] p-2 border-b-2 border-gray-600 flex gap-3">
          <button className="px-4 py-2 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white font-[Segoe UI] text-base hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800">
            Arquivo
          </button>
          <button className="px-4 py-2 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white font-[Segoe UI] text-base hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800">
            Editar
          </button>
          <button className="px-4 py-2 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white font-[Segoe UI] text-base hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800">
            Exibir
          </button>
        </div>

        {/* Main content area */}
        <div className="flex flex-1 min-h-0">
          {/* Slide preview panel */}
          <div className="w-40 bg-[#c0c0c0] border-r-2 border-gray-400 p-3 space-y-3 overflow-y-auto">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer p-2 text-sm border-2 font-[Segoe UI] transition-colors ${
                  currentSlide === index
                    ? "border-inset bg-[#000080] text-white"
                    : "border-outset bg-[#c0c0c0] hover:bg-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-gray-800`}
              >
                Slide {index + 1}
              </div>
            ))}
          </div>

          {/* Main slide view */}

          <div className="flex-1 flex flex-col p-8 overflow-hidden font-[Segoe UI]">
            <div className="glass-pane h-full overflow-hidden relative">
              {slides[currentSlide].layout === "cover" ? (
                <div className="relative w-full h-full">
                  {/* Imagem de fundo */}
                  <img
                    src="https://www.sourcecodester.com/sites/default/files/images/janobe/inventorypssystemfarm.png"
                    alt="Loja de equipamentos agrícolas"
                    className="object-cover w-full h-full"
                  />

                  {/* Overlay mais escuro no primeiro slide */}
                  {currentSlide === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                  )}

                  {/* Conteúdo do slide */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                    <h1 className="text-7xl font-bold font-[Segoe UI] mb-6 drop-shadow-lg tracking-tight">
                      SISTEMA PARA LOJA DE EQUIPAMENTOS AGRÍCOLAS
                    </h1>
                    <p className="text-2xl font-[Segoe UI] max-w-3xl font-bold drop-shadow-lg leading-relaxed">
                      ESTUDO DE CASO: SISTEMA DE GERENCIAMENTO COMERCIAL
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  {slides[currentSlide].icon && (
                    <div className="absolute top-6 right-6 glass-pane p-3 rounded-full">
                      {React.createElement(slides[currentSlide].icon, {
                        className: "w-12 h-12 text-modern-colors.primary",
                        strokeWidth: 1.5,
                      })}
                    </div>
                  )}

                  <div className="px-12 pt-8 pb-6 border-b border-modern-colors.accent/30">
                    <h2 className="text-6xl font-bold text-modern-colors.primary mb-2 font-[Segoe UI]">
                      {slides[currentSlide].title}
                    </h2>
                  </div>

                  <div className="flex-1 text-2xl overflow-y-auto font-medium p-8 font-[Segoe UI]">
                    {renderSlideContent(slides[currentSlide])}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="bg-[#c0c0c0] p-3 flex justify-between items-center border-t-2 border-gray-400">
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-[Segoe UI]">Anterior</span>
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 flex items-center gap-2"
            >
              <span className="font-[Segoe UI]">Próximo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-base font-[Segoe UI]">
            Slide {currentSlide + 1} de {slides.length}
          </span>
        </div>
      </div>
    </div>
  )
}

