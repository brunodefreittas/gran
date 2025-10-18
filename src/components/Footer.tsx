import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import Vector from "../imports/Vector";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-gradient-to-br from-[#152A1E] via-gray-900 to-[#152A1E] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#639652] rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 py-20 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="w-44 h-11 cursor-pointer mb-8 hover:scale-105 transition-transform" onClick={scrollToTop}>
              <Vector />
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-md">
              Revolucionando a agricultura brasileira com{" "}
              <span className="text-[#639652] font-semibold">inteligência</span>,{" "}
              <span className="text-cyan-400 font-semibold">tecnologia</span> e{" "}
              <span className="text-blue-400 font-semibold">comunidade</span>.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/granprodutor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-2xl hover:shadow-lg hover:shadow-pink-500/25 transition-all group"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5546991039921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl hover:shadow-lg hover:shadow-green-500/25 transition-all group"
                title="WhatsApp"
              >
                <Phone size={24} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>


          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#639652] to-cyan-400 bg-clip-text text-transparent">
                Onde Estamos
              </span>
            </h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#639652]/30 transition-all group"
              >
                <MapPin className="text-[#639652] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <div className="font-semibold">Endereço</div>
                  <div className="text-gray-300">Rua Marins Camargo, 487</div>
                </div>
              </motion.div>
              
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:comercial@granagr.com.br"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all group cursor-pointer"
              >
                <Mail className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-gray-300 group-hover:text-cyan-400 transition-colors">comercial@granagr.com.br</div>
                </div>
              </motion.a>
              
              <motion.a
                whileHover={{ x: 10 }}
                href="tel:46991039921"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/30 transition-all group cursor-pointer"
              >
                <Phone className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <div className="font-semibold">Telefone e WhatsApp</div>
                  <div className="text-gray-300 group-hover:text-green-400 transition-colors">46 9 9103 9921</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Legal & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Informações
              </span>
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">CNPJ</div>
                <div className="font-mono">20.161.902/0001-17</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Copyright</div>
                <div>© 2024 Gran Produtor</div>
                <div className="text-sm text-gray-400">Todos os direitos reservados. A média de 20% de economia é com base em dados e  históricos. Pode variar e não é uma promessa.</div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-16 pt-12"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-gray-400">Feito com</span>
              <Heart className="text-red-500 animate-pulse" size={20} />
              <span className="text-gray-400">para revolucionar o agro brasileiro</span>
            </div>
            <p className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#639652] via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Gran Produtor - Transformando o futuro da agricultura brasileira
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}