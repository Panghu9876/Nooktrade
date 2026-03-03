
import React from 'react';
import { ArrowRight, Tag, TrendingUp, ShieldCheck, Star } from 'lucide-react';

interface HomeViewProps {
  onNavigateMarket: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigateMarket }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-4">
      {/* Banner */}
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#AED9E0] to-[#91c9d4] p-8 text-[#2c5364]">
        <div className="relative z-10 space-y-3">
          <span className="bg-white/30 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Summer Update</span>
          <h2 className="text-3xl font-bold leading-tight">Island Trade Companion</h2>
          <p className="text-sm opacity-90 max-w-[200px]">Join thousands of players in our secure marketplace.</p>
          <button 
            onClick={onNavigateMarket}
            className="bg-white text-[#2c5364] px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm active:scale-95 transition-all"
          >
            Start Trading <ArrowRight size={16} />
          </button>
        </div>
        <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 opacity-20">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.4,-0.9C83.8,13.9,77.5,27.8,68.9,39.6C60.3,51.4,49.4,61.1,36.7,68.9C24,76.7,9.5,82.5,-4.4,80.1C-18.3,77.7,-31.6,67.1,-43.3,56.5C-55,45.9,-65.1,35.3,-71.4,22.4C-77.7,9.5,-80.2,-5.7,-77.3,-20.1C-74.4,-34.5,-66.1,-48.1,-54,-56.3C-41.9,-64.5,-26,-67.3,-11.3,-74.8C3.4,-82.3,18.8,-94.5,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Fast Stats Scroller */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
        <StatPill 
          icon={<TrendingUp size={16} className="text-green-600" />} 
          label="Turnips" 
          value="582" 
        />
        <StatPill 
          icon={<Tag size={16} className="text-blue-600" />} 
          label="Market" 
          value="1.2k" 
        />
        <StatPill 
          icon={<ShieldCheck size={16} className="text-orange-600" />} 
          label="Escrow" 
          value="342" 
        />
      </div>

      {/* Featured Horizontal Scroller */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Featured Collections</h3>
          <button onClick={onNavigateMarket} className="text-[#5EB970] text-sm font-bold">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
          {['Ironwood', 'Zen Garden', 'Cute Pink', 'Antique'].map((item, idx) => (
            <div key={idx} className="min-w-[140px] group cursor-pointer">
              <div className="aspect-square bg-white rounded-3xl border border-gray-50 overflow-hidden mb-2 shadow-sm">
                <img src={`https://picsum.photos/seed/coll${idx}/200/200`} className="w-full h-full object-cover" alt={item} />
              </div>
              <p className="font-bold text-gray-700 text-sm">{item}</p>
              <p className="text-[10px] text-gray-400">12 items</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity (Vertical) */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Trusted Sellers</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-peach overflow-hidden border-2 border-white shadow-sm">
                  <img src={`https://picsum.photos/seed/seller${i}/100/100`} alt="Seller" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">NookLover_{i}</p>
                  <div className="flex items-center gap-1">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-[10px] text-gray-400">5.0 (124 trades)</span>
                  </div>
                </div>
              </div>
              <button className="text-[#5EB970] text-xs font-bold bg-green-50 px-3 py-1.5 rounded-lg">Follow</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const StatPill: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="flex-shrink-0 bg-white p-3 px-4 rounded-2xl flex items-center gap-3 border border-gray-50 shadow-sm min-w-[120px]">
    <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default HomeView;
