import { GoogleGenAI, Type } from "@google/genai";

const parseJSONSafely = (text: string | undefined) => {
  if (!text) return {};
  const cleaned = text.trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    const jsonMatch = cleaned.match(/```json\s*([\s\S]*?)\s*```/) || cleaned.match(/{[\s\S]*}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } catch (innerE) {
        console.error("Inner JSON parsing failure:", innerE);
      }
    }
    return {};
  }
};

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

async function withRetry<T>(fn: () => Promise<T>, retries = 3, delay = 2000): Promise<T | null> {
  try {
    return await fn();
  } catch (error: any) {
    if (error?.status === 429 || error?.message?.includes('429') || error?.message?.includes('quota')) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
        return withRetry(fn, retries - 1, delay * 2);
      }
      return null;
    }
    throw error;
  }
}

export const getMarketAnalysis = async () => {
  return withRetry(async () => {
    const ai = getAIClient();
    if (!ai) return { marketSummary: "AI intelligence unavailable.", keyInsights: [], ecosystemApps: [], comparisonMetrics: [] };
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the modern finance market ecosystem. Contrast the tools used by 'Professional Institutional Traders' vs 'Normal People/Retail Users'. 
      Include:
      1. Institutional Stack: Bloomberg Terminal, FactSet, Aladdin, Refinitiv Eikon, Charles River.
      2. Retail/Day-to-Day Apps: Robinhood, Wise (TransferWise), Revolut, Rocket Money, YNAB, Vanguard, and Coinbase.
      
      Compare them on:
      - Execution Speed (Latency)
      - Annual Subscription Cost
      - Data Granularity/Depth
      - User Interface Accessibility
      
      Provide a summary of the 'Data Divide', 3 specific insights on market democratization, and profiles for 10 key apps.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            marketSummary: { type: Type.STRING },
            keyInsights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  content: { type: Type.STRING },
                  sentiment: { type: Type.STRING }
                },
                required: ['title', 'content', 'sentiment']
              }
            },
            comparisonMetrics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  metric: { type: Type.STRING },
                  proScore: { type: Type.NUMBER },
                  retailScore: { type: Type.NUMBER },
                  label: { type: Type.STRING }
                },
                required: ['metric', 'proScore', 'retailScore', 'label']
              }
            },
            ecosystemApps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  category: { type: Type.STRING },
                  userType: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ['name', 'category', 'userType', 'description']
              }
            }
          },
          required: ['marketSummary', 'keyInsights', 'ecosystemApps', 'comparisonMetrics']
        }
      }
    });

    return parseJSONSafely(response.text);
  }) || { marketSummary: "AI engine is busy.", keyInsights: [], ecosystemApps: [], comparisonMetrics: [] };
};

export const getFinancialAdvice = async (data: any, context: string) => {
  const result = await withRetry(async () => {
    const ai = getAIClient();
    if (!ai) return null;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Acting as a world-class financial advisor, analyze this ${context} data: ${JSON.stringify(data)}. Provide 3 distinct, actionable bullets (max 15 words each).`,
    });
    return response.text;
  });

  return result || "AI processing high volume. Please refresh.";
};