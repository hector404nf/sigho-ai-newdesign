import React, { useState } from 'react';
import { AgentInterface } from './components/AgentInterface';
import { 
  Menu, X, ChevronRight, Phone, MessageCircle, Clock, 
  ShoppingBag, ShieldCheck, Zap, TrendingUp,
  Calendar, CreditCard, Database, FileText, Globe, 
  LayoutGrid, Rocket, Settings, Plus, Minus,
  CheckCircle2, Mic, Bot, Lock, BarChart3, Users, Check
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

const PLANS = [
  {
    name: "Estándar",
    description: "Ideal para empezar",
    price: "Gs. 99.000",
    period: "/mes",
    trial: "15 días gratis",
    features: [
      "Chatbot IA por WhatsApp",
      "Pedidos delivery",
      "Reservas de mesas",
      "Info del local automatizada",
      "Dashboard básico",
      "Gestión de equipo"
    ],
    highlight: false,
    buttonText: "Elegir plan"
  },
  {
    name: "Pro",
    description: "Integración completa con SIGHO",
    price: "Gs. 250.000",
    period: "/mes",
    trial: "15 días gratis",
    features: [
      "Todo del plan Estándar",
      "Integración SIGHO Resto",
      "Pedidos automáticos al POS",
      "Estados en tiempo real",
      "Analytics avanzados",
      "Soporte prioritario"
    ],
    highlight: true,
    buttonText: "Elegir plan"
  },
  {
    name: "Enterprise",
    description: "Para cadenas de restaurantes",
    price: "Contactar",
    period: "",
    trial: null,
    features: [
      "Todo del plan Pro",
      "Múltiples locales",
      "API personalizada",
      "SLA garantizado",
      "Gerente de cuenta dedicado"
    ],
    highlight: false,
    buttonText: "Elegir plan"
  }
];

const FAQS = [
  {
    question: "¿Necesito un número de teléfono nuevo?",
    answer: "No necesariamente. Puedes migrar tu número actual a la API de WhatsApp Business o te proporcionamos uno nuevo virtual para que separes tu vida personal del negocio."
  },
  {
    question: "¿El agente puede enviar imágenes y menús?",
    answer: "Sí, Sigho AI puede enviar el menú en PDF, fotos de platillos específicos o catálogos de productos cuando el cliente lo solicite."
  },
  {
    question: "¿Qué pasa si el bot no sabe la respuesta?",
    answer: "El sistema está diseñado para detectar cuando no puede resolver una duda y transfiere la conversación silenciosamente a un humano, notificándote al instante."
  },
  {
    question: "¿Es seguro conectar mi WhatsApp?",
    answer: "Totalmente. Utilizamos la API Oficial de Meta (Cloud API), lo que garantiza estabilidad, seguridad y evita bloqueos comunes en soluciones no oficiales."
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative bg-zinc-950 text-zinc-100">
      
      {/* Background Ambience (Global Noise & Orbs only, Image removed from here) */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Abstract Glows */}
        <div className="orb w-[500px] h-[500px] bg-cyan-500/10 -top-20 -left-20"></div>
        <div className="orb w-[600px] h-[600px] bg-purple-500/10 bottom-0 right-0"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-xl">S</div>
            <span className="font-display font-bold text-xl tracking-tight">Sigho AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#proceso" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
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
        <div className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6 text-lg font-medium text-zinc-300">
                <a href="#soluciones" onClick={() => setIsMenuOpen(false)}>Soluciones</a>
                <a href="#proceso" onClick={() => setIsMenuOpen(false)}>Cómo funciona</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-28 pb-10 md:pt-40 md:pb-32 px-6 overflow-hidden">
        
        {/* Scoped Background Image for Hero Only */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            {/* 
                Image Adjustments:
                - bg-center: Changed from bg-top to bg-center for better framing of the new image.
                - opacity-70: Increased from 60 to 70 for better visibility.
                - Image source: Switched to a clearer restaurant interior with warm lighting.
            */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
            
            {/* General Dark Overlay (Reduced to 30% for better image visibility) */}
            <div className="absolute inset-0 bg-zinc-950/30"></div>
            
            {/* Gradient Left: Strong fade to black on left to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
            
            {/* Gradient Bottom: Hard fade to black (zinc-950) to seamlessly merge with next section */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-24 relative z-10">
          
          {/* Top Row: Text + Visuals */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8 relative order-1">
              
              {/* Decorative Element: Abstract Spark */}
              <div className="absolute -top-16 -left-10 z-0 hidden md:flex animate-float pointer-events-none opacity-60" style={{ animationDelay: '2s', animationDuration: '7s' }}>
                   <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
                      <Zap className="w-12 h-12 text-cyan-300/50 rotate-12" />
                   </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                WhatsApp Business API
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] relative z-10 text-white">
                Automatiza tu restaurante <br/>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">en WhatsApp</span> con IA
              </h1>
              
              <p className="text-lg text-zinc-300 max-w-xl leading-relaxed relative z-10 drop-shadow-md font-medium">
                Transforma la atención al cliente en Restaurantes, Cafeterías y Bares. 
                Respuestas instantáneas, reservas automáticas y soporte 24/7 sin intervención humana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 group">
                  <MessageCircle className="w-5 h-5" />
                  Probar en WhatsApp
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                  Ver Casos de Éxito
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-zinc-400 pt-8 border-t border-white/10 mt-8 relative z-10">
                <p>Especialistas en:</p>
                <div className="flex gap-3">
                  <span className="px-2 py-1 rounded bg-zinc-800 text-xs border border-white/10 text-zinc-300">Resto</span>
                  <span className="px-2 py-1 rounded bg-zinc-900 text-xs border border-white/5 text-zinc-500 line-through decoration-zinc-600">Hotel</span>
                  <span className="px-2 py-1 rounded bg-zinc-900 text-xs border border-white/5 text-zinc-500 line-through decoration-zinc-600">Servicios</span>
                  <span className="px-2 py-1 rounded bg-zinc-900 text-xs border border-white/5 text-zinc-500 line-through decoration-zinc-600">Ecommerce</span>
                </div>
              </div>
            </div>

            {/* Abstract Tech Composition - ENHANCED */}
            <div className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center order-2 perspective-1000">
                 
                 {/* Central Core Glow */}
                 <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse-slow"></div>
                 
                 {/* The Core: Abstract Representation of AI */}
                 <div className="relative z-20 animate-float" style={{ animationDuration: '8s' }}>
                    <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <Bot className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] relative z-10" />
                        {/* Internal Scanning Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                        <div className="absolute top-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                    </div>
                 </div>

                 {/* Card 1: Success Action (Top Right) */}
                 <div className="absolute top-12 -right-4 md:right-6 glass-card p-3 pr-5 rounded-2xl flex items-center gap-3 animate-float shadow-xl shadow-black/50 backdrop-blur-xl border-t border-white/10 z-30" style={{ animationDelay: '1s', animationDuration: '6s' }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-900/20 border border-green-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Estado</div>
                        <div className="text-sm font-bold text-white">Reserva Confirmada</div>
                    </div>
                 </div>

                 {/* Card 2: Audio Analysis (Bottom Left) */}
                 <div className="absolute bottom-16 left-2 md:-left-8 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float shadow-xl shadow-black/50 z-30" style={{ animationDelay: '2.5s', animationDuration: '7s' }}>
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
                        <Mic className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mb-1">Audio Recibido</div>
                        <div className="flex gap-1 items-end h-4">
                             <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                             <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                             <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                             <div className="w-1 h-5 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                             <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                 </div>

                 {/* Card 3: Revenue Graph (Middle Right) - NEW */}
                 <div className="absolute top-1/2 -right-8 glass-card p-3 rounded-2xl animate-float shadow-lg z-10 hidden md:block" style={{ animationDelay: '4s', animationDuration: '8s' }}>
                     <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-indigo-500/20">
                             <TrendingUp className="w-3 h-3 text-indigo-400" />
                        </div>
                        <span className="text-xs font-bold text-zinc-200">+24% Ventas</span>
                     </div>
                     <div className="flex items-end gap-1 h-10 w-24">
                         <div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%]"></div>
                         <div className="w-full bg-indigo-500/30 rounded-t-sm h-[60%]"></div>
                         <div className="w-full bg-indigo-500/40 rounded-t-sm h-[30%]"></div>
                         <div className="w-full bg-indigo-500/60 rounded-t-sm h-[80%]"></div>
                         <div className="w-full bg-indigo-500 rounded-t-sm h-[95%]"></div>
                     </div>
                 </div>

                 {/* Card 4: Security (Bottom Right) - NEW */}
                 <div className="absolute bottom-8 right-10 glass-card px-4 py-2 rounded-full flex items-center gap-2 animate-float shadow-lg z-20" style={{ animationDelay: '0.8s', animationDuration: '5s' }}>
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] text-zinc-300 font-mono">E2E Encrypted</span>
                 </div>

                 {/* Card 5: Calendar (Top Left High) - NEW */}
                 <div className="absolute top-0 left-10 glass-card p-3 rounded-xl flex items-center gap-3 animate-float shadow-lg z-10 opacity-80 scale-90" style={{ animationDelay: '3.2s', animationDuration: '9s' }}>
                     <div className="bg-zinc-800 rounded px-2 py-1 text-center min-w-[36px]">
                         <div className="text-[8px] text-red-400 font-bold uppercase">Oct</div>
                         <div className="text-sm font-bold text-white">24</div>
                     </div>
                     <div className="flex flex-col">
                         <span className="text-xs text-white font-medium">Cena Aniversario</span>
                         <span className="text-[10px] text-zinc-500">8:00 PM • 2 pax</span>
                     </div>
                 </div>

                 {/* Card 6: Floating Code/Tag (Far Left) - NEW */}
                 <div className="absolute top-1/3 -left-12 glass-card px-3 py-1.5 rounded-md animate-float shadow-lg z-0 rotate-[-6deg] hidden md:flex items-center gap-2 opacity-60" style={{ animationDelay: '5s', animationDuration: '10s' }}>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <span className="text-[10px] text-zinc-400 font-mono">processing_order...</span>
                 </div>

                 {/* Orbit Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                    <circle cx="50%" cy="50%" r="140" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite] opacity-30" />
                    <circle cx="50%" cy="50%" r="180" stroke="url(#grad1)" strokeWidth="1" fill="none" strokeDasharray="10 10" className="animate-[spin_30s_linear_reverse_infinite] opacity-20" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                        <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>
                 </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Clients Carousel */}
      <section className="py-12 border-y border-white/5 bg-black/30 relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
             <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">Empresas que confían en nosotros</p>
          </div>

          <div className="flex overflow-hidden relative w-full">
             <div className="flex animate-infinite-scroll gap-12 min-w-full justify-around px-6">
                {CLIENTS.map((client, i) => (
                  <div key={i} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 duration-300">
                    <img 
                      src={`https://placehold.co/180x60/09090b/a1a1aa?text=${encodeURIComponent(client)}&font=montserrat`}
                      alt={client} 
                      className="h-12 w-auto object-contain mix-blend-screen"
                    />
                  </div>
                ))}
                {CLIENTS.map((client, i) => (
                  <div key={`dup-${i}`} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 duration-300">
                     <img 
                      src={`https://placehold.co/180x60/09090b/a1a1aa?text=${encodeURIComponent(client)}&font=montserrat`}
                      alt={client} 
                      className="h-12 w-auto object-contain mix-blend-screen"
                    />
                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* NEW COMBINED SECTION: Process + Demo */}
      <section className="py-24 px-6 relative bg-zinc-900/30 border-y border-white/5" id="proceso">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Simplicidad Radical */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Simplicidad Radical</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Olvídate de configuraciones complejas. Tu agente está listo para vender en 3 simples pasos.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                  {/* Connecting Line (Vertical) - Abstract representation via CSS in cards or just spacing */}
                  <ProcessCard 
                    step="01"
                    icon={<Settings className="w-6 h-6 text-white" />}
                    title="Conecta"
                    description="Escanea el código QR para vincular tu WhatsApp Business o solicita un número nuevo."
                  />
                  <ProcessCard 
                    step="02"
                    icon={<FileText className="w-6 h-6 text-white" />}
                    title="Entrena"
                    description="Sube tus menús PDF, lista de precios o base de conocimientos. El agente aprende en segundos."
                  />
                  <ProcessCard 
                    step="03"
                    icon={<Rocket className="w-6 h-6 text-white" />}
                    title="Automatiza"
                    description="Activa el piloto automático. Sigho comienza a responder, vender y agendar 24/7."
                  />
              </div>
            </div>

            {/* Right Column: Elige tu Industria (Demo) */}
            <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-[2.5rem] blur-3xl -z-10 opacity-30"></div>
                
                {/* Card Container for Demo */}
                <div className="glass-card rounded-[2.5rem] p-6 md:p-10 bg-black/40 border border-white/10 overflow-hidden relative">
                    <div className="text-center mb-8 relative z-10">
                        <h3 className="text-white font-display font-bold text-2xl mb-2">Elige tu Industria</h3>
                        <p className="text-zinc-400 text-sm">Mira cómo Sigho AI interactúa en tiempo real</p>
                    </div>
                    <div className="flex justify-center relative z-10">
                       <AgentInterface />
                    </div>
                </div>
            </div>

         </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative z-10" id="beneficios">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Más que un Chatbot</h2>
             <p className="text-zinc-400 max-w-2xl mx-auto">Nuestros agentes entienden notas de voz, imágenes y contexto complejo gracias a modelos de lenguaje avanzados.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
               icon={<Clock className="w-6 h-6 text-cyan-400" />}
               title="Atención 24/7"
               description="Tu negocio nunca duerme. Responde consultas, toma reservas y cierra ventas a cualquier hora, al instante."
            />
            <FeatureCard 
               icon={<MessageCircle className="w-6 h-6 text-indigo-400" />}
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

      {/* NEW SECTION: Pricing Plans (Replaces Integrations) */}
      <section className="py-24 px-6 relative" id="precios">
         <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Planes simples</h2>
                 <p className="text-zinc-400">Elegí el plan que mejor se adapte a tu negocio</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 items-start">
                 {PLANS.map((plan, i) => (
                    <PricingCard key={i} plan={plan} />
                 ))}
             </div>
         </div>
      </section>

      {/* NEW SECTION: FAQ */}
      <section className="py-24 px-6 bg-zinc-900/20" id="faq">
          <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">Preguntas Frecuentes</h2>
             <div className="space-y-4">
                {FAQS.map((faq, i) => (
                    <FaqItem key={i} question={faq.question} answer={faq.answer} />
                ))}
             </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0"></div>
         <div className="max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-20 text-center relative z-10 border-t border-cyan-500/20 bg-zinc-900/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm"></div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">¿Listo para escalar?</h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Deja de perder clientes por no responder a tiempo. Únete a la revolución de la IA en WhatsApp.
            </p>
            <button className="px-10 py-5 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-3 mx-auto">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                Agendar Demo Personalizada
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">S</div>
               <span className="font-display font-bold text-lg text-white">Sigho AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
                <a href="#" className="hover:text-white transition-colors">Sigho Resto</a>
                <a href="#" className="hover:text-white transition-colors">Sigho Hotel</a>
                <a href="#" className="hover:text-white transition-colors">Sigho Servicios</a>
                <a href="#" className="hover:text-white transition-colors">Sigho Ecommerce</a>
            </div>
            <div className="text-sm text-zinc-600">
                © 2024 Sigho AI Inc.
            </div>
        </div>
      </footer>
    </div>
  );
}

// COMPONENTS

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-zinc-200 group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-zinc-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

// Updated ProcessCard for Horizontal List Layout
const ProcessCard = ({ step, icon, title, description }: { step: string, icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col sm:flex-row gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all group">
        <div className="shrink-0 relative">
            <div className="w-14 h-14 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {icon}
            </div>
        </div>
        <div>
             <div className="text-xs font-bold text-cyan-500 mb-1 tracking-widest">{step}</div>
             <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
             <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

const PricingCard = ({ plan }: { plan: typeof PLANS[number] }) => (
    <div className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${plan.highlight ? 'bg-zinc-900/80 border-blue-500 shadow-2xl shadow-blue-900/20 md:scale-105 z-10' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'}`}>
        {plan.highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30">
                Popular
            </div>
        )}
        <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-zinc-400 text-sm">{plan.description}</p>
        </div>

        <div className="mb-2">
            <span className="text-3xl font-bold text-white tracking-tight">{plan.price}</span>
            {plan.period && <span className="text-zinc-500 text-sm font-medium">{plan.period}</span>}
        </div>
        
        {/* Spacer for alignment if trial text exists or not */}
        <div className="h-6 mb-8">
            {plan.trial && <p className="text-blue-400 text-xs font-bold">{plan.trial}</p>}
        </div>

        <div className="space-y-4 mb-10 flex-1">
            {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-zinc-500'}`} />
                    <span className="text-sm text-zinc-300 leading-tight">{feature}</span>
                </div>
            ))}
        </div>

        <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
            plan.highlight 
                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20' 
                : 'border border-white/10 text-white hover:bg-white/5'
        }`}>
            {plan.buttonText}
        </button>
    </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/5 rounded-xl bg-white/[0.02] overflow-hidden transition-all duration-300">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
            >
                <span className="font-medium text-zinc-200">{question}</span>
                {isOpen ? <Minus className="w-5 h-5 text-cyan-400 flex-shrink-0" /> : <Plus className="w-5 h-5 text-zinc-500 flex-shrink-0" />}
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;