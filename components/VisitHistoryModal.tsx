
import React from 'react';
import { X, Calendar, MapPin, User, ChevronRight } from 'lucide-react';

interface VisitHistoryModalProps {
  onClose: () => void;
}

const MOCK_VISIT_HISTORY = [
  { id: 'v1', date: '2024.03.26', islandName: '鈴錢灣', seller: '狸克', price: '542' },
  { id: 'v2', date: '2024.03.24', islandName: '博物館灣', seller: '傅達', price: '156' },
  { id: 'v3', date: '2024.03.20', islandName: '大頭菜神島', seller: '曹賣', price: '612' },
  { id: 'v4', date: '2024.03.15', islandName: '服務中心島', seller: '西施惠', price: '380' },
];

const VisitHistoryModal: React.FC<VisitHistoryModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-300 relative overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="space-y-6 flex-1 flex flex-col overflow-hidden">
          <div className="text-center space-y-1 shrink-0">
            <h3 className="text-2xl font-black text-[#5C5C4D]">登島記錄</h3>
            <p className="text-xs font-bold text-[#8E8E81] opacity-70">回顧您造訪過的島嶼之旅</p>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 pr-1">
            {MOCK_VISIT_HISTORY.map((item) => (
              <div 
                key={item.id}
                className="bg-[#FDFDF9] p-4 rounded-2xl border-2 border-[#E9E9DB] hover:border-[#B1D34A]/50 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-1.5 text-[#8E8E81]">
                      <Calendar size={12} />
                      <span className="text-[10px] font-black uppercase tracking-wider">{item.date}</span>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-[#5C5C4D] font-black text-sm">
                        <MapPin size={12} className="text-[#B1D34A]" />
                        {item.islandName}
                      </div>
                      <div className="flex items-center gap-1 text-[#8E8E81] font-bold text-[11px]">
                        <User size={10} />
                        {item.seller}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="bg-[#FEF9E7] border border-[#FFECB3] px-3 py-1.5 rounded-xl flex items-center gap-1">
                      <span className="text-sm font-black text-[#D4A017]">{item.price}</span>
                      <span className="text-[10px] text-[#D4A017] font-bold">鈴錢</span>
                    </div>
                    <ChevronRight size={16} className="text-[#E9E9DB] group-hover:text-[#B1D34A] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F9FCF0] rounded-2xl border border-[#B1D34A]/20 shrink-0">
            <p className="text-[10px] font-bold text-[#2D5A27] text-center leading-relaxed">
              提示：友善的登島行為（如支付小費、遵守規則）能提升您的評價。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitHistoryModal;
