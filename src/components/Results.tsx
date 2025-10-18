import { Card, CardContent } from "./ui/card";
import { TrendingUp, Users, DollarSign, Award, Target } from "lucide-react";

export default function Results() {
  const results = [
    {
      icon: DollarSign,
      title: "Economia média de 20%",
      subtitle: "para todos os membros"
    },
    {
      icon: Users,
      title: "Comunidade crescente",
      subtitle: "de produtores inteligentes"
    },
    {
      icon: Target,
      title: "Economia com insumos",
      subtitle: "desnecessários"
    },
    {
      icon: Award,
      title: "Parcerias com principais",
      subtitle: "indústrias do setor"
    },
    {
      icon: TrendingUp,
      title: "Valorização do protagonismo",
      subtitle: "do produtor"
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#152A1E] mb-6">
            Resultados que falam por si
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <Card key={index} className="text-center border-[#639652]/30 hover:border-[#639652] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <IconComponent className="text-[#639652] mx-auto mb-4" size={48} />
                  <h3 className="font-bold text-[#152A1E] mb-2">{result.title}</h3>
                  <p className="text-gray-600 text-sm">{result.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}