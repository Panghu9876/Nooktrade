
// services/geminiService.ts
// 注意：函数名必须是 verifyArtWithAI（和组件导入的完全一样）

export const verifyArtWithAI = async (artworkName: string) => {
  // 模拟返回值，让组件能正常渲染
  return {
    authenticity: "authentic",
    confidence: 0.95,
    description: "艺术品验证功能已临时禁用（未配置 API Key）",
    tips: ["无需 API Key 也能正常预览页面啦～"]
  };
};

// 如果其他组件（如 TurnipExchange）用到，也导出对应的函数
export const predictTurnipPrice = async (priceData: any) => {
  return {
    predictedPrice: 120,
    trend: "上升",
    explanation: "价格预测功能已临时禁用"
  };
};
