import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    recommendations: z
      .array(z.string())
      .describe(
        "Give the career that can be suitable for the given answers only"
      ),
    specific: z
      .string()
      .describe("Give the one carrer path that is suitable for the person"),
    preffered: z
      .string()
      .describe("Give the top trending jo in his requirement"),
  })
);

export const analyze_data = async (input: string) => {
  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Answer the users question as best as possible.\n{format_instructions}\n{question}"
    ),
    new ChatGoogleGenerativeAI({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
    }),
    parser,
  ]);
  const response = await chain.invoke({
    question: input,
    format_instructions: parser.getFormatInstructions(),
  });
  return response;
};

export const analyze_resume = async () => {
  return "Successful";
};
