
import React, { useState } from 'react';
import { X, Home, Key, Check, TrendingUp } from 'lucide-react';

interface UpdatePriceModalProps {
  onClose: () => void;
  onSubmit: (data: { islandName: string, price: string, dodoCode: string }) => void;
}

const UpdatePriceModal: React.FC<UpdatePriceModalProps> = ({ onClose, onSubmit }) => {
  const [islandName, setIslandName] = useState('');
  const [price, setPrice] = useState('');
  const [dodoCode, setDodoCode] = useState('');

  const handleConfirm = () => {
    if (islandName.trim() && price.trim() && dodoCode.trim()) {
      onSubmit({ islandName, price, dodoCode });
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
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-[#5C5C4D]">發佈價格</h3>
            <p className="text-xs font-bold text-[#8E8E81] opacity-70">分享島上的即時行情</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Island Name Field */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">島嶼名稱</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1D34A]">
                  <Home size={16} />
                </div>
                <input 
                  type="text"
                  placeholder="輸入島名"
                  className="w-full pl-10 pr-3 py-4 bg-[#F9F9F2] border-2 border-[#E9E9DB] focus:border-[#B1D34A] rounded-2xl outline-none transition-all font-bold text-[#5C5C4D] text-sm"
                  value={islandName}
                  onChange={(e) => setIslandName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Price Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">鈴錢價格</label>
                <div className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔔</span>
                  <input 
                    type="number"
                    placeholder="0"
                    className="w-full pl-10 pr-3 py-4 bg-[#F9F9F2] border-2 border-[#E9E9DB] focus:border-[#B1D34A] rounded-2xl outline-none transition-all font-bold text-[#5C5C4D] text-sm"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* Dodo Code Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">DODO 密碼</label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B1D34A]">
                    <Key size={16} />
                  </div>
                  <input 
                    type="text"
                    placeholder="XXXXX"
                    maxLength={5}
                    className="w-full pl-10 pr-3 py-4 bg-[#F9F9F2] border-2 border-[#E9E9DB] focus:border-[#B1D34A] rounded-2xl outline-none transition-all font-bold text-[#5C5C4D] text-sm uppercase tracking-widest placeholder:tracking-normal"
                    value={dodoCode}
                    onChange={(e) => setDodoCode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleConfirm}
              disabled={!islandName || !price || !dodoCode}
              className={`w-full py-4 rounded-[1.5rem] font-black text-lg shadow-xl transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2 ${
                islandName && price && dodoCode 
                ? 'bg-[#B1D34A] text-white shadow-[#B1D34A]/20' 
                : 'bg-[#E5E7EB] text-[#A1A1A1] shadow-none cursor-not-allowed'
              }`}
            >
              <Check size={20} strokeWidth={3} />
              確定發佈
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePriceModal;
