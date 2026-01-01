
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateServiceIdea = async (category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بصفتك خبيراً في منصات الخدمات المصغرة العربية مثل خمسات، اقترح فكرة خدمة مصغرة مبتكرة في تصنيف "${category}".
      يجب أن يكون الرد باللغة العربية الفصحى وبصيغة JSON تحتوي على:
      - title: عنوان الخدمة
      - description: وصف مختصر وجذاب
      - price: سعر مقترح يبدأ من 5 دولار
      - deliveryTime: وقت التسليم المتوقع بالأيام`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            price: { type: Type.NUMBER },
            deliveryTime: { type: Type.NUMBER },
          },
          required: ["title", "description", "price", "deliveryTime"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};

export const generateBlogSummary = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `اكتب ملخصاً مشوقاً لمقال في مدونة حول موضوع: "${topic}". الملخص يجب أن يستهدف المستقلين العرب ويشجعهم على القراءة.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، لم نتمكن من توليد الملخص حالياً.";
  }
};
