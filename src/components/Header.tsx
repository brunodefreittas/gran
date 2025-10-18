import { useState, useEffect } from "react";

import { Instagram, Menu, X, Phone } from "lucide-react";
import Vector from "../imports/Vector";
import { motion } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };



  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#152A1E]/95 backdrop-blur-lg shadow-2xl border-b border-[#639652]/20' 
          : 'bg-[#152A1E]/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-38 h-10 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Vector />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {[
              { label: 'O Problema', id: 'problema' },
              { label: 'Nossa Solução', id: 'solucao' },
              { label: 'Como Funciona', id: 'como-funciona' },
              { label: 'Resultados', id: 'resultados' },
              { label: 'Comunidade', id: 'comunidade' }
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-white hover:text-[#639652] transition-colors text-sm font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#639652] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* Desktop Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/granprodutor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#639652] transition-colors p-2 rounded-full hover:bg-[#639652]/10"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5546991039921" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#639652] transition-colors p-2 rounded-full hover:bg-[#639652]/10"
              title="WhatsApp"
            >
              <Phone size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-[#639652]/20 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 border-t border-[#639652]/20"
          >
            <nav className="flex flex-col space-y-4 mt-6">
              {[
                { label: 'O Problema', id: 'problema' },
                { label: 'Nossa Solução', id: 'solucao' },
                { label: 'Como Funciona', id: 'como-funciona' },
                { label: 'Resultados', id: 'resultados' },
                { label: 'Comunidade', id: 'comunidade' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white hover:text-[#639652] transition-colors text-sm py-2 px-4 rounded-lg hover:bg-[#639652]/10"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-center pt-4 border-t border-[#639652]/20">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/granprodutor/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#639652] transition-colors p-2 rounded-full hover:bg-[#639652]/10"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5546991039921" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#639652] transition-colors p-2 rounded-full hover:bg-[#639652]/10"
                    title="WhatsApp"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}