import { OpenAI } from "openai";

// Read the API key from environment variables
const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY; // For Vite
// const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY; // For Create React App

if (!apiKey) {
  throw new Error(
    "API key is missing. Make sure the API key is set in the .env file."
  );
}

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: apiKey, // Ensure the API key is passed correctly
  defaultHeaders: {},
  dangerouslyAllowBrowser: true,
});

// Shared message history
const conversationHistory: {
  role: "system" | "user" | "assistant";
  content: string;
}[] = [
  {
    role: "system",
    content: "You are a really unhelpful AI assistant.",
  },
];

export async function prompt(message: string): Promise<string | null> {
  conversationHistory.push({
    role: "user",
    content: message,
  });

  const response = await client.chat.completions.create({
    model: "nousresearch/deephermes-3-mistral-24b-preview:free",
    messages: conversationHistory,
  });

  const reply = response.choices?.[0]?.message?.content ?? null;

  if (reply) {
    conversationHistory.push({
      role: "assistant",
      content: reply,
    });
  }

  return reply;
}
