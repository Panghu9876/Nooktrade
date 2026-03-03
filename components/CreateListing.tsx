
import React, { useState } from 'react';
import { Plane, Upload, ShieldCheck, Info, X, Check, MessageSquareText } from 'lucide-react';

interface CreateListingProps {
  onClose: () => void;
  onSuccess?: () => void;
}

const CreateListing: React.FC<CreateListingProps> = ({ onClose, onSuccess }) => {
  const [price, setPrice] = useState('');
  const [dodoCode, setDodoCode] = useState('');
  const [remarks, setRemarks] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && price && dodoCode) {
      // Logic for publishing would go here
      if (onSuccess) {
        onSuccess();
      } else {
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-300 relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Content Area */}
        <div className="space-y-6 relative">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-[#B1D34A] rotate-[-15deg]">
                <Plane size={32} fill="currentColor" strokeWidth={0} />
              </div>
              <h2 className="text-2xl font-black text-[#5C5C4D]">開放島嶼</h2>
            </div>
            <p className="text-[#8E8E81] text-xs font-bold opacity-70">向社區開放您的機場大門</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-wider ml-1">大頭菜價格</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔔</span>
                  <input 
                    type="number"
                    placeholder="0"
                    className="w-full pl-10 pr-3 py-3.5 bg-[#F9F9F2] border-2 border-[#E9E9DB] rounded-[1.2rem] outline-none focus:border-[#B1D34A] font-bold text-[#5C5C4D] transition-all text-sm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-wider ml-1">DODO 密碼</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">✈️</span>
                  <input 
                    type="text"
                    placeholder="XXXXX"
                    maxLength={5}
                    className="w-full pl-10 pr-3 py-3.5 bg-[#F9F9F2] border-2 border-[#E9E9DB] rounded-[1.2rem] outline-none focus:border-[#B1D34A] font-bold text-[#5C5C4D] uppercase transition-all text-sm placeholder:text-[#BBB]"
                    value={dodoCode}
                    onChange={(e) => setDodoCode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Remarks Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-wider ml-1">備註說明</label>
              <div className="relative">
                <span className="absolute left-3 top-4 text-lg">💬</span>
                <textarea 
                  placeholder="例如：請勿摘花、歡迎交換DIY、離開請走機場..."
                  rows={2}
                  className="w-full pl-10 pr-3 py-3.5 bg-[#F9F9F2] border-2 border-[#E9E9DB] rounded-[1.2rem] outline-none focus:border-[#B1D34A] font-bold text-[#5C5C4D] transition-all text-[10px] resize-none placeholder:text-[#BBB] leading-relaxed"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>
            </div>

            {/* Upload Area */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-wider ml-1 flex items-center justify-between">
                價格證明（必填）
                <Info size={12} className="opacity-50" />
              </label>
              <div className="border-2 border-dashed border-[#E9E9DB] rounded-[1.5rem] p-6 flex flex-col items-center justify-center gap-2 bg-[#FDFDF9] cursor-pointer hover:bg-white hover:border-[#B1D34A]/30 transition-all group">
                <div className="w-10 h-10 bg-[#8E8E81] group-hover:bg-[#B1D34A] rounded-full flex items-center justify-center text-white transition-colors">
                  <Upload size={20} />
                </div>
                <p className="text-[10px] font-bold text-[#8E8E81] text-center">點擊上傳商店價格截圖</p>
              </div>
            </div>

            {/* Agreement */}
            <div 
              onClick={() => setAgreed(!agreed)}
              className="bg-[#F9FCF0] border border-[#B1D34A]/20 rounded-[1.2rem] p-4 flex items-start gap-3 cursor-pointer select-none active:scale-[0.98] transition-all"
            >
              <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${agreed ? 'bg-[#B1D34A] border-[#B1D34A]' : 'bg-white border-[#E9E9DB]'}`}>
                {agreed && <Check size={14} strokeWidth={4} className="text-white" />}
              </div>
              <p className="text-[10px] font-bold text-[#2D5A27] leading-relaxed">
                我同意<span className="underline decoration-1 underline-offset-2 font-black">社區準則</span>。我不會進行現實貨幣交易 (RMT) 或索要高額「入場費」。
              </p>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={!agreed || !price || !dodoCode}
              className={`w-full py-4 rounded-[1.5rem] font-black text-lg shadow-xl transition-all active:scale-[0.98] ${
                agreed && price && dodoCode 
                ? 'bg-[#B1D34A] text-white shadow-[#B1D34A]/20' 
                : 'bg-[#E5E7EB] text-[#A1A1A1] shadow-none cursor-not-allowed'
              }`}
            >
              確定
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
