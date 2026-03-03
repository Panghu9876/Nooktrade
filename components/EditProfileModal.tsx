
import React, { useState } from 'react';
import { X, User, Home, MapPin, Camera, Save, Palmtree, CreditCard } from 'lucide-react';
import { UserProfile } from '../types';

interface EditProfileModalProps {
  userProfile: UserProfile;
  onClose: () => void;
  onSave: (updatedProfile: UserProfile) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ userProfile, onClose, onSave }) => {
  const [nickname, setNickname] = useState(userProfile.nickname);
  const [islandName, setIslandName] = useState(userProfile.islandName);
  const [hemisphere, setHemisphere] = useState(userProfile.hemisphere);
  const [passportNumber, setPassportNumber] = useState(userProfile.passportNumber || '');
  const [avatarUrl, setAvatarUrl] = useState(userProfile.avatarUrl || '');

  const handleSave = () => {
    onSave({
      ...userProfile,
      nickname,
      islandName,
      hemisphere,
      passportNumber,
      avatarUrl
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-300 relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto hide-scrollbar flex-1 space-y-6 pr-1">
          {/* Header */}
          <div className="space-y-1 text-center mt-2">
            <h3 className="text-2xl font-black text-[#5C5C4D]">編輯個人資料</h3>
            <p className="text-xs font-bold text-[#8E8E81] opacity-70">更新您的護照資訊</p>
          </div>

          {/* Avatar Edit */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative group cursor-pointer" onClick={() => setAvatarUrl(`https://picsum.photos/seed/${Math.random()}/200/200`)}>
              <div className="w-24 h-24 rounded-[2rem] bg-[#F9F9F2] p-1 border-4 border-[#B1D34A] overflow-hidden shadow-md">
                <img src={avatarUrl} className="w-full h-full object-cover rounded-[1.5rem]" alt="Avatar" />
              </div>
              <div className="absolute bottom-0 right-0 bg-[#B1D34A] text-white p-2 rounded-xl shadow-lg border-2 border-white">
                <Camera size={14} />
              </div>
            </div>
            <p className="text-[10px] font-bold text-gray-400">點擊隨機更換頭像</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">玩家名稱</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1D34A]">
                  <User size={16} />
                </div>
                <input 
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-full pl-10 pr-3 py-4 bg-[#F9F9F2] border-2 border-[#E9E9DB] focus:border-[#B1D34A] rounded-2xl outline-none transition-all font-bold text-[#5C5C4D] text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">島嶼名稱</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1D34A]">
                  <Home size={16} />
                </div>
                <input 
                  type="text"
                  value={islandName}
                  onChange={(e) => setIslandName(e.target.value)}
                  className="w-full pl-10 pr-3 py-4 bg-[#F9F9F2] border-2 border-[#E9E9DB] focus:border-[#B1D34A] rounded-2xl outline-none transition-all font-bold text-[#5C5C4D] text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">護照號碼</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B1D34A]">
                  <CreditCard size={16} />
                </div>
                <input 
                  type="text"
                  placeholder="SW-0000-0000-0000"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  className="w-full pl-10 pr-3 py-4 bg-[#F9F9F2] border-2 border-[#E9E9DB] focus:border-[#B1D34A] rounded-2xl outline-none transition-all font-bold text-[#5C5C4D] text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-[#8E8E81] uppercase tracking-widest ml-1">南北半球</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setHemisphere('North')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-xs border-2 transition-all ${
                    hemisphere === 'North' 
                    ? 'bg-[#B1D34A] text-white border-[#B1D34A]' 
                    : 'bg-white text-gray-400 border-gray-100'
                  }`}
                >
                  <Palmtree size={14} /> 北半球
                </button>
                <button 
                  onClick={() => setHemisphere('South')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-xs border-2 transition-all ${
                    hemisphere === 'South' 
                    ? 'bg-[#B1D34A] text-white border-[#B1D34A]' 
                    : 'bg-white text-gray-400 border-gray-100'
                  }`}
                >
                  <Palmtree size={14} className="rotate-180" /> 南半球
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 mt-4 border-t border-gray-100">
          <button 
            onClick={handleSave}
            className="w-full py-4 bg-[#B1D34A] text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-[#B1D34A]/20 hover:brightness-105 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Save size={20} strokeWidth={3} />
            保存修改
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
