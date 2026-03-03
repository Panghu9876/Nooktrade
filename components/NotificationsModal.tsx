
import React, { useState } from 'react';
import { X, Plane, Trash2, CheckCircle2, Circle } from 'lucide-react';

interface Notification {
  id: string;
  user: string;
  island: string;
  time: string;
  type: 'arrival' | 'departure';
  isRead: boolean;
}

interface NotificationsModalProps {
  onClose: () => void;
  onClear: () => void;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: 'n1', user: '狸克', island: '發財島', time: '5 分鐘前', type: 'arrival', isRead: false },
  { id: 'n2', user: '西施惠', island: '行政島', time: '12 分鐘前', type: 'departure', isRead: false },
  { id: 'n3', user: '傅達', island: '化石島', time: '1 小時前', type: 'arrival', isRead: true },
  { id: 'n4', user: '莫里', island: '機場島', time: '3 小時前', type: 'departure', isRead: true },
];

const NotificationsModal: React.FC<NotificationsModalProps> = ({ onClose, onClear }) => {
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const hasUnread = notifications.some(n => !n.isRead);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-300 relative overflow-hidden flex flex-col max-h-[75vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="space-y-6 flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="text-center space-y-1 shrink-0">
            <h3 className="text-2xl font-black text-[#5C5C4D]">最近消息</h3>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xs font-bold text-[#8E8E81] opacity-70">查看造訪您島嶼的玩家</p>
              {hasUnread && (
                <button 
                  onClick={markAllRead}
                  className="text-[10px] font-black text-[#B1D34A] hover:underline"
                >
                  全部標為已讀
                </button>
              )}
            </div>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto hide-scrollbar space-y-3 pr-1">
            {notifications.length > 0 ? (
              notifications.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => markAsRead(item.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative group ${
                    item.isRead 
                      ? 'bg-[#FDFDFB] border-[#E9E9DB] opacity-75' 
                      : 'bg-[#F9F9F2] border-[#B1D34A]/30 shadow-sm'
                  }`}
                >
                  {/* Unread Indicator Dot */}
                  {!item.isRead && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2.5 h-2.5 bg-[#B1D34A] rounded-full animate-pulse shadow-[0_0_8px_rgba(177,211,74,0.6)]" />
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      item.isRead 
                        ? 'bg-gray-100 text-gray-400' 
                        : (item.type === 'arrival' ? 'bg-[#F0F9EB] text-[#B1D34A]' : 'bg-[#FFF5F5] text-red-300')
                    }`}>
                      {item.type === 'arrival' ? <Plane size={24} className="rotate-45" /> : <Plane size={24} className="-rotate-135" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-black text-sm truncate ${item.isRead ? 'text-[#8E8E81]' : 'text-[#5C5C4D]'}`}>
                          {item.user}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 shrink-0">{item.time}</span>
                      </div>
                      <p className={`text-[11px] font-bold truncate ${item.isRead ? 'text-gray-400' : 'text-[#8E8E81]'}`}>
                        {item.type === 'arrival' ? '已抵達您的島嶼' : '已離開您的島嶼'}
                      </p>
                      <p className={`text-[9px] font-black uppercase mt-0.5 ${item.isRead ? 'text-gray-300' : 'text-[#B1D34A]'}`}>
                        來自：{item.island}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                  <CheckCircle2 size={32} />
                </div>
                <p className="text-sm font-bold text-gray-300">目前沒有新消息</p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="pt-4 mt-auto border-t border-gray-100 flex gap-3">
            <button 
              onClick={() => {
                setNotifications([]);
                onClear();
              }}
              className="flex-1 py-3 bg-gray-50 text-gray-400 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <Trash2 size={14} /> 全部清空
            </button>
            <button 
              onClick={onClose}
              className="flex-1 py-3 bg-[#B1D34A] text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:brightness-105 transition-all"
            >
              <CheckCircle2 size={14} /> 我知道了
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
