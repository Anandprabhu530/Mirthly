import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { z } from "zod";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    recommendations: z
      .array(z.string())
      .describe("career that are suitable for the given questions only"),
    specific: z
      .string()
      .describe(
        "Consider the user words and give the best job that aligns with his words"
      ),
    preffered: z
      .string()
      .describe(
        "Regardless of the user interest give the most trending job in the domain the user have selected"
      ),
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
