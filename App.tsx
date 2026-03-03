
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  TrendingUp, 
  BookOpen, 
  User, 
  Bell, 
  Plus,
  Leaf,
  CheckCircle2
} from 'lucide-react';
import HomeView from './components/HomeView';
import Marketplace from './components/Marketplace';
import ArtVerification from './components/ArtVerification';
import TurnipExchange from './components/TurnipExchange';
import Profile from './components/Profile';
import LoginView from './components/LoginView';
import CreateListing from './components/CreateListing';
import NotificationsModal from './components/NotificationsModal';
import { UserProfile } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'market' | 'track' | 'guide' | 'profile'>('market');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isCreatingListing, setIsCreatingListing] = useState(false);
  const [isShowingNotifications, setIsShowingNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    let timer: number;
    if (showSuccessToast) {
      // Auto-hide success toast after 1 second
      timer = window.setTimeout(() => {
        setShowSuccessToast(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessToast]);

  const handleLogin = (profile: UserProfile) => {
    setUserProfile({
      ...profile,
      avatarUrl: 'https://picsum.photos/seed/user-avatar/200/200',
      passportNumber: 'SW-1234-5678-9012'
    });
    setActiveTab('market');
  };

  const handleLogout = () => {
    setUserProfile(null);
    setActiveTab('market');
  };

  const handleCreateSuccess = () => {
    setIsCreatingListing(false);
    setShowSuccessToast(true);
  };

  const openNotifications = () => {
    setIsShowingNotifications(true);
    setNotificationCount(0); // Mark as seen
  };

  const handleClearNotifications = () => {
    setNotificationCount(0);
    setIsShowingNotifications(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'market': return <Marketplace />;
      case 'track': return <TurnipExchange />;
      case 'guide': return <ArtVerification />;
      case 'profile': return userProfile ? <Profile userProfile={userProfile} onUpdateProfile={setUserProfile} onLogout={handleLogout} /> : null;
      default: return <Marketplace />;
    }
  };

  if (!userProfile) {
    return (
      <div className="app-shell">
        <LoginView onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="app-shell relative">
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[280px] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-[#B1D34A] text-white px-6 py-4 rounded-[2rem] shadow-xl flex items-center justify-center gap-3 border-4 border-white">
            <CheckCircle2 size={24} strokeWidth={3} />
            <span className="font-black text-lg">提交成功！</span>
          </div>
        </div>
      )}

      {/* App Header */}
      <header className="px-6 pt-10 pb-4 flex items-center justify-between bg-[#B1D34A] sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#B1D34A] shadow-sm">
            <Leaf size={22} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">NookTrade</h1>
        </div>
        <button 
          onClick={openNotifications}
          className="w-10 h-10 flex items-center justify-center text-white relative transition-transform active:scale-90"
        >
          <Bell size={28} />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-[#E74C3C] text-white text-[10px] font-bold rounded-full border-2 border-[#B1D34A] flex items-center justify-center animate-in zoom-in duration-300">
              {notificationCount}
            </span>
          )}
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto hide-scrollbar bg-[#F9F9F2]">
        <div className="px-5 pt-4 pb-28">
          {renderContent()}
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => setIsCreatingListing(true)}
          className="w-16 h-16 bg-[#B1D34A] border-4 border-white text-white rounded-full flex items-center justify-center shadow-lg fab-shadow transition-transform active:scale-90"
        >
          <Plus size={36} strokeWidth={3} />
        </button>
      </div>

      {/* App Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] bg-white border-t border-gray-100 px-4 py-2 flex justify-between items-center z-40">
        <TabItem icon={<ShoppingBag />} active={activeTab === 'market'} onClick={() => setActiveTab('market')} label="市場" />
        <TabItem icon={<TrendingUp />} active={activeTab === 'track'} onClick={() => setActiveTab('track')} label="追蹤" />
        <div className="w-16" /> {/* Spacer for FAB */}
        <TabItem icon={<BookOpen />} active={activeTab === 'guide'} onClick={() => setActiveTab('guide')} label="指南" />
        <TabItem icon={<User />} active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} label="個人" />
      </nav>

      {/* Modal Overlay for Create Listing */}
      {isCreatingListing && (
        <CreateListing 
          onClose={() => setIsCreatingListing(false)} 
          onSuccess={handleCreateSuccess}
        />
      )}

      {/* Notifications Modal Overlay */}
      {isShowingNotifications && (
        <NotificationsModal 
          onClose={() => setIsShowingNotifications(false)} 
          onClear={handleClearNotifications}
        />
      )}
    </div>
  );
};

interface TabItemProps {
  // Fix: Using any generic to allow cloneElement to inject size/strokeWidth props without TS error
  icon: React.ReactElement<any>;
  active: boolean;
  onClick: () => void;
  label: string;
}

const TabItem: React.FC<TabItemProps> = ({ icon, active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 min-w-[64px] transition-all duration-300 ${
      active ? 'text-[#B1D34A]' : 'text-[#8E8E8E]'
    }`}
  >
    <div className={`p-1.5 px-3 rounded-full transition-all ${active ? 'bg-[#F9FCF0]' : ''}`}>
      {/* Applying size and strokeWidth to cloned lucide icons */}
      {React.cloneElement(icon, { size: 24, strokeWidth: active ? 2.5 : 2 })}
    </div>
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default App;
