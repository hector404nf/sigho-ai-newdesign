import React, { useState } from 'react';
import { AgentInterface } from './components/AgentInterface';
import { 
  Menu, X, ChevronRight, Phone, MessageCircle, Clock, 
  ShoppingBag, ShieldCheck, Zap, TrendingUp 
} from 'lucide-react';

// List of clients derived from the images provided
const CLIENTS = [
  "Mercadito Emporio",
  "Ayöök",
  "Lomitoño",
  "Alta Pizza",
  "La Verdad",
  "Garage",
  "Formentera",
  "Fortin Mariscal",
  "Pancia Piena"
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-cyan-500/10 -top-20 -left-20"></div>
        <div className="orb w-[600px] h-[600px] bg-purple-500/10 bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-xl">S</div>
            <span className="font-display font-bold text-xl tracking-tight">Sigho AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#whatsapp" className="hover:text-white transition-colors">WhatsApp IA</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Agendar Demo
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6 text-lg font-medium text-slate-300">
                <a href="#soluciones" onClick={() => setIsMenuOpen(false)}>Soluciones</a>
                <a href="#whatsapp" onClick={() => setIsMenuOpen(false)}>WhatsApp IA</a>
                <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
            </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-28 pb-10 md:pt-40 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-24">
          
          {/* Top Row: Text + Robot */}
          {/* Changed lg:grid-cols-2 to md:grid-cols-2 to move robot up/side on tablet */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Hero Text */}
            <div className="space-y-8 relative order-1">
              
              {/* Decorative: Messaging Bot (Left/Top) */}
              <div className="absolute -top-20 -left-14 z-0 hidden md:flex flex-col items-center animate-float pointer-events-none" style={{ animationDelay: '2s', animationDuration: '7s' }}>
                  <img 
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Envelope.png" 
                    alt=""
                    className="w-16 h-16 object-contain drop-shadow-lg translate-y-6 translate-x-8 z-10 -rotate-12"
                  />
                  <img 
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" 
                    alt="Messaging Bot" 
                    className="w-28 h-28 object-contain opacity-90 drop-shadow-xl -rotate-12 grayscale-[0.3] brightness-110"
                  />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-wider relative z-10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                WhatsApp Business API
              </div>
              
              {/* Adjusted text sizing: md:text-5xl lg:text-6xl to fit better in 2 columns on tablet */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] relative z-10">
                Automatiza tu negocio en <br/>
                <span className="text-[#25D366]">WhatsApp</span> con IA
              </h1>
              
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed relative z-10">
                Transforma la atención al cliente en Restaurantes, Hoteles, Servicios y Ecommerce. 
                Respuestas instantáneas, ventas automáticas y soporte 24/7 sin intervención humana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-2 group">
                  <MessageCircle className="w-5 h-5" />
                  Probar en WhatsApp
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  Ver Casos de Éxito
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 pt-8 border-t border-white/5 mt-8 relative z-10">
                <p>Especialistas en:</p>
                <div className="flex gap-3">
                  <span className="px-2 py-1 rounded bg-slate-800 text-xs border border-white/10 text-slate-300">Resto</span>
                  <span className="px-2 py-1 rounded bg-slate-900 text-xs border border-white/5 text-slate-500 line-through decoration-slate-600">Hotel</span>
                  <span className="px-2 py-1 rounded bg-slate-900 text-xs border border-white/5 text-slate-500 line-through decoration-slate-600">Servicios</span>
                  <span className="px-2 py-1 rounded bg-slate-900 text-xs border border-white/5 text-slate-500 line-through decoration-slate-600">Ecommerce</span>
                </div>
              </div>
            </div>

            {/* Robot Image Column - Visible on all sizes, side-by-side on tablet/desktop */}
            <div className="relative h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center order-2">
                 {/* Decorative: Holographic/Blue Bot */}
                 <div className="absolute bottom-0 right-10 z-0 hidden md:block animate-float pointer-events-none" style={{ animationDelay: '1.2s', animationDuration: '8s' }}>
                    <img 
                      src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" 
                      alt="Holographic Bot" 
                      className="w-20 h-20 object-contain opacity-30 blur-[2px] hue-rotate-[180deg]"
                    />
                </div>

                {/* Main Robot */}
                <div className="animate-float z-20" style={{ animationDelay: '0.5s' }}>
                    <img 
                      src="https://static.vecteezy.com/system/resources/previews/021/615/516/original/cute-3d-robot-character-waving-hand-png.png" 
                      alt="AI Robot Assistant" 
                      className="w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-2xl"
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.src = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png';
                        e.currentTarget.style.padding = '40px'; 
                      }}
                    />
                </div>
            </div>
          </div>

          {/* Bottom Row: Chat Simulator / Demo */}
          <div className="relative w-full max-w-6xl mx-auto" id="soluciones">
             <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-[2.5rem] blur-3xl -z-10 opacity-50"></div>
             
             {/* Componente Interactivo de Demos */}
             <div className="glass-card rounded-[2.5rem] p-6 md:p-12 overflow-hidden min-h-[600px] flex flex-col relative animate-float">
                <div className="text-center mb-10 relative z-10">
                    <h3 className="text-white font-display font-bold text-3xl mb-2">Elige tu Industria</h3>
                    <p className="text-slate-400 text-base">Mira cómo Sigho AI interactúa con tus clientes en tiempo real</p>
                </div>
                <div className="flex justify-center">
                   <AgentInterface />
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Trusted By / Clients Carousel */}
      <section className="py-12 border-y border-white/5 bg-black/30 relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
             <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">Empresas que confían en nosotros</p>
          </div>

          <div className="flex overflow-hidden relative w-full">
             <div className="flex animate-infinite-scroll gap-12 min-w-full justify-around px-6">
                {/* List 1 */}
                {CLIENTS.map((client, i) => (
                  <div key={i} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 duration-300">
                    {/* Reemplaza estas URLs con las imágenes reales cuando las tengas subidas */}
                    <img 
                      src={`https://placehold.co/180x60/0f172a/94a3b8?text=${encodeURIComponent(client)}&font=montserrat`}
                      alt={client} 
                      className="h-12 w-auto object-contain mix-blend-screen"
                    />
                  </div>
                ))}
                {/* List 2 (Duplicate for loop) */}
                {CLIENTS.map((client, i) => (
                  <div key={`dup-${i}`} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 duration-300">
                     <img 
                      src={`https://placehold.co/180x60/0f172a/94a3b8?text=${encodeURIComponent(client)}&font=montserrat`}
                      alt={client} 
                      className="h-12 w-auto object-contain mix-blend-screen"
                    />
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-slate-950/50" id="beneficios">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-display font-bold">Más que un Chatbot</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Nuestros agentes entienden notas de voz, imágenes y contexto complejo gracias a modelos de lenguaje avanzados.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
               icon={<Clock className="w-6 h-6 text-cyan-400" />}
               title="Atención 24/7"
               description="Tu negocio nunca duerme. Responde consultas, toma reservas y cierra ventas a cualquier hora, al instante."
            />
            <FeatureCard 
               icon={<MessageCircle className="w-6 h-6 text-green-400" />}
               title="WhatsApp Nativo"
               description="Sin apps extrañas. Tus clientes usan la app que ya aman. Tasas de apertura del 98%."
            />
            <FeatureCard 
               icon={<ShoppingBag className="w-6 h-6 text-pink-400" />}
               title="Ventas Automáticas"
               description="Sigho AI Ecommerce guía al usuario desde la consulta del producto hasta el link de pago."
            />
             <FeatureCard 
               icon={<Phone className="w-6 h-6 text-blue-400" />}
               title="Entiende Audios"
               description="Los clientes pueden enviar notas de voz y el agente las transcribe, entiende y responde en segundos."
            />
             <FeatureCard 
               icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
               title="CRM Integrado"
               description="Guarda preferencias, historial de pedidos y datos de contacto automáticamente en tu base de datos."
            />
             <FeatureCard 
               icon={<Zap className="w-6 h-6 text-amber-400" />}
               title="Setup en Minutos"
               description="Conectamos tu número actual o te damos uno nuevo. Configuración rápida sin código."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black z-0"></div>
         <div className="max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-20 text-center relative z-10 border-t border-green-500/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 blur-sm"></div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">¿Listo para escalar?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Deja de perder clientes por no responder a tiempo. Únete a la revolución de la IA en WhatsApp.
            </p>
            <button className="px-10 py-5 rounded-full bg-white text-slate-950 font-bold hover:bg-green-50 transition-colors shadow-xl shadow-green-500/10 flex items-center justify-center gap-3 mx-auto">
                <MessageCircle className="w-5 h-5 text-green-600" />
                Agendar Demo Personalizada
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-xs">S</div>
               <span className="font-display font-bold text-lg">Sigho AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Sigho Resto</a>
                <a href="#" className="hover:text-white transition-colors">Sigho Hotel</a>
                <a href="#" className="hover:text-white transition-colors">Sigho Servicios</a>
                <a href="#" className="hover:text-white transition-colors">Sigho Ecommerce</a>
            </div>
            <div className="text-sm text-slate-600">
                © 2024 Sigho AI Inc.
            </div>
        </div>
      </footer>
    </div>
  );
}

// Simple Helper Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-slate-200 group-hover:text-green-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export default App;