import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Users, BarChart3, ShoppingBag, Truck, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const phases = [
    {
      icon: Users,
      title: "Fase 1: Integração",
      subtitle: "Você se torna parte de algo maior",
      items: [
        "Avaliação do perfil e aprovação",
        "Acesso ao grupo exclusivo de produtores",
        "Onboarding na plataforma de negócios",
        "Conexão com outros produtores da região"
      ]
    },
    {
      icon: BarChart3,
      title: "Fase 2: Gestão inteligente",
      subtitle: "Sua lavoura na palma da mão",
      items: [
        "Cadastro personalizado na plataforma",
        "Integração de dados históricos e planejamento",
        "Acesso a conteúdos exclusivos diários",
        "Análises de mercado e tendências"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Fase 3: Compra com inteligência",
      subtitle: "O poder da escala e eficiência para melhores preços",
      items: [
        "Identificação de necessidades via plataforma",
        "Definição de compra por produto/região",
        "Negociação direta com indústria",
        "Economia potencializada pelo volume"
      ]
    },
    {
      icon: Truck,
      title: "Fase 4: Execução direta",
      subtitle: "Da negociação à entrega, tudo otimizado",
      items: [
        "Pedidos processados diretamente na plataforma",
        "Logística otimizada e rastreável",
        "Pagamento à vista para máxima economia",
        "Suporte técnico durante todo o processo"
      ]
    },
    {
      icon: TrendingUp,
      title: "Fase 5: Evolução contínua",
      subtitle: "Sempre aprendendo, sempre melhorando",
      items: [
        "Análise de resultados e performance",
        "Feedback para próximas compras",
        "Compartilhamento de experiências",
        "Acesso a novas oportunidades e parcerias"
      ]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#152A1E] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Como o ecossistema GRAN funciona
          </h2>
        </div>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <Card key={index} className="bg-white/5 border-[#639652]/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#639652] p-3 rounded-lg">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{phase.title}</CardTitle>
                      <p className="text-[#B5D4A4] mt-1">{phase.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 pl-16">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <Check className="text-[#639652] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
