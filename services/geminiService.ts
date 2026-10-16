
const parseJSONSafely = (text: string | undefined) => {
  if (!text) return {};
  const cleaned = text.trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Initial JSON parsing failure:", e);
    const jsonMatch = cleaned.match(/```json\s*([\s\S]*?)\s*```/) || cleaned.match(/{[\s\S]*}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } catch (innerE) {
        console.error("Fallback JSON parsing failure:", innerE);
      }
    }
    return {};
  }
};

// Shown in the calculators' AI panels when no Gemini key is configured. Be
// honest about it instead of implying a temporary outage.
export const AI_UNAVAILABLE_MESSAGE =
  "AI insights aren't available right now. Your results above are calculated directly from the inputs you entered.";

// The SDK is loaded on demand so it isn't bundled into every calculator page.
// In the static export process.env.API_KEY is undefined in the browser, so the
// import never runs unless a key is deliberately provided.
const getAIClient = async () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  const { GoogleGenAI, Type } = await import('@google/genai');
  return { ai: new GoogleGenAI({ apiKey }), Type };
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
    const client = await getAIClient();
    if (!client) return { marketSummary: "AI market analysis is not available right now.", keyInsights: [], ecosystemApps: [], comparisonMetrics: [] };
    const { ai, Type } = client;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the 2024-2025 finance market app ecosystem. 
      Contrast the "Daily Stack" of tools used by Institutional Professionals (Hedge Funds, Quants, Banks) versus "Normal People" (Retail Users).
      
      Requirements:
      1. List & profile the PRO stack: Bloomberg Terminal, Refinitiv Eikon, FactSet, Aladdin by BlackRock, and Charles River Development.
      2. List & profile the RETAIL/NORMAL stack: Robinhood, Wise (for FX), Revolut, Rocket Money, YNAB, and Vanguard.
      
      Compare them on:
      - Execution Speed (Latency)
      - Subscription Cost
      - Data Depth/Granularity
      - UX Simplicity vs Power
      
      Return a high-level summary, 3 democratization insights, 10 app profiles, and comparison metric scores (1-100).`,
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
    const client = await getAIClient();
    if (!client) return AI_UNAVAILABLE_MESSAGE;
    const { ai } = client;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Acting as a world-class financial advisor, analyze this ${context} data: ${JSON.stringify(data)}. Provide 3 distinct, actionable bullets (max 15 words each).`,
    });
    return response.text;
  });

  return result || AI_UNAVAILABLE_MESSAGE;
};