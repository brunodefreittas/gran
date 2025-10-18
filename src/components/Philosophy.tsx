import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Quote, Lightbulb, Target, Zap, Users } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-32 bg-[#152A1E] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#639652] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-[#639652] rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-[#639652] rounded-full opacity-80 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#639652] rounded-full opacity-50 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Não nascemos para{" "}
                <span className="bg-gradient-to-r from-[#639652] to-[#B5D4A4] bg-clip-text text-transparent">
                  repetir
                </span>{" "}
                o que o agro já conhece
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Quote className="absolute -top-4 -left-4 text-[#639652] opacity-50" size={32} />
              <blockquote className="text-2xl lg:text-3xl italic border-l-4 border-[#639652] pl-8 py-4 bg-gradient-to-r from-[#639652]/10 to-transparent rounded-r-2xl">
                "Em um mercado de altos custos e muitos intermediários, escolhemos um novo caminho: mais direto, mais inteligente, mais justo."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Target, text: "Somos a próxima página da agricultura brasileira." },
                { icon: Users, text: "Onde produtores inteligentes se encontram." },
                { icon: Lightbulb, text: "Onde a inovação se transforma em negócio." },
                { icon: Zap, text: "Onde o futuro já começou." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#639652]/10 to-transparent border border-[#639652]/20 hover:border-[#639652]/40 transition-all duration-300 group"
                >
                  <item.icon className="text-[#639652] group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-[#B5D4A4] group-hover:text-white transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#639652] via-[#152A1E] to-[#639652] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587032039356-a62ad49deaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBQYXJhbmElMjBCcmF6aWwlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTgyODAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Campo de milho no Paraná, Brasil"
                  className="w-full h-[500px] object-cover rounded-3xl border-2 border-[#639652]/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152A1E]/60 via-transparent to-[#639652]/20 rounded-3xl"></div>
                
                {/* Overlay Elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-[#639652]/20">
                    <h4 className="text-xl font-bold text-[#152A1E] mb-2">Revolução Digital</h4>
                    <p className="text-sm text-gray-600">Transformando a agricultura com inteligência e eficiência</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-[#639652] rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-[#152A1E] rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-[#639652] rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-xs text-gray-500">+1000 produtores conectados</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}