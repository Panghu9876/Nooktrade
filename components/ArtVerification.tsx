
import React, { useState } from 'react';
import { Palette, Search, ShieldCheck, HelpCircle, Loader2 } from 'lucide-react';
import { verifyArtWithAI } from '../services/geminiService';

const ArtVerification: React.FC = () => {
  const [artName, setArtName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleVerify = async () => {
    if (!artName || !description) return;
    setIsLoading(true);
    const feedback = await verifyArtWithAI(artName, description);
    setResult(feedback);
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">傅達的鑑定助手</h2>
        <p className="text-gray-500">別被狐利的親戚騙了！使用 AI 專家驗證真偽。</p>
      </div>

      <div className="bg-white rounded-[2rem] p-6 md:p-8 space-y-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 p-4 bg-[#F9FCF0] text-[#B1D34A] rounded-2xl border border-[#B1D34A]/20">
          <p className="text-sm font-bold">描述藝術品的細節（例如：「蒙娜麗莎有眉毛」或「雕像手裡拿著一本書」）。</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">藝術品名稱</label>
            <input 
              type="text" 
              placeholder="例如：名貴的畫、英挺的雕像..." 
              className="w-full px-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B1D34A] shadow-sm"
              value={artName}
              onChange={(e) => setArtName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">你看到了什麼？</label>
            <textarea 
              rows={4}
              placeholder="描述顏色、人物 or 具體的異常之處..." 
              className="w-full px-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#B1D34A] shadow-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button 
            onClick={handleVerify}
            disabled={isLoading || !artName || !description}
            className="w-full bg-[#B1D34A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:brightness-105 disabled:opacity-50 transition-all active:scale-[0.98]"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <ShieldCheck size={20} />}
            鑑定藝術品
          </button>
        </div>

        {result && (
          <div className="mt-8 p-6 bg-[#F9FCF0] rounded-2xl border-2 border-dashed border-[#B1D34A] animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4 text-[#B1D34A]">
              <ShieldCheck size={24} />
              <h4 className="font-bold text-lg">鑑定結果</h4>
            </div>
            <div className="prose prose-green max-w-none text-gray-700 leading-relaxed">
              {result.split('\n').map((para, i) => <p key={i} className="mb-2 text-sm font-bold">{para}</p>)}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm opacity-80">
          <img src="https://picsum.photos/seed/statue1/100/100" className="w-12 h-12 rounded-xl object-cover" alt="Guide" />
          <div>
            <p className="font-bold text-gray-800 text-sm">雕塑指南</p>
            <p className="text-[10px] text-gray-400">查看視覺差異</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm opacity-80">
          <img src="https://picsum.photos/seed/painting1/100/100" className="w-12 h-12 rounded-xl object-cover" alt="Guide" />
          <div>
            <p className="font-bold text-gray-800 text-sm">畫作指南</p>
            <p className="text-[10px] text-gray-400">常見偽造細節</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtVerification;
