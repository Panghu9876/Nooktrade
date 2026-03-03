
import React, { useState } from 'react';
import { Compass, Palmtree, ArrowRight, User as UserIcon, Home as IslandIcon } from 'lucide-react';
import { UserProfile } from '../types';

interface LoginViewProps {
  onLogin: (profile: UserProfile) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [nickname, setNickname] = useState('');
  const [islandName, setIslandName] = useState('');
  const [hemisphere, setHemisphere] = useState<'North' | 'South'>('North');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim() && islandName.trim()) {
      onLogin({ nickname, islandName, hemisphere });
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-white animate-in fade-in duration-500">
      {/* Global Green Header for Login - Text removed as requested */}
      <div className="bg-[#B1D34A] h-40 w-full flex items-center px-8 shadow-md">
      </div>

      <div className="flex-1 px-8 pt-10 pb-12 bg-[#F9F9F2]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-[#B1D34A] shadow-lg mb-6 border border-gray-50">
            <Compass size={40} className="animate-pulse" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">無人島移居申請</h2>
            <p className="text-sm text-gray-500 mt-1">NookTrade 歡迎您的加入！</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">玩家暱稱</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1D34A]" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="輸入您的暱稱" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-[#B1D34A] transition-all shadow-sm"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">島嶼名稱</label>
              <div className="relative">
                <IslandIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1D34A]" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="輸入島嶼名稱" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-[#B1D34A] transition-all shadow-sm"
                  value={islandName}
                  onChange={(e) => setIslandName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-3 block">半球選擇</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setHemisphere('North')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all bg-white shadow-sm ${
                    hemisphere === 'North' 
                      ? 'border-[#B1D34A] text-[#B1D34A]' 
                      : 'border-transparent text-gray-400'
                  }`}
                >
                  <div className={`p-2 rounded-full transition-colors ${hemisphere === 'North' ? 'bg-[#B1D34A] text-white' : 'bg-gray-50 text-gray-300'}`}>
                    <Palmtree size={20} />
                  </div>
                  <span className="font-bold text-sm">北半球</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHemisphere('South')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all bg-white shadow-sm ${
                    hemisphere === 'South' 
                      ? 'border-[#B1D34A] text-[#B1D34A]' 
                      : 'border-transparent text-gray-400'
                  }`}
                >
                  <div className={`p-2 rounded-full transition-colors ${hemisphere === 'South' ? 'bg-[#B1D34A] text-white' : 'bg-gray-50 text-gray-300'}`}>
                    <Palmtree size={20} className="rotate-180" />
                  </div>
                  <span className="font-bold text-sm">南半球</span>
                </button>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#B1D34A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:brightness-105 transition-all active:scale-[0.98] mt-8"
          >
            護照登錄 <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
