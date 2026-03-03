
import React, { useState } from 'react';
import { 
  Settings, 
  MapPin, 
  Award, 
  ShieldCheck, 
  History, 
  Package, 
  Heart,
  Share2,
  CreditCard,
  LogOut
} from 'lucide-react';
import { UserProfile } from '../types';
import EditProfileModal from './EditProfileModal';
import ShareModal from './ShareModal';
import ListingHistoryModal from './ListingHistoryModal';
import VisitHistoryModal from './VisitHistoryModal';

interface ProfileProps {
  userProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ userProfile, onUpdateProfile, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isListingsModalOpen, setIsListingsModalOpen] = useState(false);
  const [isVisitHistoryModalOpen, setIsVisitHistoryModalOpen] = useState(false);
  
  // States to manage the visual "selected" effect on buttons
  const [isListingsSelected, setIsListingsSelected] = useState(false);
  const [isVisitHistorySelected, setIsVisitHistorySelected] = useState(false);

  const handleSaveProfile = (updated: UserProfile) => {
    onUpdateProfile(updated);
    setIsEditing(false);
  };

  const openListingsHistory = () => {
    setIsListingsSelected(true);
    setIsVisitHistorySelected(false);
    setIsListingsModalOpen(true);
  };

  const openVisitHistory = () => {
    setIsVisitHistorySelected(true);
    setIsListingsSelected(false);
    setIsVisitHistoryModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-500 pb-12">
      {/* Edit Profile Modal */}
      {isEditing && (
        <EditProfileModal 
          userProfile={userProfile} 
          onClose={() => setIsEditing(false)} 
          onSave={handleSaveProfile} 
        />
      )}

      {/* Share Modal */}
      {isSharing && (
        <ShareModal onClose={() => setIsSharing(false)} />
      )}

      {/* My Listings History Modal */}
      {isListingsModalOpen && (
        <ListingHistoryModal onClose={() => {
          setIsListingsModalOpen(false);
          setIsListingsSelected(false);
        }} />
      )}

      {/* Island Visit History Modal */}
      {isVisitHistoryModalOpen && (
        <VisitHistoryModal onClose={() => {
          setIsVisitHistoryModalOpen(false);
          setIsVisitHistorySelected(false);
        }} />
      )}

      {/* Profile Banner */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="h-32 bg-white flex items-center justify-center relative">
          {/* Passport Badge Overlay */}
          <div className="absolute top-4 left-4 bg-[#B1D34A]/10 text-[#B1D34A] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
            <CreditCard size={10} /> {userProfile.passportNumber || 'N/A'}
          </div>
        </div>
        <div className="px-6 pb-6 -mt-12 text-center">
          <div className="inline-block relative">
            <div className="w-24 h-24 rounded-[2rem] bg-white p-1.5 shadow-xl border-4 border-white mx-auto overflow-hidden">
              <img src={userProfile.avatarUrl || "https://picsum.photos/seed/user-avatar/200/200"} className="w-full h-full object-cover rounded-[1.5rem]" alt="Profile" />
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{userProfile.nickname}</h2>
            <div className="flex flex-wrap items-center justify-center gap-2 text-gray-500 text-xs">
              <span className="flex items-center gap-1 font-bold text-[#B1D34A] bg-[#F9FCF0] px-2 py-1 rounded-lg">
                <MapPin size={12} /> {userProfile.islandName}
              </span>
              <span className="flex items-center gap-1 font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-wider">
                {userProfile.hemisphere === 'North' ? '北半球' : '南半球'}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <button 
              onClick={() => setIsSharing(true)}
              className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-600 rounded-2xl font-bold text-sm transition-all active:scale-95"
            >
              <Share2 size={16} /> 分享
            </button>
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-600 rounded-2xl font-bold text-sm transition-all active:scale-95"
            >
              <Settings size={16} /> 編輯
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Trust Metrics */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-50 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 text-sm">
            <ShieldCheck size={18} className="text-[#B1D34A]" /> 信用評分
          </h3>
          <div className="space-y-4">
             <div className="flex justify-between items-center">
               <span className="text-xs font-bold text-gray-400">名聲</span>
               <span className="text-xs font-bold text-[#B1D34A]">新島民</span>
             </div>
             <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
               <div className="w-[15%] h-full bg-[#B1D34A]"></div>
             </div>
             <div className="grid grid-cols-2 gap-3">
               <div className="p-3 bg-orange-50 rounded-2xl text-center">
                 <p className="text-lg font-bold text-orange-600">34</p>
                 <p className="text-[9px] text-orange-400 uppercase font-black tracking-tight">成功交易</p>
               </div>
               <div className="p-3 bg-blue-50 rounded-2xl text-center">
                 <p className="text-lg font-bold text-blue-600">5.0</p>
                 <p className="text-[9px] text-blue-400 uppercase font-black tracking-tight">平均評分</p>
               </div>
             </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={openListingsHistory}
            className={`flex-1 py-4 bg-white font-bold rounded-2xl flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
              isListingsSelected 
              ? 'border-2 border-[#B1D34A] text-[#B1D34A] shadow-sm' 
              : 'border border-gray-100 text-gray-400'
            }`}
          >
            <Package size={18} /> 我的发布
          </button>
          <button 
            onClick={openVisitHistory}
            className={`flex-1 py-4 bg-white font-bold rounded-2xl flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
              isVisitHistorySelected 
              ? 'border-2 border-[#B1D34A] text-[#B1D34A] shadow-sm' 
              : 'border border-gray-100 text-gray-400'
            }`}
          >
            <History size={18} /> 登島記錄
          </button>
        </div>

        {/* Wishlist */}
        <div className="bg-white rounded-[2rem] border border-gray-50 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-sm">願望清單</h3>
            <button className="text-xs text-[#B1D34A] font-bold">新增</button>
          </div>
          <div className="p-10 text-center space-y-4">
             <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto text-pink-400">
               <Heart size={32} />
             </div>
             <div className="space-y-1">
               <p className="font-bold text-gray-700 text-sm">願望清單是空的</p>
               <p className="text-xs text-gray-400">儲存你正在尋找的物品！</p>
             </div>
          </div>
        </div>

        {/* Logout Button */}
        <div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-red-100 text-red-400 rounded-2xl font-bold text-sm transition-all active:scale-[0.98] hover:bg-red-50"
          >
            <LogOut size={18} />
            退出登錄
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
