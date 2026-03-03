
import React from 'react';
import { X, Calendar, TrendingUp, ChevronRight } from 'lucide-react';

interface ListingHistoryModalProps {
  onClose: () => void;
}

const MOCK_HISTORY = [
  { id: 'h1', date: '2024.03.25', price: '582', status: '已結束' },
  { id: 'h2', date: '2024.03.21', price: '142', status: '已結束' },
  { id: 'h3', date: '2024.03.18', price: '498', status: '已結束' },
  { id: 'h4', date: '2024.03.14', price: '92', status: '已結束' },
];

const ListingHistoryModal: React.FC<ListingHistoryModalProps> = ({ onClose }) => {
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
            <h3 className="text-2xl font-black text-[#5C5C4D]">我的發佈記錄</h3>
            <p className="text-xs font-bold text-[#8E8E81] opacity-70">回顧您開放島嶼的歷史</p>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 pr-1">
            {MOCK_HISTORY.map((item) => (
              <div 
                key={item.id}
                className="bg-[#F9F9F2] p-4 rounded-2xl border-2 border-[#E9E9DB] hover:border-[#B1D34A]/50 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[#8E8E81]">
                      <Calendar size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-[#5C5C4D]">{item.price}</span>
                      <span className="text-xs font-bold text-[#B1D34A]">鈴錢</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-200 text-gray-500 text-[10px] font-black px-2 py-0.5 rounded-md">
                      {item.status}
                    </span>
                    <ChevronRight size={18} className="text-[#E9E9DB] group-hover:text-[#B1D34A] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F9FCF0] rounded-2xl border border-[#B1D34A]/20 shrink-0">
            <p className="text-[10px] font-bold text-[#2D5A27] text-center leading-relaxed">
              提示：高價記錄有助於提升您的島民信用評分。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingHistoryModal;
