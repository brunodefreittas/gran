import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Users, Brain, ShoppingCart, TrendingUp, Sparkles, ArrowRight, Bell } from "lucide-react";
import { motion } from "motion/react";

export default function Ecosystem() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const ecosystemItems = [
    {
      icon: Users,
      title: "Comunidade exclusiva",
      subtitle: "Onde produtores inteligentes se encontram",
      color: "from-blue-500 to-cyan-500",
      items: [
        "Grupo seleto de agricultores",
        "Poder de compra com escala",
        "Network qualificado para troca de experiências",
        "Conteúdo exclusivo diário sobre gestão, mercado e inovação"
      ]
    },
    {
      icon: Brain,
      title: "Plataforma inteligente",
      subtitle: "Gestão da eficiência para sua lavoura em um só lugar",
      color: "from-purple-500 to-pink-500",
      items: [
        "Dashboard inteligente",
        "Insights personalizados da sua propriedade",
        "Indicadores de performance em tempo real",
        "Alertas e notificações personalizadas",
        "Histórico completo de safras"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Módulo de compras",
      subtitle: "Catálogo completo de insumos",
      color: "from-orange-500 to-red-500",
      items: [
        "Comparativo de preços em tempo real",
        "Sistema de pedidos",
        "Rastreamento completo de entregas",
        "Inteligência de mercado",
        "Análises de tendências e preços"
      ]
    },
    {
      icon: TrendingUp,
      title: "Conexão direta",
      subtitle: "Sem intermediários, sem custos ocultos",
      color: "from-green-500 to-emerald-500",
      items: [
        "Acesso direto aos melhores fornecedores",
        "Preços com eficiência e transparência total",
        "Economia média de 20% comprovada",
        "Suporte técnico"
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#152A1E] via-gray-900 to-[#152A1E] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#639652]/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
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
            <Sparkles className="text-[#639652]" size={20} />
            <span className="text-[#639652] font-semibold">Ecossistema Completo</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            A GRAN PRODUTOR é{" "}
            <span className="bg-gradient-to-r from-[#639652] to-cyan-400 bg-clip-text text-transparent">
              mais que uma forma de comprar
            </span>,{" "}
            somos um ecossistema completo:
          </h2>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {ecosystemItems.map((item, index) => {
            const IconComponent = item.icon;
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
                <Card className="h-full bg-white/5 border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#639652]/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent size={36} className="text-white" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{item.title}</CardTitle>
                    <p className="text-[#639652] font-medium text-sm">{item.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {item.items.map((listItem, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + (itemIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors"
                        >
                          <div className="w-1.5 h-1.5 bg-[#639652] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{listItem}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Platform Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#639652]/20 to-[#152A1E]/20 rounded-3xl p-12 border border-[#639652]/30 backdrop-blur-sm">
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-gradient-to-r from-[#639652] to-cyan-500 rounded-2xl p-4 shadow-xl"
            >
              <Bell className="text-white" size={24} />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl"
            >
              <Sparkles className="text-white" size={24} />
            </motion.div>

            <div className="text-center">
              <motion.h3 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-[#639652] to-cyan-400 bg-clip-text text-transparent">
                  Prévia da plataforma GRAN
                </span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                "Estamos finalizando os últimos testes da nossa plataforma. Em breve, você terá acesso a uma ferramenta que vai{" "}
                <span className="text-[#639652] font-semibold">ajudar a transformar a gestão da sua propriedade.</span>"
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#639652] to-cyan-500 hover:from-cyan-500 hover:to-[#639652] text-white px-8 py-6 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5546991039921', '_blank')}
                >
                  <Bell className="mr-2 group-hover:animate-pulse" size={20} />
                  Quero fazer parte
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#639652] mb-2">🚀</div>
                  <div className="text-2xl font-bold">Em Breve</div>
                  <div className="text-sm text-gray-400">Lançamento da plataforma</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#639652] mb-2">⚡</div>
                  <div className="text-2xl font-bold">100% Digital</div>
                  <div className="text-sm text-gray-400">Gestão inteligente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#639652] mb-2">🎯</div>
                  <div className="text-2xl font-bold">20% Economia</div>
                  <div className="text-sm text-gray-400">Garantida desde o dia 1</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}