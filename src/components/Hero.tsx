import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "figma:asset/7303ed45d0522161e722843e2a660daa972623ff.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F8ED] via-white to-[#D7EACA]"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#639652] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#152A1E] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#639652] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-20 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#639652]/10 border border-[#639652]/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="text-[#639652]" size={16} />
                <span className="text-sm font-medium text-[#152A1E]">Plataforma Revolucionária</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#152A1E] leading-[0.9] tracking-tight">
                O agro{" "}
                <span className="bg-gradient-to-r from-[#639652] to-[#152A1E] bg-clip-text text-transparent">
                  finalmente
                </span>,{" "}
                <br />
               nas{" "}
                <span className="relative">
                  mãos                </span>{" "}
                de quem produz
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="text-[#639652]" size={24} />
                <p className="text-2xl lg:text-3xl text-[#639652] font-bold">
                  Mais Eficiência, Mais resultado.
                </p>
              </div>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl">
              A primeira plataforma que conecta produtores diretamente ao mercado com inteligência, economia de escala e autonomia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#639652] to-[#152A1E] hover:from-[#152A1E] hover:to-[#639652] text-white px-8 py-6 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                onClick={() => window.open('https://app.viasoftcrm.com.br/', '_blank')}
              >
                Acessar plataforma
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-2 border-[#639652] text-[#639652] hover:bg-[#639652] hover:text-white px-8 py-6 text-xl font-bold rounded-2xl transition-all duration-300"
                onClick={() => document.getElementById('solucao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SAIBA MAIS
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[#639652]/20"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#152A1E]">20%</div>
                <div className="text-sm text-gray-600">Economia garantida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#152A1E]">100%</div>
                <div className="text-sm text-gray-600">Autonomia do produtor</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#152A1E]">24/7</div>
                <div className="text-sm text-gray-600">Suporte inteligente</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#639652] to-[#152A1E] rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={heroImage}
                alt="Plantação de soja no Paraná, Brasil"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152A1E]/30 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#639652]/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-[#152A1E]">Economia Ativa</span>
                </div>
                <div className="text-2xl font-bold text-[#639652]">R$ 180k</div>
                <div className="text-xs text-gray-600">Economizados/safra</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#639652]/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-[#152A1E]">Conexão Direta</span>
                </div>
                <div className="text-2xl font-bold text-[#639652]">100%</div>
                <div className="text-xs text-gray-600">Sem intermediários</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
