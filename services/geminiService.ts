
import { GoogleGenAI, Type } from "@google/genai";
import { Category, Recommendation, UserAnswers } from "../types";

export const getRecommendation = async (
  category: Category,
  answers: UserAnswers
): Promise<Recommendation> => {
  if (!process.env.API_KEY) {
    throw new Error("Missing API Key. Please ensure your environment is configured correctly.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const userContext = Object.entries(answers)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');

  const prompt = `
    Role: Senior Tech Consultant.
    Task: Recommend the single best current model of ${category} based on these user preferences.
    User Context: ${userContext}
    
    Constraint: You MUST recommend a REAL product that is currently available for purchase in 2024-2025. 
    Be specific (e.g., 'MacBook Pro 14 M3 Max' instead of just 'MacBook').
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
            productName: { type: Type.STRING, description: "Full official model name" },
            tagline: { type: Type.STRING, description: "Punchy marketing line" },
            reasons: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 sentences explaining why this specifically fits the user's answers"
            },
            description: { type: Type.STRING, description: "2-3 sentence overview of the product" },
            specs: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 key technical specifications"
            }
          },
          required: ["productName", "tagline", "reasons", "description", "specs"]
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI.");
    
    return JSON.parse(text);
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    
    // Check for specific error types
    if (error.message?.includes("401") || error.message?.includes("403")) {
      throw new Error("API Key issue detected. Please check your credentials.");
    }
    
    throw new Error(error.message || "Failed to generate recommendation. The server might be busy.");
  }
};
