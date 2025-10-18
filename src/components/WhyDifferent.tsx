import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, DollarSign, Headphones } from "lucide-react";

export default function WhyDifferent() {
  return (
    <section className="py-20 bg-[#F1F8ED]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#152A1E] mb-6">
            Por que a GRAN PRODUTOR é diferente?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-[#639652] hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="text-[#639652] mx-auto mb-4" size={64} />
              <CardTitle className="text-[#152A1E] text-2xl">Força do ecossistema</CardTitle>
              <p className="text-[#639652] font-semibold">Juntos somos mais fortes</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>• Poder de negociação</li>
                <li>• Relacionamento qualificado de produtores</li>
                <li>• Troca de experiências e conhecimento</li>
                <li>• Suporte mútuo entre membros</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#639652] hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <DollarSign className="text-[#639652] mx-auto mb-4" size={64} />
              <CardTitle className="text-[#152A1E] text-2xl">Economia real e comprovada</CardTitle>
              <p className="text-[#639652] font-semibold">20% de economia média</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>• Eliminação de intermediários</li>
                <li>• Preços diretos e eficientes</li>
                <li>• Poder de compra coletivo</li>
                <li>• Sem custos ocultos ou taxas extras</li>
              </ul>
              <div className="mt-4 p-3 bg-[#D7EACA] rounded-lg">
                <p className="text-sm text-[#152A1E] italic">
                  "Em uma propriedade de 300ha, isso representa R$ 300.000,00 economizados por ano"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#639652] hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Headphones className="text-[#639652] mx-auto mb-4" size={64} />
              <CardTitle className="text-[#152A1E] text-2xl">Consultoria especializada</CardTitle>
              <p className="text-[#639652] font-semibold">Suporte técnico sem conflitos de interesse</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>• Recomendações imparciais</li>
                <li>• Foco no que você realmente precisa</li>
                <li>• Suporte agronômico qualificado</li>
                <li>• Acompanhamento durante toda a safra</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}