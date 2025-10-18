import { Card, CardContent } from "./ui/card";
import { AlertTriangle, DollarSign, TrendingDown, Clock, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Problem() {
  const problems = [
    { icon: DollarSign, text: "Produtores pagam caro por ineficiências que não são suas" },
    { icon: AlertTriangle, text: "Falta acesso direto aos melhores fornecedores" },
    { icon: TrendingDown, text: "Falta inteligência para decisões estratégicas" },
    { icon: Clock, text: "Falta liberdade para negociar com autonomia" },
    { icon: AlertTriangle, text: "Sobra dependência de estruturas que não evoluíram" }
  ];

  const impacts = [
    {
      title: "Impacto financeiro:",
      color: "red",
      icon: "💰",
      items: [
        "20% a mais pagos desnecessariamente em insumos",
        "Em 300ha de soja - R$ 180.000,00 perdidos por safra",
        "Margem de lucro reduzida por intermediários"
      ]
    },
    {
      title: "Impacto estratégico:",
      color: "orange",
      icon: "📊",
      items: [
        "Decisões baseadas em informações enviesadas",
        "Falta de poder de negociação",
        "Sem inteligência de mercado em tempo real"
      ]
    },
    {
      title: "Impacto operacional:",
      color: "yellow",
      icon: "⚙️",
      items: [
        "Tempo perdido com múltiplos fornecedores",
        "Gestão fragmentada da lavoura",
        "Suporte técnico dependente"
      ]
    }
  ];

  return (
    <section id="problema" className="py-32 bg-gradient-to-b from-white via-red-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-6 py-3 mb-8">
            <AlertTriangle className="text-red-600" size={20} />
            <span className="text-red-700 font-semibold">Problema Identificado</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[#152A1E] mb-8 leading-tight">
            O que está{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              errado
            </span>{" "}
            com o agro tradicional?
          </h2>
          <h3 className="text-3xl text-[#639652] font-bold">A realidade atual:</h3>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="h-full border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-red-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <problem.icon className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={28} />
                    <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">{problem.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="relative inline-block">
            <Quote className="absolute -top-6 -left-6 text-[#639652] opacity-30" size={40} />
            <blockquote className="text-3xl lg:text-4xl italic text-[#152A1E] font-bold bg-gradient-to-r from-[#639652]/10 to-transparent border-l-8 border-[#639652] pl-12 py-8 rounded-r-3xl max-w-5xl">
              "Hoje o produtor é o verdadeiro motor do país, mas ainda não tem o poder que merece"
            </blockquote>
          </div>
        </motion.div>

        {/* Cost Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl lg:text-5xl font-bold text-[#152A1E] mb-4">
            O custo real dessa{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              dependência
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os números revelam o impacto devastador do modelo tradicional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className={`h-full border-${impact.color}-200 hover:border-${impact.color}-400 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-${impact.color}-50/50 group`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{impact.icon}</div>
                    <h4 className={`text-2xl font-bold text-${impact.color}-600 group-hover:text-${impact.color}-700 transition-colors`}>
                      {impact.title}
                    </h4>
                  </div>
                  <ul className="space-y-4">
                    {impact.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors"
                      >
                        <div className={`w-2 h-2 bg-${impact.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}