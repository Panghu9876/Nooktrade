
// services/geminiService.ts
// 临时禁用 AI 功能，导出所有需要的函数，避免构建报错

// 模拟艺术品验证函数
export const verifyArtworkWithAI = async (artworkName: string) => {
  // 模拟返回默认结果，保证界面正常显示
  return {
    authenticity: "authentic",
    confidence: 0.95,
    description: "艺术品验证功能已临时禁用（未配置 API Key）",
    tips: ["如需使用验证功能，请配置 Google Gemini API Key"]
  };
};

// 模拟大头菜价格预测函数
export const predictTurnipPrice = async (priceData: any) => {
  return {
    predictedPrice: 120,
    trend: "上升",
    explanation: "价格预测功能已临时禁用（未配置 API Key）"
  };
};
