
import React, { useState, useEffect } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { TrendingUp, Plus, List, Sparkles, Loader2, MessageSquareText, CheckCircle2, BookOpen } from 'lucide-react';
import { MOCK_TURNIP_DATA } from '../constants';
import { getTurnipAdvice } from '../services/geminiService';
import UpdatePriceModal from './UpdatePriceModal';
import AnalysisModal from './AnalysisModal';

const TurnipExchange: React.FC = () => {
  const [prices, setPrices] = useState(MOCK_TURNIP_DATA);
  const [advice, setAdvice] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    let timer: number;
    if (showSuccessToast) {
      timer = window.setTimeout(() => {
        setShowSuccessToast(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessToast]);

  const handlePredict = async () => {
    setIsPredicting(true);
    const result = await getTurnipAdvice(prices.map(p => p.price));
    setAdvice(result);
    setIsPredicting(false);
    setShowAnalysis(true);
  };

  const dayMap: Record<string, string> = {
    'Sun': '日',
    'Mon': '一',
    'Tue': '二',
    'Wed': '三',
    'Thu': '四',
    'Fri': '五',
    'Sat': '六'
  };

  const chartData = prices.map((p) => ({
    name: dayMap[p.day] || p.day,
    fullLabel: `${p.day === 'Sun' ? '週日' : p.day === 'Mon' ? '週一' : p.day === 'Tue' ? '週二' : p.day === 'Wed' ? '週三' : p.day === 'Thu' ? '週四' : p.day === 'Fri' ? '週五' : '週六'} ${p.period === 'AM' ? '上午' : '下午'}`,
    price: p.price
  }));

  const handleUpdateSubmit = (data: { islandName: string, price: string, dodoCode: string }) => {
    console.log('Publishing turnip price:', data);
    setIsUpdating(false);
    setShowSuccessToast(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-200px)]">
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] w-full max-w-[280px] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-[#B1D34A] text-white px-6 py-4 rounded-[2rem] shadow-xl flex items-center justify-center gap-3 border-4 border-white">
            <CheckCircle2 size={24} strokeWidth={3} />
            <span className="font-black text-lg">發佈成功！</span>
          </div>
        </div>
      )}

      {/* Update Price Modal Overlay */}
      {isUpdating && (
        <UpdatePriceModal 
          onClose={() => setIsUpdating(false)} 
          onSubmit={handleUpdateSubmit}
        />
      )}

      {/* AI Analysis Modal Overlay */}
      {showAnalysis && advice && (
        <AnalysisModal 
          advice={advice} 
          onClose={() => setShowAnalysis(false)} 
        />
      )}

      <div className="space-y-4 animate-in fade-in duration-500 pb-10">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">大頭菜價格追蹤</h2>
            <p className="text-gray-500 text-sm">利用市場趨勢與 AI 建議最佳化你的利潤。</p>
          </div>
          <button 
            onClick={() => setIsUpdating(true)}
            className="w-full bg-[#B1D34A] text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-sm hover:brightness-105 transition-all active:scale-[0.98]"
          >
            <Plus size={20} /> 更新價格
          </button>
        </div>

        {/* Price Chart Section */}
        <div className="bg-white rounded-[2.5rem] p-8 h-[380px] shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
              <TrendingUp size={20} className="text-[#B1D34A]" /> 每週價格趨勢
            </h3>
            <div className="text-[10px] font-black text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-gray-100">
              最新價格：{prices[prices.length - 1].price} 鈴錢
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B1D34A" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#B1D34A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0fdf4" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                interval={1}
                tick={{ fontWeight: 700 }}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '1.5rem', 
                  border: 'none', 
                  boxShadow: '0 15px 30px -5px rgba(0,0,0,0.1)', 
                  padding: '12px',
                  backgroundColor: '#fff'
                }}
                labelStyle={{ color: '#94a3b8', fontSize: '10px', marginBottom: '4px', fontWeight: 'bold' }}
                itemStyle={{ color: '#B1D34A', fontWeight: '900', fontSize: '16px' }}
                labelFormatter={(value, payload) => payload[0]?.payload?.fullLabel || value}
                formatter={(value) => [`${value} 鈴錢`, '價格']}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#B1D34A" 
                strokeWidth={4} 
                fillOpacity={1} 
                fill="url(#colorPrice)" 
                animationDuration={2000}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AI Market Insight Card */}
        <div className="bg-white rounded-[2rem] p-6 border border-[#B1D34A]/20 shadow-sm space-y-4 relative overflow-hidden">
          <div className="absolute top-[-20px] right-[-20px] text-[#B1D34A] opacity-5 rotate-12">
            <Sparkles size={120} />
          </div>
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-[#F9FCF0] rounded-xl flex items-center justify-center text-[#B1D34A]">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-800">AI 智慧分析</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed relative z-10">
            根據您本週目前的價格趨勢，AI 將協助您判斷目前的市場走勢。
          </p>
          <button 
            onClick={handlePredict}
            disabled={isPredicting}
            className="w-full bg-[#B1D34A] text-white py-4 rounded-2xl font-bold shadow-sm hover:brightness-105 transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative z-10"
          >
            {isPredicting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                正在計算中...
              </>
            ) : (
              <>
                <TrendingUp size={18} />
                預測趨勢
              </>
            )}
          </button>
        </div>

        {/* Price Patterns Section master instructions */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-[#B1D34A]">
            <BookOpen size={24} className="text-[#B1D34A]" />
            <h3 className="text-xl font-bold tracking-tight text-gray-800">大師交易攻略</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-[#F9FCF0] border border-[#B1D34A]/20 rounded-3xl p-5 space-y-1">
              <h4 className="font-bold text-[#2D5A27] text-sm">1. 周一上午定方向</h4>
              <p className="text-[#5C5C4D] text-xs leading-relaxed opacity-80">
                (周一上午價 ÷ 买入價) × 100%，＜60% 多為 4 期型；85%-90% 易混淆 3期/4期/下降型；＞90% 可能波動型。
              </p>
            </div>

            <div className="bg-[#FFF9F2] border border-orange-100 rounded-3xl p-5 space-y-1">
              <h4 className="font-bold text-orange-700 text-sm">2. 周四下午定生死</h4>
              <p className="text-orange-900 text-xs leading-relaxed opacity-80">
                若前期持續跌，周四下午仍無反彈，大概率是下降型，盡快止損；若反彈則往 3期/4期型走。
              </p>
            </div>

            <div className="bg-[#F0F7FF] border border-[#E1F0FF] rounded-3xl p-5 space-y-1">
              <h4 className="font-bold text-[#3182CE] text-sm">3. 抓峰技巧</h4>
              <p className="text-[#2B6CB0] text-xs leading-relaxed opacity-80">
                3 期盯周三五上漲段，3次上漲後出手；4 期在第 4 個上漲半天賣；波動型遇 1.3 倍收益可落袋。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnipExchange;
