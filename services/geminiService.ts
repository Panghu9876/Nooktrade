
// geminiService.ts - 临时禁用 AI 功能，仅保留空函数避免报错
// 原 Google Generative AI 相关代码已注释，如需恢复请配置 API Key

// 空函数：模拟 AI 响应，避免组件调用时报错
export const verifyArtwork = async (artworkName: string) => {
  // 模拟返回默认结果，保证界面正常显示
  return {
    authenticity: "authentic",
    confidence: 0.95,
    description: "艺术品验证功能已临时禁用（未配置 API Key）",
    tips: ["如需使用验证功能，请配置 Google Gemini API Key"]
  };
};

// 空函数：模拟大头菜价格预测
export const predictTurnipPrice = async (priceData: any) => {
  return {
    predictedPrice: 120,
    trend: "上升",
    explanation: "价格预测功能已临时禁用（未配置 API Key）"
  };
};
