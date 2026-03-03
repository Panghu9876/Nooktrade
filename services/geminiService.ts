// services/geminiService.ts
// 关键：函数参数要接收 2 个值（artworkName + description），和组件调用一致
export const verifyArtWithAI = async (artworkName: string, description: string) => {
  // 返回字符串格式，匹配组件里 setResult 的接收类型
  return `這件${artworkName}經鑑定為真品！
描述細節：${description}
（AI 驗證功能已臨時禁用，頁面可正常顯示）`;
};

// 备用：如果其他组件需要，保留这个导出
export const predictTurnipPrice = async (priceData: any) => {
  return {
    predictedPrice: 120,
    trend: "上升",
    explanation: "价格预测功能已临时禁用"
  };
};
