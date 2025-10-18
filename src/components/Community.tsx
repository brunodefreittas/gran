import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { DollarSign, Brain, Users, Smartphone, Check, ArrowRight, Star, Trophy, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import communityImage from "figma:asset/dcfd3ae863e83893e3a20b3a466803cfdbb06408.png";

export default function Community() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Economia imediata",
      color: "from-green-500 to-emerald-600",
      items: [
        "20% de desconto médio em todos os insumos",
        "Acesso a preços diretos",
        "Poder de negociação com escala"
      ]
    },
    {
      icon: Brain,
      title: "Inteligência exclusiva",
      color: "from-purple-500 to-violet-600",
      items: [
        "Conteúdo diário sobre produção e mercado",
        "Análises personalizadas da sua região",
        "Alertas de oportunidades em tempo real"
      ]
    },
    {
      icon: Users,
      title: "Network qualificado",
      color: "from-blue-500 to-cyan-600",
      items: [
        "Conexão com produtores de sucesso",
        "Troca de experiências e conhecimento",
        "Suporte mútuo da comunidade"
      ]
    },
    {
      icon: Smartphone,
      title: "Tecnologia inovadora",
      color: "from-orange-500 to-red-600",
      items: [
        "Acesso antecipado à nossa plataforma",
        "Gestão integrada da propriedade",
        "Ferramentas exclusivas de análise"
      ]
    }
  ];

  const steps = [
    { number: 1, title: "Candidatura", description: "Informe dados da sua propriedade e perfil produtivo", icon: "📋" },
    { number: 2, title: "Avaliação", description: "Nossa equipe analisa seu perfil e adequação à comunidade", icon: "🔍" },
    { number: 3, title: "Aprovação", description: "Produtores aprovados recebem convite para integrar a comunidade", icon: "✅" },
    { number: 4, title: "Treinamento", description: "Integração completa: plataforma, comunidade e primeiras oportunidades", icon: "🎓" }
  ];

  const targetAudience = [
    { icon: Target, text: "Buscam inovação e eficiência" },
    { icon: Brain, text: "Valorizem inteligência e autonomia" },
    { icon: Trophy, text: "Queiram protagonismo nas suas decisões" }
  ];

  const discoveries = [
    "Como economizar 20% em todos os insumos",
    "Como ter poder de negociação com escala", 
    "Como acessar inteligência de mercado exclusiva",
    "Como fazer parte de uma comunidade vencedora"
  ];

  return (
    <section id="comunidade" className="py-32 bg-gradient-to-br from-[#152A1E] via-gray-900 to-[#152A1E] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#639652]/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#639652]/20 border border-[#639652]/30 rounded-full px-6 py-3 mb-8">
            <Star className="text-[#639652]" size={20} />
            <span className="text-[#639652] font-semibold">Comunidade Exclusiva</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Seja parte da{" "}
            <span className="bg-gradient-to-r from-[#639652] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              comunidade
            </span>{" "}
            de produtores inteligentes
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-white/5 border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent size={36} className="text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + (itemIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <Check className="text-[#639652] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={16} />
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* How to Join */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-12 mb-20 border border-white/20 backdrop-blur-sm"
        >
          <h3 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Como fazer parte da{" "}
            <span className="bg-gradient-to-r from-[#639652] to-cyan-400 bg-clip-text text-transparent">
              GRAN PRODUTOR
            </span>
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#639652] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-[#152A1E] rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-[#639652] transition-colors">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#639652] via-cyan-500 to-blue-500 hover:from-blue-500 hover:via-cyan-500 hover:to-[#639652] text-white px-12 py-8 text-2xl font-bold rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group animate-pulse"
            onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5546991039921', '_blank')}
          >
            <Star className="mr-3 group-hover:animate-spin" size={24} />
            Quero fazer parte
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </Button>
        </motion.div>

        {/* Target Audience & Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-8">
              A GRAN não é para todos.{" "}
              <span className="bg-gradient-to-r from-[#639652] to-cyan-400 bg-clip-text text-transparent">
                É para produtores que:
              </span>
            </h3>
            
            <div className="space-y-6 mb-12">
              {targetAudience.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#639652]/10 to-transparent border border-[#639652]/20 hover:border-[#639652]/40 transition-all group"
                  >
                    <IconComponent className="text-[#639652] flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-lg group-hover:text-[#639652] transition-colors">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-[#639652]/10 to-transparent rounded-2xl p-6 border border-[#639652]/20">
              <h4 className="text-2xl font-bold mb-6 text-[#639652]">
                Junte-se aos produtores inteligentes que já descobriram:
              </h4>
              <div className="space-y-4">
                {discoveries.map((discovery, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <Check className="text-[#639652] flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{discovery}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-[#639652]/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
            <img
              src={communityImage}
              alt="Plantação de milho no Paraná, Brasil"
              className="relative w-full h-[500px] object-cover rounded-3xl border-2 border-white/20 shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152A1E]/60 via-transparent to-transparent rounded-3xl"></div>
            
            {/* Overlay Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-[#639652]/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#152A1E]">100+</div>
                    <div className="text-xs text-gray-600">Produtores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#639652]">20%</div>
                    <div className="text-xs text-gray-600">Economia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#152A1E]">24/7</div>
                    <div className="text-xs text-gray-600">Suporte com IA especialista</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#639652]/20 to-cyan-500/20 rounded-3xl p-12 border border-[#639652]/30">
            <h3 className="text-3xl lg:text-4xl font-bold mb-8">
              Pronto para revolucionar sua{" "}
              <span className="bg-gradient-to-r from-[#639652] to-cyan-400 bg-clip-text text-transparent">
                agricultura?
              </span>
            </h3>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#639652] to-cyan-500 hover:from-cyan-500 hover:to-[#639652] text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5546991039921', '_blank')}
            >
              <Trophy className="mr-3 group-hover:animate-bounce" size={24} />
              Quero fazer parte
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}