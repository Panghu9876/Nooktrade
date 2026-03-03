
import React from 'react';
import { X, Instagram, Facebook, Twitter, MessageCircle, Link, Send, Check } from 'lucide-react';

interface ShareModalProps {
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const shareOptions = [
    { name: 'Instagram', icon: <Instagram size={24} />, color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', textColor: 'text-white' },
    { name: 'WeChat', icon: <MessageCircle size={24} />, color: 'bg-[#07C160]', textColor: 'text-white' },
    { name: 'Facebook', icon: <Facebook size={24} />, color: 'bg-[#1877F2]', textColor: 'text-white' },
    { name: 'Twitter', icon: <Twitter size={24} />, color: 'bg-black', textColor: 'text-white' },
    { 
      name: 'Xiaohongshu', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.4 2H5.6C3.6 2 2 3.6 2 5.6V18.4C2 20.4 3.6 22 5.6 22H18.4C20.4 22 22 20.4 22 18.4V5.6C22 3.6 20.4 2 -18.4 2ZM11.4 17.5C11.4 17.5 9.7 17.5 9.2 16C8.8 14.5 9.5 12.8 11.2 12.5C10 12.1 9.3 11 9.5 9.8C9.7 8.5 11 7.7 12.2 8C13.5 8.3 14.2 9.7 13.8 11C13.5 11.8 12.8 12.3 12 12.4C13.5 12.8 14.4 14.4 14.1 15.9C13.8 17.4 12.4 18.1 11.4 17.5Z" />
          <path d="M10.8 10.3C10.6 10.3 10.5 10.5 10.5 10.7C10.6 10.9 10.8 11.1 11 11.1C11.2 11.1 11.4 10.9 11.4 10.7C11.3 10.5 11.1 10.3 10.8 10.3ZM10.8 14.4C10.5 14.4 10.3 14.6 10.3 14.9C10.4 15.2 10.6 15.4 10.9 15.4C11.2 15.4 11.4 15.2 11.4 14.9C11.3 14.6 11.1 14.4 10.8 14.4Z" />
        </svg>
      ), 
      color: 'bg-[#ff2442]', 
      textColor: 'text-white' 
    },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-[#B1D34A] scale-in-center animate-in zoom-in-95 duration-300 relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-[#5C5C4D]">分享</h3>
            <p className="text-xs font-bold text-[#8E8E81] opacity-70">和朋友一起使用</p>
          </div>

          <div className="grid grid-cols-3 gap-y-8 gap-x-4">
            {shareOptions.map((option) => (
              <button 
                key={option.name}
                className="flex flex-col items-center gap-2 group transition-transform active:scale-90"
                onClick={() => {}} // Integration logic here
              >
                <div className={`w-14 h-14 ${option.color} ${option.textColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:brightness-110 transition-all`}>
                  {option.icon}
                </div>
                <span className="text-[10px] font-black text-gray-500 tracking-tight">{option.name}</span>
              </button>
            ))}
            
            <button 
              className="flex flex-col items-center gap-2 group transition-transform active:scale-90"
              onClick={handleCopy}
            >
              <div className={`w-14 h-14 ${copied ? 'bg-[#B1D34A]' : 'bg-gray-100'} ${copied ? 'text-white' : 'text-gray-500'} rounded-2xl flex items-center justify-center shadow-md transition-all`}>
                {copied ? <Check size={24} /> : <Link size={24} />}
              </div>
              <span className="text-[10px] font-black text-gray-500 tracking-tight">
                {copied ? '已複製' : '複製連結'}
              </span>
            </button>
          </div>

          <div className="p-4 bg-[#F9FCF0] rounded-2xl border border-[#B1D34A]/20">
            <p className="text-[10px] font-bold text-[#2D5A27] text-center leading-relaxed">
              分享後，其他島民可以透過連結查看您的公開刊登與信譽評分。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
