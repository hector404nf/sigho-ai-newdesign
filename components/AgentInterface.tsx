import React, { useState, useEffect, useRef } from 'react';
import { Send, Check, Utensils, Hotel, Briefcase, ShoppingBag, Smartphone, Lock, Bot } from 'lucide-react';

type Vertical = 'resto' | 'hotel' | 'servicios' | 'ecommerce';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  delay: number;
}

interface DemoData {
  title: string;
  icon: React.ReactNode;
  color: string;
  messages: Message[];
  status: 'active' | 'coming_soon';
}

const DEMO_DATA: Record<Vertical, DemoData> = {
  resto: {
    title: "Sigho AI Resto",
    icon: <Utensils className="w-4 h-4" />,
    color: "from-orange-400 to-red-500",
    status: 'active',
    messages: [
      { id: 1, text: "Hola, quiero reservar una mesa para hoy.", sender: 'user', delay: 500 },
      { id: 2, text: "¡Hola! 🍷 Claro que sí. ¿Para cuántas personas sería la mesa?", sender: 'bot', delay: 2000 },
      { id: 3, text: "Seríamos 4 personas a las 8 PM.", sender: 'user', delay: 4000 },
      { id: 4, text: "Perfecto. Tengo disponibilidad a las 8:00 PM en la terraza o salón principal. ¿Cuál prefieres?", sender: 'bot', delay: 6000 },
      { id: 5, text: "En la terraza, por favor.", sender: 'user', delay: 8000 },
      { id: 6, text: "Excelente elección. 🌿 ¿A nombre de quién registro la reserva?", sender: 'bot', delay: 9500 },
      { id: 7, text: "A nombre de Ana García.", sender: 'user', delay: 11500 },
      { id: 8, text: "¡Listo Ana! 🎉 Tu reserva está confirmada:\n\n📅 Hoy\n👥 4 personas\n🕗 8:00 PM\n📍 Terraza\n\n¡Los esperamos!", sender: 'bot', delay: 13500 },
    ]
  },
  hotel: {
    title: "Sigho AI Hotel",
    icon: <Hotel className="w-4 h-4" />,
    color: "from-blue-400 to-indigo-500",
    status: 'coming_soon',
    messages: []
  },
  servicios: {
    title: "Sigho AI Servicios",
    icon: <Briefcase className="w-4 h-4" />,
    color: "from-emerald-400 to-teal-500",
    status: 'coming_soon',
    messages: []
  },
  ecommerce: {
    title: "Sigho AI Ecommerce",
    icon: <ShoppingBag className="w-4 h-4" />,
    color: "from-purple-400 to-pink-500",
    status: 'coming_soon',
    messages: []
  }
};

export const AgentInterface: React.FC = () => {
  const [activeVertical, setActiveVertical] = useState<Vertical>('resto');
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic targeting the container specifically
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [displayedMessages]);

  // Reset and load messages sequence
  useEffect(() => {
    setDisplayedMessages([]);
    const currentData = DEMO_DATA[activeVertical];
    
    if (currentData.status === 'coming_soon') return;

    // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to support browser environment
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    currentData.messages.forEach((msg) => {
      const timeout = setTimeout(() => {
        setDisplayedMessages(prev => {
             // Prevent duplicates just in case
             if (prev.find(m => m.id === msg.id)) return prev;
             return [...prev, msg];
        });
      }, msg.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [activeVertical]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 p-4 relative z-10">
      
      {/* Selector de Verticales (Izquierda en desktop, Arriba en mobile) */}
      <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto overflow-x-auto md:overflow-visible p-2 md:p-0 no-scrollbar z-20">
        {(Object.keys(DEMO_DATA) as Vertical[]).map((key) => {
          const data = DEMO_DATA[key];
          const isActive = activeVertical === key;
          const isComingSoon = data.status === 'coming_soon';

          return (
            <button
              key={key}
              onClick={() => setActiveVertical(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 min-w-[160px] md:min-w-[200px] text-left relative overflow-hidden
                ${isActive
                  ? 'bg-white/10 border-white/20 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]' 
                  : 'bg-transparent border-transparent text-slate-400 hover:bg-white/5'
                }
                ${isComingSoon ? 'opacity-80' : ''}
              `}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${data.color} flex items-center justify-center text-white shadow-lg shrink-0 relative`}>
                {data.icon}
                {isComingSoon && (
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-[1px]">
                    <Lock className="w-4 h-4 text-white/80" />
                  </div>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`font-semibold text-sm truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <span className={`text-[10px] ${isComingSoon ? 'text-amber-400 font-medium' : 'opacity-60'}`}>
                  {isComingSoon ? 'Próximamente' : 'Agente IA'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Simulador de Teléfono (Derecha) */}
      <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden flex flex-col shrink-0">
        {/* Notch & Bar */}
        <div className="absolute top-0 w-full h-6 bg-slate-800 z-20 flex justify-center">
            <div className="w-32 h-4 bg-slate-900 rounded-b-xl"></div>
        </div>

        {/* WhatsApp-ish Header */}
        <div className="bg-slate-800 p-4 pt-10 flex items-center gap-3 border-b border-white/5 z-10">
           <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${DEMO_DATA[activeVertical].color} flex items-center justify-center text-white`}>
             <Smartphone className="w-5 h-5" />
           </div>
           <div>
             <h3 className="text-white font-medium text-sm">{DEMO_DATA[activeVertical].title}</h3>
             <p className="text-emerald-400 text-xs">
               {DEMO_DATA[activeVertical].status === 'active' ? 'En línea' : 'Desconectado'}
             </p>
           </div>
        </div>

        {/* Chat Area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 bg-[#0b141a] p-4 flex flex-col gap-4 overflow-y-auto relative no-scrollbar"
        >
           {/* Background Doodle Pattern Opacity */}
           <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>
           
           {DEMO_DATA[activeVertical].status === 'active' ? (
             <>
               {displayedMessages.map((msg) => (
                 <div 
                   key={msg.id}
                   className={`relative max-w-[85%] p-3 rounded-lg text-sm shadow-md whitespace-pre-line animate-in fade-in slide-in-from-bottom-2 duration-300
                     ${msg.sender === 'user' ? 'self-end bg-[#005c4b] text-white rounded-tr-none' : 'self-start bg-[#202c33] text-white rounded-tl-none'}
                   `}
                 >
                   {msg.text}
                   <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                     <span className="text-[10px]">10:3{msg.id}</span>
                     {msg.sender === 'user' && <div className="flex"><Check className="w-3 h-3 text-blue-400" /><Check className="w-3 h-3 text-blue-400 -ml-1.5" /></div>}
                   </div>
                 </div>
               ))}
             </>
           ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center relative">
                  <Bot className="w-10 h-10 text-slate-500" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                    <Lock className="w-3 h-3 text-black" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">En Entrenamiento</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Estamos afinando los últimos detalles de este agente especializado.
                    <br/><br/>
                    <span className="text-amber-500">¡Pronto disponible!</span>
                  </p>
                </div>
             </div>
           )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-slate-800 flex items-center gap-2">
           <div className="flex-1 bg-slate-700 h-9 rounded-full px-4 flex items-center text-xs text-slate-400">
              {DEMO_DATA[activeVertical].status === 'active' ? 'Escribe un mensaje...' : 'No disponible'}
           </div>
           <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors ${DEMO_DATA[activeVertical].status === 'active' ? 'bg-[#00a884]' : 'bg-slate-600'}`}>
              <Send className="w-4 h-4" />
           </div>
        </div>
      </div>

    </div>
  );
};