
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Parses AI output for JSON data, handling potential markdown markers or leading/trailing text.
 */
const parseJSONSafely = (text: string | undefined) => {
  if (!text) return {};
  const cleaned = text.trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Attempt extraction from possible markdown code blocks
    const jsonMatch = cleaned.match(/```json\s*([\s\S]*?)\s*```/) || cleaned.match(/{[\s\S]*}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } catch (innerE) {
        console.error("Inner JSON parsing failure:", innerE);
      }
    }
    console.warn("Could not parse JSON from AI response:", cleaned);
    return {};
  }
};

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Missing API_KEY in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getMarketAnalysis = async () => {
  try {
    const ai = getAIClient();
    if (!ai) return { marketSummary: "AI intelligence is unavailable due to missing credentials.", keyInsights: [], ecosystemApps: [] };
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Analyze the current 2024-2025 financial market landscape. Focus on interest rate trends, inflation impacts, and a specific list of digital apps used by institutional professionals (Bloomberg, Terminal, Refinitiv, etc.) versus everyday people for day-to-day finance (Venmo, PayPal, Robinhood, CashApp, Revolut, etc.). Provide a concise summary, 3 key insights, and a list of 8-10 market-leading apps with descriptions of their daily utility.',
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
            ecosystemApps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  category: { type: Type.STRING },
                  userType: { type: Type.STRING, description: 'Institutional or Everyday User' },
                  description: { type: Type.STRING }
                },
                required: ['name', 'category', 'userType', 'description']
              }
            }
          },
          required: ['marketSummary', 'keyInsights', 'ecosystemApps']
        }
      }
    });

    return parseJSONSafely(response.text);
  } catch (e) {
    console.error("Market Analysis Failure:", e);
    return { marketSummary: "A temporary error occurred while fetching market insights.", keyInsights: [], ecosystemApps: [] };
  }
};

export const getFinancialAdvice = async (data: any, context: string) => {
  try {
    const ai = getAIClient();
    if (!ai) return "AI advisor is currently unavailable.";
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Acting as a world-class financial advisor, analyze this ${context} data: ${JSON.stringify(data)}. Provide 3 distinct, actionable bullets (max 15 words each) on how to optimize this specific scenario. Be professional, concise, and direct.`,
    });
    return response.text || "Advice currently unavailable.";
  } catch (e) {
    console.error("Financial Advice Failure:", e);
    return "Unable to generate AI recommendations at this moment.";
  }
};
