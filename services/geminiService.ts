
import { GoogleGenAI, Type } from "@google/genai";
import { Category, Recommendation, UserAnswers } from "../types";

export const getRecommendation = async (
  category: Category,
  answers: UserAnswers
): Promise<Recommendation> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Based on these user preferences for a ${category}, recommend the SINGLE best specific product available on the market today.
    
    User answers:
    ${Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`).join('\n')}
    
    Provide a detailed recommendation including its name, a catchy tagline, three specific reasons why it fits these answers, a short description, and 3 key specs.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            productName: { type: Type.STRING },
            tagline: { type: Type.STRING },
            reasons: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            description: { type: Type.STRING },
            specs: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["productName", "tagline", "reasons", "description", "specs"]
        },
      },
    });

    const result = JSON.parse(response.text);
    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate recommendation. Please try again.");
  }
};
