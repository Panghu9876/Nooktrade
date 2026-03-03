
import React, { useState, useMemo } from 'react';
import { Users, Clock, Globe, Star, Play, Plane, X, ShieldAlert } from 'lucide-react';
import { MOCK_LISTINGS } from '../constants';

const Marketplace: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [isQueued, setIsQueued] = useState(false);
  const [queuedIsland, setQueuedIsland] = useState<string | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // Updated filters array: replaced '150+' with '200+' and '南半球' with '100+'
  const filters = ['全部', '500+', '400+', '300+', '200+', '100+'];

  // Filter logic
  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter(item => {
      if (activeFilter === '全部') return true;
      
      const priceValue = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
      
      if (activeFilter === '500+') return priceValue >= 500;
      if (activeFilter === '400+') return priceValue >= 400;
      if (activeFilter === '300+') return priceValue >= 300;
      if (activeFilter === '200+') return priceValue >= 200; 
      if (activeFilter === '100+') return priceValue >= 100;
      
      return true;
    });
  }, [activeFilter]);

  const handleJoinQueue = (islandName: string) => {
    setQueuedIsland(islandName);
    setIsQueued(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300 relative">
      {/* Password Modal Popup */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-[320px] bg-white rounded-[2.5rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-200 relative">
            <button 
              onClick={() => setIsPasswordModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-[#F9FCF0] rounded-full flex items-center justify-center text-[#B1D34A]">
                <ShieldAlert size={32} />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl font-black text-gray-800">開門密碼</h3>
                <p className="text-xs font-bold text-gray-400">請在抵達機場後輸入</p>
              </div>

              <div className="bg-[#F9FCF0] w-full py-6 rounded-3xl border-2 border-dashed border-[#B1D34A]/30">
                <span className="text-4xl font-black tracking-[0.3em] text-[#B1D34A] ml-[0.3em]">
                  H2K9X7
                </span>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <p className="text-[11px] font-bold text-blue-700 leading-relaxed">
                  小贴士：為了讓更多島民能順利交易，每人限時在島上停留 <span className="text-blue-900 font-black">15 分鐘</span>。
                </p>
              </div>

              <button 
                onClick={() => setIsPasswordModalOpen(false)}
                className="w-full bg-[#B1D34A] text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-[#B1D34A]/20 active:scale-95 transition-all"
              >
                我知道了
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Queue Status Card (Conditional) */}
      {isQueued && (
        <div className="relative overflow-hidden bg-[#B1D34A] rounded-[2rem] p-6 text-white shadow-lg animate-in slide-in-from-top duration-500 mb-0">
          <div className="absolute right-[-10px] top-4 opacity-10 rotate-[-15deg]">
            <Plane size={140} fill="white" stroke="none" />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-white/30 rounded-full p-1">
                    <Play size={14} fill="white" className="ml-0.5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">您目前正在排隊中！</h2>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs font-medium opacity-90">目標島嶼</p>
                  <p className="text-2xl font-black tracking-wide">{queuedIsland}</p>
                </div>
              </div>

              <div className="text-right flex flex-col items-end">
                <p className="text-sm font-bold opacity-90">當前順位</p>
                <p className="text-4xl font-black italic">#4</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <button 
                onClick={() => setIsPasswordModalOpen(true)}
                className="bg-white text-[#B1D34A] py-3 rounded-2xl font-bold text-sm shadow-sm active:scale-95 transition-all"
              >
                顯示密碼
              </button>
              <button 
                onClick={() => setIsQueued(false)}
                className="bg-black/10 text-white py-3 rounded-2xl font-bold text-sm hover:bg-black/20 active:scale-95 transition-all"
              >
                離開隊列
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Horizontal Filter Scroller - Reduced pb from 4 to 1 to shrink distance */}
      <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar -mx-5 px-5 mt-2">
        {filters.map((f) => (
          <button 
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${
              activeFilter === f 
                ? 'bg-[#B1D34A] text-white border-[#B1D34A]' 
                : 'bg-white text-[#8E8E8E] border-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Listing Cards */}
      <div className="space-y-4">
        {filteredListings.length > 0 ? (
          filteredListings.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col relative animate-in fade-in duration-300">
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="flex gap-3 flex-1 overflow-hidden">
                  {/* Seller Avatar */}
                  <div className="w-12 h-12 rounded-[1.2rem] bg-[#F9F9F2] overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
                    <img src={item.sellerAvatar} alt={item.seller} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="space-y-1 overflow-hidden">
                    <h3 className="text-xl font-bold text-[#444] truncate">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#8E8E8E] truncate">{item.seller}</span>
                      <span className="bg-[#E6F4D7] text-[#B1D34A] text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0">等級 9</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="px-4 py-2 bg-[#FEF9E7] border border-[#FFECB3] rounded-2xl flex items-center gap-1 flex-shrink-0">
                    <span className="text-lg font-bold text-[#D4A017]">{item.price.split(' ')[0]}</span>
                    <span className="text-xs text-[#D4A017] font-bold">鈴錢</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Tag 
                  icon={<Globe size={14} />} 
                  label={item.hemisphere === 'North' ? '北半球' : '南半球'} 
                  active={true} 
                  color={item.hemisphere === 'North' ? "bg-[#E0F7FA] text-[#00ACC1]" : "bg-[#FFF3E0] text-[#FB8C00]"} 
                />
                <Tag icon={<Users size={14} />} label="12/20" active={false} color="bg-[#F1F8E9] text-[#7CB342]" />
                <Tag icon={<Clock size={14} />} label={item.timestamp} active={false} color="bg-[#F5F5F5] text-[#8E8E8E]" />
                <div className="flex items-center gap-1 ml-auto">
                  <Star size={14} className="fill-[#FBC02D] text-[#FBC02D]" />
                  <span className="text-xs font-bold text-[#8E8E8E]">{item.sellerRating}</span>
                </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                {item.description.split(' ').map((badge, idx) => (
                  <span key={idx} className="bg-[#F5F5F5] text-[#8E8E8E] text-[10px] font-bold px-3 py-1 rounded-full border border-gray-200">
                    {badge}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleJoinQueue(item.title)}
                className="w-full bg-[#B1D34A] text-white py-4 rounded-3xl font-bold text-lg shadow-sm active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
                disabled={isQueued}
              >
                {isQueued && queuedIsland === item.title ? '已在隊列中' : '加入排隊'}
              </button>
            </div>
          ))
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-300">
              <Users size={32} />
            </div>
            <p className="text-gray-400 font-bold">沒有找到符合條件的島嶼</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Tag: React.FC<{ icon: React.ReactNode, label: string, active: boolean, color: string }> = ({ icon, label, color }) => (
  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${color} font-bold text-xs`}>
    {icon}
    <span>{label}</span>
  </div>
);

export default Marketplace;
