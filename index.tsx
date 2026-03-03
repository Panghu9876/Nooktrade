
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 强制校验根节点，避免挂载失败
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('❌ 致命错误：未找到 #root 挂载节点');
  // 手动创建节点，兜底显示
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  createRoot(div).render(<App />);
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
