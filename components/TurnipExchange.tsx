import React, { useState } from 'react';
import { Calendar, TrendingUp, TrendingDown, Info, Loader2 } from 'lucide-react';

// 注释掉对 geminiService 的导入，解决文件引用报错
// import { predictTurnipPrice } from '../services/geminiService';

const TurnipExchange: React.FC = () => {
  // 大头菜价格状态管理
  const [buyPrice, setBuyPrice] = useState<string>('');
  const [monAmPrice, setMonAmPrice] = useState<string>('');
  const [monPmPrice, setMonPmPrice] = useState<string>('');
  const [tueAmPrice, setTueAmPrice] = useState<string>('');
  const [tuePmPrice, setTuePmPrice] = useState<string>('');
  const [wedAmPrice, setWedAmPrice] = useState<string>('');
  const [wedPmPrice, setWedPmPrice] = useState<string>('');
  const [thuAmPrice, setThuAmPrice] = useState<string>('');
  const [thuPmPrice, setThuPmPrice] = useState<string>('');
  const [friAmPrice, setFriAmPrice] = useState<string>('');
  const [friPmPrice, setFriPmPrice] = useState<string>('');
  const [satAmPrice, setSatAmPrice] = useState<string>('');
  const [satPmPrice, setSatPmPrice] = useState<string>('');
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<any>(null);

  // 价格预测处理函数（替换 AI 调用为模拟数据）
  const handlePredict = async () => {
    // 验证必填项
    if (!buyPrice) {
      alert('请输入购买价格！');
      return;
    }

    setIsLoading(true);
    
    // 模拟 AI 预测结果，不再调用外部函数
    // 组装价格数据（仅用于模拟）
    const priceData = {
      buyPrice: Number(buyPrice),
      prices: {
        monAm: monAmPrice ? Number(monAmPrice) : null,
        monPm: monPmPrice ? Number(monPmPrice) : null,
        tueAm: tueAmPrice ? Number(tueAmPrice) : null,
        tuePm: tuePmPrice ? Number(tuePmPrice) : null,
        wedAm: wedAmPrice ? Number(wedAmPrice) : null,
        wedPm: wedPmPrice ? Number(wedPmPrice) : null,
        thuAm: thuAmPrice ? Number(thuAmPrice) : null,
        thuPm: thuPmPrice ? Number(thuPmPrice) : null,
        friAm: friAmPrice ? Number(friAmPrice) : null,
        friPm: friPmPrice ? Number(friPmPrice) : null,
        satAm: satAmPrice ? Number(satAmPrice) : null,
        satPm: satPmPrice ? Number(satPmPrice) : null,
      }
    };

    // 模拟异步请求延迟
    setTimeout(() => {
      // 模拟预测结果（和原 AI 函数返回格式一致）
      const pricePrediction = {
        predictedPrice: 120,
        trend: "上升",
        explanation: "价格预测功能已临时禁用（移除 AI 依赖）"
      };
      
      setPrediction(pricePrediction);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 p-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">大头菜价格预测</h2>
        <p className="text-gray-500">输入价格，AI 帮你分析最佳出售时机</p>
      </div>

      {/* 价格输入区域 */}
      <div className="bg-white rounded-[2rem] p-6 md:p-8 space-y-6 shadow-sm border border-gray-100">
        {/* 购买价格 */}
        <div className="space-y-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            周日购买价格 (铃钱)
          </label>
          <input 
            type="number" 
            placeholder="例如：90" 
            className="w-full px-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B1D34A] shadow-sm"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
          />
        </div>

        {/* 每日价格表格 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-4 text-left text-gray-500 font-bold">日期</th>
                <th className="pb-4 text-left text-gray-500 font-bold">上午价格</th>
                <th className="pb-4 text-left text-gray-500 font-bold">下午价格</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {/* 周一 */}
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold">周一</td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={monAmPrice}
                    onChange={(e) => setMonAmPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={monPmPrice}
                    onChange={(e) => setMonPmPrice(e.target.value)}
                  />
                </td>
              </tr>
              {/* 周二 */}
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold">周二</td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={tueAmPrice}
                    onChange={(e) => setTueAmPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={tuePmPrice}
                    onChange={(e) => setTuePmPrice(e.target.value)}
                  />
                </td>
              </tr>
              {/* 周三 */}
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold">周三</td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={wedAmPrice}
                    onChange={(e) => setWedAmPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={wedPmPrice}
                    onChange={(e) => setWedPmPrice(e.target.value)}
                  />
                </td>
              </tr>
              {/* 周四 */}
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold">周四</td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={thuAmPrice}
                    onChange={(e) => setThuAmPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={thuPmPrice}
                    onChange={(e) => setThuPmPrice(e.target.value)}
                  />
                </td>
              </tr>
              {/* 周五 */}
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold">周五</td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={friAmPrice}
                    onChange={(e) => setFriAmPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={friPmPrice}
                    onChange={(e) => setFriPmPrice(e.target.value)}
                  />
                </td>
              </tr>
              {/* 周六 */}
              <tr>
                <td className="py-4 font-bold">周六</td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={satAmPrice}
                    onChange={(e) => setSatAmPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    placeholder="-" 
                    className="w-24 px-3 py-2 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#B1D34A]"
                    value={satPmPrice}
                    onChange={(e) => setSatPmPrice(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 预测按钮 */}
        <button 
          onClick={handlePredict}
          disabled={isLoading || !buyPrice}
          className="w-full bg-[#B1D34A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-105 disabled:opacity-50 transition-all active:scale-[0.98]"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <TrendingUp size={20} />}
          预测最佳出售价格
        </button>
      </div>

      {/* 预测结果展示 */}
      {prediction && (
        <div className="mt-8 p-6 bg-[#F9FCF0] rounded-2xl border-2 border-dashed border-[#B1D34A] animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-4 text-[#B1D34A]">
            <Info size={24} />
            <h4 className="font-bold text-lg">预测结果</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">最佳出售价格</p>
              <p className="text-3xl font-bold text-gray-800">
                {prediction.predictedPrice} 铃钱
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-500 text-sm">价格趋势</p>
              <p className="text-xl font-bold flex items-center gap-2">
                {prediction.trend === "上升" ? (
                  <TrendingUp className="text-green-500" size={20} />
                ) : (
                  <TrendingDown className="text-red-500" size={20} />
                )}
                {prediction.trend}
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-gray-700 text-sm leading-relaxed">
            <p>{prediction.explanation}</p>
          </div>
        </div>
      )}

      {/* 小贴士 */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Info size={20} className="text-[#B1D34A]" />
          <h4 className="font-bold text-gray-800">大头菜小贴士</h4>
        </div>
        <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
          <li>大头菜价格每周日刷新，周六24点过期</li>
          <li>价格趋势分为：下降型、波动型、上升型、暴跌型</li>
          <li>最佳出售时机通常在周三到周五之间</li>
        </ul>
      </div>
    </div>
  );
};

export default TurnipExchange;
