import { Card, CardContent } from "./ui/card";
import { Check, X, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Solution() {
  const visionPoints = [
    "E se o produtor pudesse comprar como as grandes redes?",
    "E se pudesse negociar com poder de escala, mas agir com liberdade de líder?",
    "E se tivesse acesso à inteligência certa, no momento certo?"
  ];

  const traditionalItems = [
    "Múltiplos intermediários",
    "Margens elevadas", 
    "Informações enviesadas",
    "Compra individual",
    "Gestão fragmentada",
    "Relacionamento comercial"
  ];

  const granItems = [
    "Conexão direta com indústria",
    "Eficiência competitiva",
    "Inteligência imparcial", 
    "Poder de compra com escala",
    "Plataforma integrada",
    "Comunidade colaborativa"
  ];

  return (
    <section id="solucao" className="py-32 bg-gradient-to-br from-[#F1F8ED] via-white to-[#D7EACA] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#639652] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#152A1E] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
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
          <div className="inline-flex items-center gap-2 bg-[#639652]/10 border border-[#639652]/20 rounded-full px-6 py-3 mb-8">
            <Lightbulb className="text-[#639652]" size={20} />
            <span className="text-[#152A1E] font-semibold">Nossa Solução</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[#152A1E] mb-8 leading-tight">
            Não fazemos parte do{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent line-through decoration-red-500 decoration-4">
              agro tradicional
            </span>
          </h2>
          <p className="text-3xl lg:text-4xl text-[#639652] font-bold">
            Somos a próxima página da agricultura brasileira
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="bg-gradient-to-r from-[#639652]/10 to-[#152A1E]/10 rounded-3xl p-12 border border-[#639652]/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#152A1E] mb-12 text-center">
              A GRAN nasceu de uma{" "}
              <span className="bg-gradient-to-r from-[#639652] to-[#152A1E] bg-clip-text text-transparent">
                visão revolucionária:
              </span>
            </h3>
            <div className="space-y-8">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#639652] to-[#152A1E] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-xl lg:text-2xl text-gray-700 group-hover:text-[#152A1E] transition-colors">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl lg:text-5xl font-bold text-[#152A1E] text-center mb-16">
            GRAN PRODUTOR{" "}
            <span className="text-[#639652]">vs.</span>{" "}
            Modelo Tradicional
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Traditional Model */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-red-200 bg-gradient-to-br from-red-50 to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="text-white" size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-red-600">
                      Modelo Tradicional
                    </h4>
                    <p className="text-red-500 mt-2">Ineficiente e custoso</p>
                  </div>
                  <div className="space-y-5">
                    {traditionalItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <X className="text-red-600 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-[#639652] rounded-full p-4 shadow-xl"
              >
                <ArrowRight className="text-white" size={32} />
              </motion.div>
            </div>

            {/* GRAN Model */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-[#639652] bg-gradient-to-br from-[#F1F8ED] to-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#639652] to-[#152A1E] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-white" size={32} />
                    </div>
                    <h4 className="text-3xl font-bold text-[#639652]">
                      Modelo GRAN PRODUTOR
                    </h4>
                    <p className="text-[#152A1E] mt-2">Eficiente e inteligente</p>
                  </div>
                  <div className="space-y-5">
                    {granItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#639652]/10 transition-colors group"
                      >
                        <Check className="text-[#639652] flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                        <span className="text-gray-700 font-medium group-hover:text-[#152A1E] transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}