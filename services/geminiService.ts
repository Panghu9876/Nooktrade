export const verifyArtWithAI = async (artworkName: string) => {
  return {
    authenticity: "authentic",
    confidence: 0.95,
    description: "艺术品验证功能已临时禁用",
    tips: ["页面可以正常显示啦～"]
  };
};

// 备用：如果其他组件需要，保留这个导出
export const predictTurnipPrice = async (priceData: any) => {
  return {
    predictedPrice: 120,
    trend: "上升",
    explanation: "价格预测功能已临时禁用"
  };
};
