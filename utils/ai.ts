import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { string, z } from "zod";

interface inputobject {
  Personality: string;
  Interest: string;
  WorkEnvironment: string;
}
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    recommendations: z.array(
      z.object({
        jobs: z
          .string()
          .describe("career that are suitable for the given questions only"),
        difficulty_score: z
          .number()
          .describe("Give a score out of 10 how difficult is the job"),
      })
    ),
    specific: z
      .string()
      .describe(
        "Consider the user words and give the best job only that aligns with his words"
      ),
    preffered: z
      .string()
      .describe(
        "Regardless of the user interest give the most trending job only in the domain the user have selected"
      ),
  })
);
export const analyze_data = async (user_input: inputobject) => {
  const input = `I need your assistance in suggesting suitable career paths. Please consider the following details:
  1. Personality: ${user_input.Personality}
  2. Interests: ${user_input.Interest}
  3. Preferred Work Environment: ${user_input.WorkEnvironment}
  
  
  Please provide career guidance based on these details, ensuring accurate and error-free results.`;
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
