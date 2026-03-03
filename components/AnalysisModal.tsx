
import React from 'react';
import { X, Sparkles, TrendingUp, Check, BookOpen } from 'lucide-react';

interface AnalysisModalProps {
  advice: string;
  onClose: () => void;
}

const AnalysisModal: React.FC<AnalysisModalProps> = ({ advice, onClose }) => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm h-[540px] bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-300 relative overflow-hidden flex flex-col">
        
        {/* Decorative Background Elements */}
        <div className="absolute -top-12 -right-12 text-[#B1D34A] opacity-5 pointer-events-none">
          <TrendingUp size={200} />
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Content Area */}
        <div className="flex flex-col h-full relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6 flex-shrink-0">
            <div className="w-14 h-14 bg-[#F9FCF0] rounded-full flex items-center justify-center text-[#B1D34A] border-2 border-[#B1D34A]/20">
              <BookOpen size={28} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-[#5C5C4D]">大頭菜交易大師攻略</h3>
              <p className="text-[10px] font-bold text-[#8E8E81] opacity-70 italic">
                AI 結合市場大數據深度總結
              </p>
            </div>
          </div>

          {/* Analysis Content Box (Scrollable) */}
          <div className="h-[200px] flex-shrink-0 bg-[#F9FCF0] rounded-[2rem] border-2 border-dashed border-[#B1D34A]/30 mb-6 overflow-hidden flex flex-col shadow-inner">
            <div className="flex-1 overflow-y-auto p-5 hide-scrollbar">
              <div className="space-y-4 text-[#5C5C4D]">
                <div className="space-y-1">
                  <h4 className="font-black text-sm text-[#B1D34A]">1. 周一上午定方向</h4>
                  <p className="text-xs font-bold leading-relaxed opacity-80">
                    計算（周一上午價 ÷ 買入價）×100%：<br/>
                    • ＜60%：多為 4 期型<br/>
                    • 85%-90%：易混淆 3期/4期/下降型<br/>
                    • ＞90%：可能為波動型
                  </p>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-black text-sm text-[#B1D34A]">2. 周四下午定生死</h4>
                  <p className="text-xs font-bold leading-relaxed opacity-80">
                    若前期持續跌，周四下午仍無反彈，大概率是下降型，請盡快止損；若反彈則往 3期/4期型走。
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-black text-sm text-[#B1D34A]">3. 抓峰技巧</h4>
                  <p className="text-xs font-bold leading-relaxed opacity-80">
                    • 3 期型：盯準周三至周五上漲段，3次上漲後及時出手。<br/>
                    • 4 期型：第 4 個上漲半天（多為周四至周五）賣出。<br/>
                    • 波動型：遇 1.3 倍以上收益即可考慮落袋為安。
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-black text-sm text-[#B1D34A]">4. 跨島套利</h4>
                  <p className="text-xs font-bold leading-relaxed opacity-80">
                    不同島嶼走勢獨立，可前往高價島賣出，大幅提升盈利概率。
                  </p>
                </div>

                {/* Optional AI Dynamic Note */}
                <div className="pt-4 mt-4 border-t border-[#B1D34A]/20">
                   <p className="text-[11px] italic font-bold text-[#B1D34A]">
                     AI 實時分析補充：<br/>
                     <span className="text-[#5C5C4D]/70">{advice}</span>
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Area */}
          <div className="mt-auto space-y-4 flex-shrink-0">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-orange-400 mt-0.5 flex-shrink-0">
                <TrendingUp size={14} />
              </div>
              <p className="text-[9px] font-bold text-gray-400 leading-tight">
                攻略僅供參考，大頭菜市場受多種隨機因素影響，請謹慎決定您的交易行為。
              </p>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-4 bg-[#B1D34A] text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-[#B1D34A]/20 hover:brightness-105 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Check size={20} strokeWidth={4} />
              我明白了
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisModal;
