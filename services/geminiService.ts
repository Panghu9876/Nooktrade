
import { GoogleGenAI } from "@google/genai";

// Always use the process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const verifyArtWithAI = async (itemName: string, userDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `你是一位《集合啦！動物森友會》藝術品鑑定專家。鑑定目標：「${itemName}」，玩家描述：「${userDescription}」。請極簡短判斷真偽，並說明鑑定關鍵點。使用繁體中文。`,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.4,
        maxOutputTokens: 400,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "暫時無法鑑定。請查看官方指南！";
  }
};

export const getTurnipAdvice = async (prices: number[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `大頭菜價格序列：${prices.join(', ')}。分析屬於哪種模式（波型、遞減、三期、四期）並給出極簡短的買賣建議。使用繁體中文。`,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.4,
      }
    });
    return response.text;
  } catch (error) {
    return "大頭菜市場今天難以捉摸！請持續關注趨勢。";
  }
};
