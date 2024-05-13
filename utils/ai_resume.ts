import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { array, z } from "zod";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    Experience_Improvements:
      z.string()
      .describe("Give a suitable Expereince description with the given data"),
    project_name: z.string().describe("Give details on how to name projects"),
    project1_Description: z.
      array(z.string()
      .describe("Give a suitable project description in multiple lines for the given project 1")),
      project2_Description: z.
      array(z.string()
      .describe("Give a suitable project description in multiple lines for the given project 2")),
    additional_recommendations: z.array(
      z
        .string()
        .describe("Give some additional recommendation to improve the resume")
    ),
  })
);

export const analyze_resume = async (data) => {
  console.log(data);
  const input = `Here is the data
    Previous Role name: ${data.Experience_Role}
    Experience Description:${data.Experience_Description}
    Project 1 name : ${data.project1}
    Project 1 Description : ${data.Project1_Description}
    Project 2 name : ${data.project2}
    Project 2 Description : ${data.Project2_Description}
    Consider this data as words in resume and find out where the improvements should be made`;

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Tips to improve resume from the above data\n{format_instructions}\n{question}"
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
  console.log(response);
};
